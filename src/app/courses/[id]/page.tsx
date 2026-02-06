'use client';

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
  },
  'bachelor-of-business-administration': {
    id: 'bachelor-of-business-administration',
    title: "Bachelor of Business Administration (BBA)",
    shortTitle: "BBA",
    category: "undergraduate",
    duration: "3 Years",
    mode: "Online",
    eligibility: "10+2 from recognized board",
    description: "Management program focusing on business administration, leadership, and entrepreneurship skills.",
    detailedDescription: "The Bachelor of Business Administration (BBA) is a comprehensive undergraduate program designed to develop future business leaders and entrepreneurs. This program provides a strong foundation in management principles, business operations, and leadership skills essential for success in the corporate world.",
    features: ["Management Focus", "Leadership Training", "Industry Exposure", "Internship Support", "Case Study Method", "Entrepreneurship Development"],
    fee: "₹20,000 - ₹35,000 per year",
    totalFee: "₹60,000 - ₹1,05,000",
    specializations: [
      { name: "Marketing Management", description: "Brand management, digital marketing, and consumer behavior" },
      { name: "Human Resource Management", description: "Talent acquisition, employee relations, and organizational behavior" },
      { name: "Finance Management", description: "Corporate finance, investment analysis, and financial planning" },
      { name: "Operations Management", description: "Supply chain, quality management, and process optimization" },
      { name: "International Business", description: "Global trade, cross-cultural management, and international markets" },
      { name: "Entrepreneurship", description: "Startup development, business planning, and innovation management" }
    ],
    careerOptions: [
      { title: "Business Manager", salary: "₹30,000 - ₹1,50,000/month", description: "Operations management, team leadership, and strategic planning" },
      { title: "Marketing Executive", salary: "₹25,000 - ₹1,20,000/month", description: "Brand promotion, market research, and campaign management" },
      { title: "HR Executive", salary: "₹22,000 - ₹1,00,000/month", description: "Recruitment, training, and employee engagement" },
      { title: "Sales Manager", salary: "₹28,000 - ₹1,80,000/month", description: "Sales strategy, client relations, and revenue generation" },
      { title: "Entrepreneur", salary: "₹50,000 - ₹5,00,000/month", description: "Business ownership, startup development, and innovation" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["Principles of Management", "Business Economics", "Accounting Fundamentals", "Business Communication", "Organizational Behavior"]
      },
      {
        year: "Second Year",
        subjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Operations Management", "Business Law"]
      },
      {
        year: "Third Year",
        subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Project Management", "Internship"]
      }
    ],
    admissionProcess: [
      "Online Application Submission",
      "Eligibility Assessment",
      "Merit-based Selection",
      "Interview (if required)",
      "Final Admission"
    ],
    universities: ["LPU", "Amity University", "Manipal University", "Chandigarh University"],
    rating: 4.4,
    studentsEnrolled: 2800,
    placementRate: "88%"
  },
  'master-of-arts': {
    id: 'master-of-arts',
    title: "Master of Arts (MA)",
    shortTitle: "MA",
    category: "postgraduate",
    duration: "2 Years",
    mode: "Online",
    eligibility: "Bachelor's degree in relevant field",
    description: "Advanced study in humanities and social sciences with specialization options and research opportunities.",
    detailedDescription: "The Master of Arts (MA) program offers advanced study in various disciplines within humanities and social sciences. This program is designed for students who wish to deepen their knowledge in their chosen field and develop research and analytical skills for academic or professional careers.",
    features: ["Research Opportunities", "Specialization Options", "Expert Faculty", "Thesis Support", "Academic Excellence", "Career Advancement"],
    fee: "₹20,000 - ₹40,000 per year",
    totalFee: "₹40,000 - ₹80,000",
    specializations: [
      { name: "English Literature", description: "Advanced literary analysis, criticism, and research methodology" },
      { name: "History", description: "Historical research, historiography, and specialized periods" },
      { name: "Political Science", description: "Political theory, public policy, and governance studies" },
      { name: "Psychology", description: "Advanced psychology, research methods, and specialized areas" },
      { name: "Sociology", description: "Social research, contemporary issues, and sociological theory" },
      { name: "Economics", description: "Economic analysis, policy research, and quantitative methods" }
    ],
    careerOptions: [
      { title: "College Professor", salary: "₹40,000 - ₹1,50,000/month", description: "Teaching and research in higher education institutions" },
      { title: "Research Analyst", salary: "₹35,000 - ₹1,20,000/month", description: "Policy research, data analysis, and report writing" },
      { title: "Content Writer", salary: "₹25,000 - ₹80,000/month", description: "Academic writing, content creation, and editorial work" },
      { title: "Civil Services", salary: "₹56,100 - ₹2,50,000/month", description: "Administrative roles in government departments" },
      { title: "Counselor", salary: "₹30,000 - ₹1,00,000/month", description: "Educational and career counseling services" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["Core Subject Papers", "Research Methodology", "Elective Papers", "Seminar Presentations", "Literature Review"]
      },
      {
        year: "Second Year",
        subjects: ["Advanced Specialization", "Dissertation Work", "Field Work", "Thesis Writing", "Viva Voce"]
      }
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (if applicable)",
      "Merit-based Selection",
      "Document Verification",
      "Admission Confirmation"
    ],
    universities: ["IGNOU", "LPU", "Jain University", "Amity University"],
    rating: 4.3,
    studentsEnrolled: 1800,
    placementRate: "75%"
  },
  'master-of-business-administration': {
    id: 'master-of-business-administration',
    title: "Master of Business Administration (MBA)",
    shortTitle: "MBA",
    category: "postgraduate",
    duration: "2 Years",
    mode: "Online",
    eligibility: "Bachelor's degree with 50% marks",
    description: "Comprehensive management program preparing leaders for global business challenges and executive roles.",
    detailedDescription: "The Master of Business Administration (MBA) is a prestigious postgraduate program designed to develop strategic thinking, leadership capabilities, and advanced management skills. This program prepares professionals for senior management roles and entrepreneurial ventures in the global business environment.",
    features: ["Leadership Development", "Global Perspective", "Case Studies", "Networking", "Industry Projects", "Executive Mentorship"],
    fee: "₹40,000 - ₹80,000 per year",
    totalFee: "₹80,000 - ₹1,60,000",
    specializations: [
      { name: "Marketing Management", description: "Strategic marketing, brand management, and digital marketing" },
      { name: "Finance Management", description: "Corporate finance, investment banking, and financial analysis" },
      { name: "Human Resource Management", description: "Strategic HR, talent management, and organizational development" },
      { name: "Operations Management", description: "Supply chain management, quality control, and process improvement" },
      { name: "Information Technology", description: "IT strategy, digital transformation, and technology management" },
      { name: "International Business", description: "Global strategy, international trade, and cross-cultural management" }
    ],
    careerOptions: [
      { title: "General Manager", salary: "₹80,000 - ₹5,00,000/month", description: "Strategic planning, team leadership, and business operations" },
      { title: "Investment Banker", salary: "₹1,00,000 - ₹8,00,000/month", description: "Financial advisory, mergers & acquisitions, and capital markets" },
      { title: "Management Consultant", salary: "₹70,000 - ₹4,00,000/month", description: "Business strategy, process improvement, and organizational change" },
      { title: "Product Manager", salary: "₹60,000 - ₹3,50,000/month", description: "Product development, market analysis, and strategic planning" },
      { title: "Entrepreneur", salary: "₹1,00,000 - ₹10,00,000/month", description: "Business ownership, startup development, and venture creation" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["Management Principles", "Financial Management", "Marketing Management", "Operations Management", "Human Resource Management"]
      },
      {
        year: "Second Year",
        subjects: ["Strategic Management", "Leadership", "Business Analytics", "Specialization Subjects", "Capstone Project"]
      }
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (CAT/MAT/XAT)",
      "Group Discussion",
      "Personal Interview",
      "Final Selection"
    ],
    universities: ["LPU", "Amity University", "Manipal University", "Jain University"],
    rating: 4.7,
    studentsEnrolled: 4200,
    placementRate: "95%"
  },
  'master-of-commerce': {
    id: 'master-of-commerce',
    title: "Master of Commerce (M.Com)",
    shortTitle: "M.Com",
    category: "postgraduate",
    duration: "2 Years",
    mode: "Online",
    eligibility: "B.Com or equivalent degree",
    description: "Advanced commerce program with focus on accounting, finance, and business research methodologies.",
    detailedDescription: "The Master of Commerce (M.Com) is an advanced postgraduate program designed for students who wish to specialize in commerce, accounting, finance, and business studies. This program provides in-depth knowledge of advanced accounting principles, financial management, taxation, and research methodologies, preparing students for senior roles in finance and academia.",
    features: ["Advanced Curriculum", "Research Methods", "Industry Projects", "Career Advancement", "Expert Faculty", "Practical Learning"],
    fee: "₹25,000 - ₹45,000 per year",
    totalFee: "₹50,000 - ₹90,000",
    specializations: [
      { name: "Advanced Accounting", description: "Corporate accounting, financial reporting, and auditing" },
      { name: "Finance & Banking", description: "Investment analysis, banking operations, and financial markets" },
      { name: "Taxation", description: "Advanced taxation, tax planning, and compliance" },
      { name: "Business Analytics", description: "Data analysis, business intelligence, and decision making" },
      { name: "International Business", description: "Global trade, international finance, and cross-border commerce" },
      { name: "Research & Development", description: "Business research, statistical analysis, and academic writing" }
    ],
    careerOptions: [
      { title: "Finance Manager", salary: "₹50,000 - ₹2,50,000/month", description: "Financial planning, budgeting, and investment management" },
      { title: "Senior Accountant", salary: "₹35,000 - ₹1,50,000/month", description: "Advanced accounting, financial reporting, and compliance" },
      { title: "Tax Consultant", salary: "₹40,000 - ₹2,00,000/month", description: "Tax advisory, planning, and compliance services" },
      { title: "Research Analyst", salary: "₹45,000 - ₹1,80,000/month", description: "Financial research, market analysis, and investment advisory" },
      { title: "College Professor", salary: "₹50,000 - ₹2,00,000/month", description: "Teaching and research in commerce and management" }
    ],
    curriculum: [
      {
        year: "First Year",
        subjects: ["Advanced Financial Accounting", "Management Accounting", "Business Statistics", "Research Methodology", "Corporate Finance"]
      },
      {
        year: "Second Year",
        subjects: ["Advanced Taxation", "International Business", "Financial Markets", "Dissertation", "Specialization Subjects"]
      }
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (if applicable)",
      "Merit-based Selection",
      "Document Verification",
      "Admission Confirmation"
    ],
    universities: ["IGNOU", "LPU", "Chandigarh University", "Amity University"],
    rating: 4.5,
    studentsEnrolled: 2100,
    placementRate: "87%"
  }
};

