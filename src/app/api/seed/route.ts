import { NextResponse } from 'next/server';

// Import the in-memory storage arrays from the API routes
// We'll need to access them directly for reliable seeding

export async function POST() {
  try {
    const sampleCourses = [
      {
        name: 'Bachelor of Arts (BA)',
        url: '/courses/bachelor-of-arts',
        description: 'Comprehensive liberal arts program with literature, history, and political science specializations.',
        category: 'Undergraduate',
        duration: '3 Years',
        fees: '₹30,000 per year',
        eligibility: '12th Pass from any stream'
      },
      {
        name: 'Bachelor of Commerce (B.Com)',
        url: '/courses/bachelor-of-commerce',
        description: 'Business-focused program covering accounting, finance, economics, and business management.',
        category: 'Undergraduate',
        duration: '3 Years',
        fees: '₹35,000 per year',
        eligibility: '12th Pass with Commerce/Science/Arts'
      },
      {
        name: 'Master of Business Administration (MBA)',
        url: '/courses/master-of-business-administration',
        description: 'Comprehensive management program for business leadership covering strategy, finance, marketing, operations.',
        category: 'Postgraduate',
        duration: '2 Years',
        fees: '₹80,000 per year',
        eligibility: 'Graduate Degree with 50% marks'
      },
      {
        name: 'Digital Marketing Certification',
        url: '/courses/digital-marketing',
        description: 'Comprehensive digital marketing program covering SEO, social media marketing, Google Ads, content marketing.',
        category: 'Specialized',
        duration: '6 Months',
        fees: '₹25,000',
        eligibility: '12th Pass or Graduate'
      }
    ];

    const sampleUniversities = [
      {
        name: 'IGNOU',
        url: '/universities/ignou',
        description: 'Indira Gandhi National Open University - India\'s largest distance education university.',
        accreditation: 'NAAC A++',
        established: '1985',
        location: 'New Delhi, India',
        website: 'https://www.ignou.ac.in'
      },
      {
        name: 'Lovely Professional University (LPU)',
        url: '/universities/lpu',
        description: 'Modern infrastructure and industry partnerships with comprehensive programs.',
        accreditation: 'NAAC A++',
        established: '2005',
        location: 'Punjab, India',
        website: 'https://www.lpu.in'
      },
      {
        name: 'Amity University',
        url: '/universities/amity-university',
        description: 'Technology-enabled learning with comprehensive online programs.',
        accreditation: 'NAAC A+',
        established: '2005',
        location: 'Noida, India',
        website: 'https://www.amity.edu'
      }
    ];

    // Add courses one by one with proper error handling
    let coursesAdded = 0;
    let universitiesAdded = 0;
    const errors = [];

    for (const course of sampleCourses) {
      try {
        const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/courses`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course)
        });
        
        if (response.ok) {
          coursesAdded++;
        } else {
          const errorText = await response.text();
          errors.push(`Course ${course.name}: ${errorText}`);
        }
      } catch (error) {
        errors.push(`Course ${course.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    for (const university of sampleUniversities) {
      try {
        const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/universities`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(university)
        });
        
        if (response.ok) {
          universitiesAdded++;
        } else {
          const errorText = await response.text();
          errors.push(`University ${university.name}: ${errorText}`);
        }
      } catch (error) {
        errors.push(`University ${university.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Sample data seeded successfully',
      data: {
        courses: coursesAdded,
        universities: universitiesAdded,
        totalAdded: coursesAdded + universitiesAdded,
        errors: errors.length > 0 ? errors : null
      }
    });
  } catch (error) {
    console.error('Error seeding data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}