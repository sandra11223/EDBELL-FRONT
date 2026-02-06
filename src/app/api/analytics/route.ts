import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, title, userAgent, referrer } = body;

    if (!page) {
      return NextResponse.json(
        { error: 'Page is required' },
        { status: 400 }
      );
    }

    console.log('📊 Page view tracked:', {
      page,
      title,
      timestamp: new Date().toISOString(),
      userAgent: userAgent?.substring(0, 100) || 'Unknown',
      referrer: referrer || 'Direct'
    });

    // Try to save to MongoDB
    try {
      const connectDB = (await import('@/lib/mongodb')).default;
      const mongoose = await import('mongoose');
      
      await connectDB();
      
      // Save page view to analytics collection
      const pageViewData = {
        page,
        title: title || page,
        userAgent: userAgent || '',
        referrer: referrer || '',
        timestamp: new Date(),
        date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format for daily aggregation
        hour: new Date().getHours()
      };
      
      const result = await mongoose.connection.db.collection('pageviews').insertOne(pageViewData);
      console.log('✅ Page view saved to MongoDB:', result.insertedId);
      
      return NextResponse.json({
        success: true,
        message: 'Page view tracked successfully'
      });
      
    } catch (dbError) {
      console.error('❌ MongoDB save failed:', dbError);
      
      // Still return success to avoid breaking the website
      return NextResponse.json({
        success: true,
        message: 'Page view logged'
      });
    }

  } catch (error: any) {
    console.error('❌ Analytics tracking error:', error);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Analytics logged'
      },
      { status: 200 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log('📊 Fetching analytics data...');
    
    const connectDB = (await import('@/lib/mongodb')).default;
    const mongoose = await import('mongoose');
    
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    
    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    console.log(`📊 Fetching analytics for last ${days} days...`);
    
    // Get page views aggregated by page
    const pageViewsAggregation = await mongoose.connection.db.collection('pageviews').aggregate([
      {
        $match: {
          timestamp: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $group: {
          _id: '$page',
          views: { $sum: 1 },
          title: { $first: '$title' },
          lastVisit: { $max: '$timestamp' }
        }
      },
      {
        $sort: { views: -1 }
      },
      {
        $limit: 10
      }
    ]).toArray();
    
    // Calculate total views
    const totalViews = pageViewsAggregation.reduce((sum, page) => sum + page.views, 0);
    
    // Add percentage to each page
    const popularPages = pageViewsAggregation.map(page => ({
      page: page.title || page._id,
      path: page._id,
      views: page.views,
      percentage: totalViews > 0 ? Math.round((page.views / totalViews) * 100) : 0,
      lastVisit: page.lastVisit
    }));
    
    // Get daily views for trend analysis
    const dailyViewsAggregation = await mongoose.connection.db.collection('pageviews').aggregate([
      {
        $match: {
          timestamp: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $group: {
          _id: '$date',
          views: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();
    
    // Get hourly distribution
    const hourlyViewsAggregation = await mongoose.connection.db.collection('pageviews').aggregate([
      {
        $match: {
          timestamp: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $group: {
          _id: '$hour',
          views: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();
    
    console.log(`✅ Found ${popularPages.length} popular pages with ${totalViews} total views`);
    
    return NextResponse.json({
      popularPages,
      totalViews,
      dailyViews: dailyViewsAggregation,
      hourlyViews: hourlyViewsAggregation,
      dateRange: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        days
      }
    });

  } catch (error) {
    console.error('❌ Get analytics error:', error);
    
    // Return fallback data if database fails
    const fallbackData = [
      { page: 'Home Page', path: '/', views: 0, percentage: 0 },
      { page: 'Courses', path: '/courses', views: 0, percentage: 0 },
      { page: 'Universities', path: '/universities', views: 0, percentage: 0 },
      { page: 'Contact', path: '/contact', views: 0, percentage: 0 },
      { page: 'About Us', path: '/about', views: 0, percentage: 0 }
    ];
    
    return NextResponse.json({
      popularPages: fallbackData,
      totalViews: 0,
      dailyViews: [],
      hourlyViews: [],
      dateRange: {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        days: 30
      }
    });
  }
}