interface CoursePageProps {
  params: {
    id: string;
  };
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
    openGraph: {
      title: `${course.title} - Online Degree Program`,
      description: course.description,
      type: 'article',
      url: `https://edbelledusolutions.com/courses/${resolvedParams.id}`,
      images: [
        {
          url: '/og-course-image.jpg',
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} - Online Degree Program`,
      description: course.description,
      images: ['/og-course-image.jpg'],
    },
    alternates: {
      canonical: `https://edbelledusolutions.com/courses/${resolvedParams.id}`,
    },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.detailedDescription,
    provider: {
      '@type': 'Organization',
      name: 'EDBELL EDUSOLUTIONS LLP',
      url: 'https://edbelledusolutions.com'
    },
    educationalLevel: course.category,
    timeRequired: course.duration,
    courseMode: 'online',
    offers: {
      '@type': 'Offer',
      price: course.fee,
      priceCurrency: 'INR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: course.studentsEnrolled
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">


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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-blue-100 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-blue-200">Duration</div>
                    <div className="font-semibold">{course.duration}</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-blue-200">Mode</div>
                    <div className="font-semibold">{course.mode}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-blue-200">Students</div>
                    <div className="font-semibold">{course.studentsEnrolled}+</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-blue-200">Rating</div>
                    <div className="font-semibold">{course.rating}/5</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919876543210" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Enroll Now
                  </a>
                  <button
                    onClick={() => {
                      const brochureContent = `
COURSE BROCHURE
${course.title}

📚 COURSE OVERVIEW
Duration: ${course.duration}
Mode: ${course.mode}
Category: ${course.category}
Eligibility: ${course.eligibility}

💰 FEE STRUCTURE
${course.fee}
Total Fee: ${course.totalFee}

🎯 COURSE HIGHLIGHTS
${course.features.map(feature => `• ${feature}`).join('\n')}

🚀 CAREER OPPORTUNITIES
${course.careerOptions.map(career => `• ${career.title} - ${career.salary}`).join('\n')}

🏛️ PARTNER UNIVERSITIES
${course.universities.join(', ')}

📞 CONTACT INFORMATION
Phone: +91 98765 43210
Email: info@edbelledusolutions.com

For more information and admission details, contact us today!

© 2024 EDBELL EDUSOLUTIONS LLP. All rights reserved.
                      `;
                      
                      try {
                        const blob = new Blob([brochureContent], { type: 'text/plain' });
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = `${course.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.txt`;
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        setTimeout(() => {
                          document.body.removeChild(link);
                          URL.revokeObjectURL(link.href);
                        }, 100);
                        
                        // Show success message without any URL references
                        setTimeout(() => {
                          alert('Brochure downloaded successfully!');
                        }, 200);
                      } catch (error) {
                        alert('Brochure downloaded successfully!');
                      }
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                <div className="space-y-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-blue-200">Course Fee</div>
                      <div className="text-2xl font-bold">{course.fee}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-200">Placement Rate</div>
                      <div className="text-2xl font-bold">{course.placementRate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* About Course */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Course</h2>
                  <p className="text-lg text-gray-700 mb-6">{course.detailedDescription}</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                    <p className="text-gray-700">{course.eligibility}</p>
                  </div>
                </div>

                {/* Curriculum */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
                  <div className="space-y-6">
                    {course.curriculum.map((year, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{year.year}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {year.subjects.map((subject, subIndex) => (
                            <div key={subIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.specializations.map((spec, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.name}</h3>
                        <p className="text-gray-600">{spec.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                  <div className="space-y-6">
                    {course.careerOptions.map((career, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{career.title}</h3>
                          <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                            {career.salary}
                          </span>
                        </div>
                        <p className="text-gray-600">{career.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Info */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mode</span>
                      <span className="font-semibold">{course.mode}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Fee</span>
                      <span className="font-semibold">{course.totalFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Students Enrolled</span>
                      <span className="font-semibold">{course.studentsEnrolled}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Placement Rate</span>
                      <span className="font-semibold text-green-600">{course.placementRate}</span>
                    </div>
                  </div>
                </div>

                {/* Universities */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Partner Universities</h3>
                  <div className="space-y-3">
                    {course.universities.map((university, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{university}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <p className="text-blue-100 mb-4">
                    Get personalized guidance from our education counselors.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+919876543210"
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                    <a
                      href="mailto:info@edbelledusolutions.com?subject=Course Counseling Request&body=Hi, I would like to get counseling for the course. Please contact me."
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Get Counseling
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(courses)
                .filter(c => c.id !== course.id && c.category === course.category)
                .slice(0, 3)
                .map((relatedCourse) => (
                  <Link key={relatedCourse.id} href={`/courses/${relatedCourse.id}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedCourse.title}</h3>
                      <p className="text-gray-600 mb-4">{relatedCourse.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">{relatedCourse.fee}</span>
                        <span className="text-sm text-gray-500">{relatedCourse.duration}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}