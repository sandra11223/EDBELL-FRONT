import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Course from '@/models/Course';
import { writeFileSync, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

// GET - Fetch all courses
export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// POST - Create new course
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    console.log('Received course data:', body);
    
    // Validate required fields
    if (!body.name || !body.description || !body.category || !body.duration) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: name, description, category, and duration are required' 
      }, { status: 400 });
    }

    // Auto-generate URL if not provided
    if (!body.url) {
      body.url = '/courses/' + body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    // Clean up empty strings for optional fields
    const optionalFields = ['fees', 'eligibility', 'curriculum', 'careerOpportunities', 'admissionProcess', 
                           'examPattern', 'studyMaterials', 'facultySupport', 'placementAssistance', 
                           'certificationDetails', 'prerequisites', 'learningOutcomes'];
    
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
    
    // Create course in database
    const course = new Course(body);
    await course.save();
    console.log('Course saved successfully:', course._id);

    // Generate course page file
    const pageCreated = await generateCoursePage(course);

    return NextResponse.json({ 
      success: true, 
      course,
      pageCreated,
      message: 'Course created successfully'
    });
  } catch (error: any) {
    console.error('Error creating course:', error);
    
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Course URL already exists' }, { status: 400 });
    }
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ 
        success: false, 
        error: `Validation failed: ${validationErrors.join(', ')}` 
      }, { status: 400 });
    }
    
    return NextResponse.json({ success: false, error: `Failed to create course: ${error.message}` }, { status: 500 });
  }
}

// PUT - Update course
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { _id, ...updateData } = body;

    const course = await Course.findByIdAndUpdate(_id, updateData, { new: true });
    if (!course) {
      return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404 });
    }

    // Update course page file
    const pageUpdated = await generateCoursePage(course);

    return NextResponse.json({ 
      success: true, 
      course,
      pageUpdated,
      message: 'Course updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating course:', error);
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Course URL already exists' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Failed to update course' }, { status: 500 });
  }
}

// DELETE - Delete course
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Course ID is required' }, { status: 400 });
    }

    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404 });
    }

    // Delete course page file
    const pageDeleted = await deleteCoursePage(course.url);

    // Delete from database
    await Course.findByIdAndDelete(id);

    return NextResponse.json({ 
      success: true, 
      pageDeleted,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete course' }, { status: 500 });
  }
}

// Helper function to generate course page
async function generateCoursePage(course: any): Promise<boolean> {
  try {
    const courseSlug = course.url.replace('/courses/', '');
    const coursesDir = join(process.cwd(), 'src', 'app', 'courses');
    const courseDir = join(coursesDir, courseSlug);
    
    // Create directory if it doesn't exist
    if (!existsSync(courseDir)) {
      mkdirSync(courseDir, { recursive: true });
    }

    const pageContent = `import { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowLeft,
  GraduationCap,
  TrendingUp,
  Building,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: '${course.name} - Online Degree Program | EDBELL EDUSOLUTIONS',
  description: '${course.description}',
  keywords: '${course.name}, online course, ${course.category.toLowerCase()}, distance education, UGC approved',
  openGraph: {
    title: '${course.name} - Online Degree Program',
    description: '${course.description}',
    type: 'article',
    url: 'https://edbelledusolutions.com${course.url}',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${course.name} - Online Degree Program',
    description: '${course.description}',
  },
  alternates: {
    canonical: 'https://edbelledusolutions.com${course.url}',
  },
};

export default function CoursePage() {
  const course = {
    name: "${course.name}",
    category: "${course.category}",
    duration: "${course.duration}",
    fees: "${course.fees || 'Contact for details'}",
    eligibility: "${course.eligibility || 'As per university norms'}",
    description: "${course.description}",
    curriculum: "${course.curriculum || 'Comprehensive curriculum designed by industry experts'}",
    careerOpportunities: "${course.careerOpportunities || 'Wide range of career opportunities in various sectors'}",
    admissionProcess: "${course.admissionProcess || 'Simple online admission process with document verification'}",
    examPattern: "${course.examPattern || 'Semester-wise examinations with continuous assessment'}",
    studyMaterials: "${course.studyMaterials || 'Digital study materials and online resources provided'}",
    facultySupport: "${course.facultySupport || 'Experienced faculty with industry expertise'}",
    placementAssistance: "${course.placementAssistance || 'Dedicated placement support and career guidance'}",
    certificationDetails: "${course.certificationDetails || 'UGC recognized degree certificate'}",
    prerequisites: "${course.prerequisites || 'Basic educational qualifications as per eligibility'}",
    learningOutcomes: "${course.learningOutcomes || 'Comprehensive knowledge and practical skills in the field'}"
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/courses" className="text-gray-500 hover:text-blue-600">Courses</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{course.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/courses" className="flex items-center text-blue-200 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Courses
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
              <p className="text-xl text-blue-100 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-blue-200">Duration</div>
                  <div className="font-semibold">{course.duration}</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-blue-200">Category</div>
                  <div className="font-semibold">{course.category}</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-blue-200">Mode</div>
                  <div className="font-semibold">Online</div>
                </div>
                <div className="text-center">
                  <Star className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-blue-200">Rating</div>
                  <div className="font-semibold">4.5/5</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                  Enroll Now
                </Link>
                <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                  Get More Info
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-blue-200">Fees:</span>
                  <span className="font-semibold">{course.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Eligibility:</span>
                  <span className="font-semibold text-sm">{course.eligibility}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Mode:</span>
                  <span className="font-semibold">100% Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Recognition:</span>
                  <span className="font-semibold">UGC Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {course.curriculum && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum</h3>
                  <p className="text-gray-600 leading-relaxed">{course.curriculum}</p>
                </div>
              )}

              {course.careerOpportunities && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed">{course.careerOpportunities}</p>
                </div>
              )}

              {course.learningOutcomes && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes</h3>
                  <p className="text-gray-600 leading-relaxed">{course.learningOutcomes}</p>
                </div>
              )}

              {course.admissionProcess && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Admission Process</h3>
                  <p className="text-gray-600 leading-relaxed">{course.admissionProcess}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">UGC Approved</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">100% Online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Flexible Schedule</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Career Support</span>
                  </div>
                </div>
              </div>

              {course.studyMaterials && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Study Materials</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{course.studyMaterials}</p>
                </div>
              )}

              {course.facultySupport && (
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Faculty Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{course.facultySupport}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards your career goals with our comprehensive online program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}`;

    const pageFilePath = join(courseDir, 'page.tsx');
    writeFileSync(pageFilePath, pageContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error('Error generating course page:', error);
    return false;
  }
}

// Helper function to delete course page
async function deleteCoursePage(courseUrl: string): Promise<boolean> {
  try {
    const courseSlug = courseUrl.replace('/courses/', '');
    const courseDir = join(process.cwd(), 'src', 'app', 'courses', courseSlug);
    const pageFilePath = join(courseDir, 'page.tsx');
    
    if (existsSync(pageFilePath)) {
      unlinkSync(pageFilePath);
      // Try to remove directory if empty
      try {
        const fs = require('fs');
        const files = fs.readdirSync(courseDir);
        if (files.length === 0) {
          fs.rmdirSync(courseDir);
        }
      } catch (e) {
        // Directory not empty or other error, ignore
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting course page:', error);
    return false;
  }
}