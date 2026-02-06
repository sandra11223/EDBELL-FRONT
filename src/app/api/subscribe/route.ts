import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Log the subscription for admin review
    console.log('=== EMAIL SUBSCRIPTION ===');
    console.log('Email:', email);
    console.log('Name:', name || 'Not provided');
    console.log('Timestamp:', new Date().toISOString());
    console.log('==========================');

    // Try to save to MongoDB if available, but don't fail if it doesn't work
    try {
      const connectDB = (await import('@/lib/mongodb')).default;
      const mongoose = await import('mongoose');
      
      await connectDB();
      
      // Create subscription schema if it doesn't exist
      const subscriptionSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        name: { type: String, default: '' },
        subscribedAt: { type: Date, default: Date.now },
        isActive: { type: Boolean, default: true }
      });

      const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);
      
      // Check if email already exists
      const existingSubscription = await Subscription.findOne({ email });
      if (existingSubscription) {
        if (existingSubscription.isActive) {
          return NextResponse.json(
            { message: 'You are already subscribed to our newsletter!' },
            { status: 200 }
          );
        } else {
          // Reactivate subscription
          existingSubscription.isActive = true;
          existingSubscription.subscribedAt = new Date();
          if (name) existingSubscription.name = name;
          await existingSubscription.save();
          console.log('✅ Reactivated subscription in MongoDB');
        }
      } else {
        // Create new subscription
        const subscription = new Subscription({
          email,
          name: name || ''
        });
        await subscription.save();
        console.log('✅ Successfully saved subscription to MongoDB');
      }
    } catch (dbError) {
      console.log('⚠️ MongoDB save failed, but continuing:', dbError);
      // Don't fail the request - just log the error
    }

    // Always return success to the user
    return NextResponse.json(
      { 
        message: 'Thank you for subscribing! You will receive our latest updates and educational insights.',
        success: true
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Subscription error:', error);
    
    // Even if there's an error, return success to avoid user frustration
    return NextResponse.json(
      { 
        message: 'Thank you for subscribing! You will receive our latest updates and educational insights.',
        success: true
      },
      { status: 200 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const connectDB = (await import('@/lib/mongodb')).default;
    const mongoose = await import('mongoose');
    
    await connectDB();
    
    const subscriptionSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      name: { type: String, default: '' },
      subscribedAt: { type: Date, default: Date.now },
      isActive: { type: Boolean, default: true }
    });

    const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query: any = {};
    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'inactive') {
      query.isActive = false;
    }
    
    // Get subscriptions with pagination
    const subscriptions = await Subscription.find(query)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const total = await Subscription.countDocuments(query);
    
    return NextResponse.json({
      subscriptions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Get subscriptions error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}