import { Metadata } from 'next/types';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowLeft, 
  Download, 
  Phone, 
  Mail,
  Star,
  Calendar,
  Target,
  TrendingUp,
  DollarSign
} from 'lucide-react';

// Course data (in production, this would come from a database)
const courses = {
  'bachelor-of-arts': {
    id: 'bachelor-of-arts',
    title: "Bachelor of Arts (BA)",
    shortTitle: "BA",
    category: "undergraduate",
    duration: "3 Years",
    mode: "Online",
    eligibility: "10+2 from recognized board",
    description: "Comprehensive liberal arts program covering literature, history, political science, and more. This program is designed to provide students with a broad understanding of humanities and social sciences.",
    detailedDescription: "The Bachelor of Arts (BA) program is a comprehensive undergraduate degree that offers students a well-rounded education in the liberal arts. This program covers various disciplines including literature, history, political science, economics, psychology, and sociology. Students will develop critical thinking skills, analytical abilities, and effective communication skills that are highly valued in today's job market.",
    features: ["UGC-DEB Approved", "NAAC A++ University", "Flexible Schedule", "Home Exams", "Digital Library Access", "24/7 Student Support"],
    fee: "₹15,000 - ₹25,000 per year",
    totalFee: "₹45,000 - ₹75,000",
    specializations: [
      { name: "English Literature", description: "Study of literary works, poetry, and prose" },
      { name: "History", description: "Ancient, medieval, and modern history studies" },
      { name: "Political Science", description: "Government systems, political theory, and public policy" },
      { name: "Economics", description: "Micro and macroeconomics, economic theory" },
      { name: "Psychology", description: "Human behavior, cognitive processes, and mental health" },
      { name: "Sociology", description: "Social structures, cultural studies, and society analysis" }
    ],
    careerOptions: [
      { title: "Civil Services", salary: "₹56,100 - ₹2,50,000/month", description: "IAS, IPS, IFS and other government positions" },
      { title: "Teaching", salary: "₹25,000 - ₹80,000/month", description: "School and college teaching positions" },
      { title: "Journalism", salary: "₹20,000 - ₹1,00,000/month", description: "Print, digital, and broadcast media" },
      { title: "Content Writing", salary: "₹15,000 - ₹60,000/month", description: "Digital content, copywriting, technical writing" },
      { title: "Research", salary: "₹30,000 - ₹1,20,000/month", description: "Academic and market research positions" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["English Literature", "General History", "Political Science", "Economics", "Environmental Studies"]
      },
      {
        year: "Second Year", 
        subjects: ["Advanced Literature", "Indian History", "Public Administration", "Statistics", "Computer Applications"]
      },
      {
        year: "Third Year",
        subjects: ["Specialization Subjects", "Research Methodology", "Project Work", "Internship", "Electives"]
      }
    ],
    admissionProcess: [
      "Online Application Submission",
      "Document Verification",
      "Merit-based Selection",
      "Fee Payment",
      "Course Registration"
    ],
    universities: ["IGNOU", "LPU", "Amity University", "Manipal University"],
    rating: 4.5,
    studentsEnrolled: 2500,
    placementRate: "85%"
  },
  'bachelor-of-commerce': {
    id: 'bachelor-of-commerce',
    title: "Bachelor of Commerce (B.Com)",
    shortTitle: "B.Com",
    category: "undergraduate",
    duration: "3 Years",
    mode: "Online",
    eligibility: "10+2 with Commerce/Science/Arts",
    description: "Business-focused program covering accounting, finance, economics, and business management.",
    detailedDescription: "The Bachelor of Commerce (B.Com) is a comprehensive undergraduate program that provides students with a strong foundation in business, accounting, finance, and economics. This program is designed to prepare students for careers in the corporate world, banking, finance, and entrepreneurship.",
    features: ["Industry-Relevant Curriculum", "Practical Learning", "Career Support", "Placement Assistance", "Industry Mentorship", "Internship Opportunities"],
    fee: "₹18,000 - ₹30,000 per year",
    totalFee: "₹54,000 - ₹90,000",
    specializations: [
      { name: "Accounting & Finance", description: "Financial accounting, cost accounting, and financial management" },
      { name: "Banking", description: "Banking operations, credit management, and financial services" },
      { name: "Taxation", description: "Direct and indirect taxation, tax planning" },
      { name: "Business Management", description: "Operations, marketing, and strategic management" },
      { name: "E-Commerce", description: "Digital business, online marketing, and e-business" }
    ],
    careerOptions: [
      { title: "Chartered Accountant", salary: "₹40,000 - ₹2,00,000/month", description: "Financial auditing, taxation, and advisory services" },
      { title: "Banking Professional", salary: "₹25,000 - ₹1,50,000/month", description: "Banking operations, credit analysis, relationship management" },
      { title: "Finance Manager", salary: "₹35,000 - ₹1,80,000/month", description: "Financial planning, budgeting, and investment management" },
      { title: "Tax Consultant", salary: "₹20,000 - ₹1,00,000/month", description: "Tax planning, compliance, and advisory services" },
      { title: "Business Analyst", salary: "₹30,000 - ₹1,20,000/month", description: "Business process analysis and improvement" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["Financial Accounting", "Business Economics", "Business Mathematics", "Business Communication", "Computer Applications"]
      },
      {
        year: "Second Year",
        subjects: ["Cost Accounting", "Corporate Accounting", "Business Law", "Marketing Management", "Human Resource Management"]
      },
      {
        year: "Third Year",
        subjects: ["Advanced Accounting", "Financial Management", "Taxation", "Auditing", "Project Work"]
      }
    ],
    admissionProcess: [
      "Online Application",
      "Eligibility Verification",
      "Merit List Publication",
      "Counseling Process",
      "Admission Confirmation"
    ],
    universities: ["IGNOU", "LPU", "Chandigarh University", "Jain University"],
    rating: 4.6,
    studentsEnrolled: 3200,
    placementRate: "90%"
  }
};

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courses[resolvedParams.id as keyof typeof courses];
  
  if (!course) {
    return {
      title: 'Course Not Found - EDBELL EDUSOLUTIONS',
      description: 'The requested course could not be found.'
    };
  }

  return {
    title: `${course.title} - Online Degree Program | EDBELL EDUSOLUTIONS`,
    description: `${course.detailedDescription.substring(0, 160)}...`,
    keywords: `${course.title}, ${course.shortTitle}, online degree, ${course.category}, UGC approved, distance education, ${course.specializations.map(s => s.name).join(', ')}`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const resolvedParams = await params;
  const course = courses[resolvedParams.id as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-blue-600 hover:text-blue-800">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/courses" className="flex items-center text-blue-200 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Courses
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
              <p className="text-lg text-blue-100 mb-4">{course.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="text-center">
                  <Clock className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Duration</div>
                  <div className="text-sm font-semibold">{course.duration}</div>
                </div>
                <div className="text-center">
                  <BookOpen className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Mode</div>
                  <div className="text-sm font-semibold">{course.mode}</div>
                </div>
                <div className="text-center">
                  <Users className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Students</div>
                  <div className="text-sm font-semibold">{course.studentsEnrolled}+</div>
                </div>
                <div className="text-center">
                  <Star className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Rating</div>
                  <div className="text-sm font-semibold">{course.rating}/5</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919876543210" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                  Enroll Now
                </a>
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
              <div className="space-y-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-blue-200">Course Fee</div>
                    <div className="text-lg font-bold">{course.fee}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-blue-200">Placement Rate</div>
                    <div className="text-lg font-bold">{course.placementRate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* About Course */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-base text-gray-700 mb-4">{course.detailedDescription}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility Criteria</h3>
                  <p className="text-sm text-gray-700">{course.eligibility}</p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((year, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{year.year}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {year.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.specializations.map((spec, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="text-base font-semibold text-gray-900 mb-2">{spec.name}</h3>
                      <p className="text-sm text-gray-600">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <div className="space-y-4">
                  {course.careerOptions.map((career, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-semibold text-gray-900">{career.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {career.salary}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{career.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="text-sm font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mode</span>
                    <span className="text-sm font-semibold">{course.mode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Fee</span>
                    <span className="text-sm font-semibold">{course.totalFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Students Enrolled</span>
                    <span className="text-sm font-semibold">{course.studentsEnrolled}+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Placement Rate</span>
                    <span className="text-sm font-semibold text-green-600">{course.placementRate}</span>
                  </div>
                </div>
              </div>

              {/* Universities */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Partner Universities</h3>
                <div className="space-y-2">
                  {course.universities.map((university, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="h-3 w-3 text-blue-600" />
                      <span className="text-sm text-gray-700">{university}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-blue-600 text-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-blue-100 mb-3">
                  Get personalized guidance from our education counselors.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919876543210"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center text-sm"
                  >
                    <Phone className="mr-2 h-3 w-3" />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@edbelledusolutions.com"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center text-sm"
                  >
                    <Mail className="mr-2 h-3 w-3" />
                    Get Counseling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}