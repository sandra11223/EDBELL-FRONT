import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import University from '@/models/University';
import { writeFileSync, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

// GET - Fetch all universities
export async function GET() {
  try {
    await connectDB();
    const universities = await University.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, universities });
  } catch (error) {
    console.error('Error fetching universities:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch universities' }, { status: 500 });
  }
}

// POST - Create new university
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    console.log('Received university data:', body);
    
    // Validate required fields
    if (!body.name || !body.description || !body.accreditation || !body.established) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: name, description, accreditation, and established are required' 
      }, { status: 400 });
    }

    // Auto-generate URL if not provided
    if (!body.url) {
      body.url = '/universities/' + body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    // Clean up empty strings for optional fields
    const optionalFields = ['location', 'website'];
    optionalFields.forEach(field => {
      if (body[field] === '') {
        delete body[field];
      }
    });

    // Ensure description has minimum length
    if (body.description.length < 10) {
      return NextResponse.json({ 
        success: false, 
        error: 'Description must be at least 10 characters long' 
      }, { status: 400 });
    }
    
    // Create university in database
    const university = new University(body);
    await university.save();
    console.log('University saved successfully:', university._id);

    // Generate university page file
    const pageCreated = await generateUniversityPage(university);

    return NextResponse.json({ 
      success: true, 
      university,
      pageCreated,
      message: 'University created successfully'
    });
  } catch (error: any) {
    console.error('Error creating university:', error);
    
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'University URL already exists' }, { status: 400 });
    }
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ 
        success: false, 
        error: `Validation failed: ${validationErrors.join(', ')}` 
      }, { status: 400 });
    }
    
    return NextResponse.json({ success: false, error: `Failed to create university: ${error.message}` }, { status: 500 });
  }
}

// PUT - Update university
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body;

    const university = await University.findByIdAndUpdate(_id, updateData, { new: true });
    if (!university) {
      return NextResponse.json({ success: false, error: 'University not found' }, { status: 404 });
    }

    // Update university page file
    const pageUpdated = await generateUniversityPage(university);

    return NextResponse.json({ 
      success: true, 
      university,
      pageUpdated,
      message: 'University updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating university:', error);
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'University URL already exists' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Failed to update university' }, { status: 500 });
  }
}

// DELETE - Delete university
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'University ID is required' }, { status: 400 });
    }

    const university = await University.findById(id);
    if (!university) {
      return NextResponse.json({ success: false, error: 'University not found' }, { status: 404 });
    }

    // Delete university page file
    const pageDeleted = await deleteUniversityPage(university.url);

    // Delete from database
    await University.findByIdAndDelete(id);

    return NextResponse.json({ 
      success: true, 
      pageDeleted,
      message: 'University deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting university:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete university' }, { status: 500 });
  }
}

// Helper function to generate university page
async function generateUniversityPage(university: any): Promise<boolean> {
  try {
    const universitySlug = university.url.replace('/universities/', '');
    const universitiesDir = join(process.cwd(), 'src', 'app', 'universities');
    const universityDir = join(universitiesDir, universitySlug);
    
    // Create directory if it doesn't exist
    if (!existsSync(universityDir)) {
      mkdirSync(universityDir, { recursive: true });
    }

    const pageContent = `import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle, 
  Star, 
  MapPin, 
  Users, 
  BookOpen, 
  Globe, 
  Calendar, 
  Phone, 
  Mail,
  ArrowLeft,
  TrendingUp,
  Building,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: '${university.name} - Online University Programs | EDBELL EDUSOLUTIONS',
  description: '${university.description}',
  keywords: '${university.name}, online university, distance education, UGC approved, ${university.accreditation}',
  openGraph: {
    title: '${university.name} - Online University Programs',
    description: '${university.description}',
    type: 'article',
    url: 'https://edbelledusolutions.com${university.url}',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${university.name} - Online University Programs',
    description: '${university.description}',
  },
  alternates: {
    canonical: 'https://edbelledusolutions.com${university.url}',
  },
};

export default function UniversityPage() {
  const university = {
    name: "${university.name}",
    description: "${university.description}",
    accreditation: "${university.accreditation}",
    established: "${university.established}",
    location: "${university.location || 'India'}",
    website: "${university.website || 'Contact for details'}"
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/universities" className="text-gray-500 hover:text-blue-600">Universities</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{university.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/universities" className="flex items-center text-green-200 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Universities
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{university.name}</h1>
              <p className="text-xl text-green-100 mb-6">{university.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-green-200">Established</div>
                  <div className="font-semibold">{university.established}</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-green-200">Accreditation</div>
                  <div className="font-semibold">{university.accreditation}</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-green-200">Location</div>
                  <div className="font-semibold">{university.location}</div>
                </div>
                <div className="text-center">
                  <Star className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-green-200">Rating</div>
                  <div className="font-semibold">4.5/5</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                  Apply Now
                </Link>
                <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                  Get More Info
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">University Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-green-200">Established:</span>
                  <span className="font-semibold">{university.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">Accreditation:</span>
                  <span className="font-semibold">{university.accreditation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">Location:</span>
                  <span className="font-semibold">{university.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">Website:</span>
                  <span className="font-semibold text-sm">{university.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the University</h3>
                <p className="text-gray-600 leading-relaxed">{university.description}</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This University?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">UGC Approved</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Quality Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Online Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Student Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Established:</span>
                    <span className="font-medium">{university.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Accreditation:</span>
                    <span className="font-medium">{university.accreditation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{university.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 text-sm">{university.website}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 text-sm">Contact for details</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 text-sm">Contact for details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join This University?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Take the next step in your educational journey with quality online programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Apply Now
            </Link>
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Get More Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}`;

    const pageFilePath = join(universityDir, 'page.tsx');
    writeFileSync(pageFilePath, pageContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error('Error generating university page:', error);
    return false;
  }
}

// Helper function to delete university page
async function deleteUniversityPage(universityUrl: string): Promise<boolean> {
  try {
    const universitySlug = universityUrl.replace('/universities/', '');
    const universityDir = join(process.cwd(), 'src', 'app', 'universities', universitySlug);
    const pageFilePath = join(universityDir, 'page.tsx');
    
    if (existsSync(pageFilePath)) {
      unlinkSync(pageFilePath);
      // Try to remove directory if empty
      try {
        const fs = require('fs');
        const files = fs.readdirSync(universityDir);
        if (files.length === 0) {
          fs.rmdirSync(universityDir);
        }
      } catch (e) {
        // Directory not empty or other error, ignore
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting university page:', error);
    return false;
  }
}