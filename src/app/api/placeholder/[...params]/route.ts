import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  try {
    const { params: routeParams } = await params;
    const [width, height] = routeParams || ['600', '400'];
    const w = parseInt(width) || 600;
    const h = parseInt(height) || 400;

    // Create a simple SVG placeholder
    const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="20" y="20" width="${w-40}" height="${h-40}" fill="#e5e7eb" rx="8"/>
      <circle cx="${w/2}" cy="${h/2-20}" r="30" fill="#9ca3af"/>
      <rect x="${w/2-40}" y="${h/2+20}" width="80" height="8" fill="#9ca3af" rx="4"/>
      <rect x="${w/2-30}" y="${h/2+35}" width="60" height="6" fill="#d1d5db" rx="3"/>
      <text x="${w/2}" y="${h-30}" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">${w} × ${h}</text>
    </svg>`;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    // Fallback SVG
    const fallbackSvg = `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="300" y="200" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="16">Image Placeholder</text>
    </svg>`;
    
    return new NextResponse(fallbackSvg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  }
}