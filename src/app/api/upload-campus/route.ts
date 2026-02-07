import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public folder as campus-modern.jpg
    const publicPath = path.join(process.cwd(), 'public');
    const filePath = path.join(publicPath, 'campus-modern.jpg');

    // Ensure public directory exists
    try {
      await mkdir(publicPath, { recursive: true });
    } catch (error) {
      // Directory already exists, ignore error
    }

    // Write the file
    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: 'Campus image uploaded successfully',
      path: '/campus-modern.jpg'
    });
  } catch (error) {
    console.error('Error uploading campus image:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
