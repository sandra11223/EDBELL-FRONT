import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    
    console.log('🔍 Extracted ID from URL:', id);
    console.log('🔍 Full URL:', request.url);
    console.log('🔍 Path segments:', pathSegments);
    
    if (!id || id === 'contact') {
      return NextResponse.json(
        { error: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status } = body;

    if (!status || !['new', 'in-progress', 'resolved'].includes(status)) {
      return NextResponse.json(
        { error: 'Valid status is required (new, in-progress, resolved)' },
        { status: 400 }
      );
    }

    console.log(`🔄 Updating contact ${id} status to ${status}...`);

    const connectDB = (await import('@/lib/mongodb')).default;
    const mongoose = await import('mongoose');
    
    await connectDB();
    
    // Update contact status directly in collection
    const ObjectId = mongoose.Types.ObjectId;
    const result = await mongoose.connection.db?.collection('contacts').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status: status,
          updatedAt: new Date()
        }
      }
    );

    console.log('🔍 Update result:', result);

    if (!result || result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    console.log(`✅ Contact status updated successfully`);

    return NextResponse.json({
      success: true,
      message: 'Contact status updated successfully'
    });

  } catch (error) {
    console.error('❌ Update contact status error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    
    console.log('🔍 GET - Extracted ID from URL:', id);
    
    if (!id || id === 'contact') {
      return NextResponse.json(
        { error: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const connectDB = (await import('@/lib/mongodb')).default;
    const mongoose = await import('mongoose');
    
    await connectDB();
    
    // Get specific contact
    const ObjectId = mongoose.Types.ObjectId;
    const contact = await mongoose.connection.db?.collection('contacts').findOne(
      { _id: new ObjectId(id) }
    );

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      contact
    });

  } catch (error) {
    console.error('❌ Get contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}