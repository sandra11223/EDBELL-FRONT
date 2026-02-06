import { Metadata } from 'next';
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

// University data (in production, this would come from a database)
const universities = {
  'ignou': {
    id: 'ignou',
    name: "Indira Gandhi National Open University (IGNOU)",
    shortName: "IGNOU",
    location: "New Delhi",
    state: "Delhi",
    established: "1985",
    accreditation: "NAAC A++",
    ugcApproved: true,
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA", "B.Sc", "M.Sc", "BCA", "MCA"],
    highlights: [
      "India's largest university",
      "Over 4 million students",
      "International recognition",
      "Flexible learning system",
      "200+ academic programs",
      "Global alumni network"
    ],
    description: "Indira Gandhi National Open University (IGNOU) is a central university established by an Act of Parliament in 1985. It is the largest university in the world in terms of student enrollment.",
    detailedDescription: "IGNOU has been a pioneer in distance education in India and has played a major role in democratizing higher education by making it accessible to all segments of society. The university offers over 200 certificate, diploma, degree and doctoral programs through 21 schools of studies and a network of 67 regional centres, around 2,667 learner support centres and 29 overseas centres.",
    ranking: "#1 in Distance Education",
    studycenters: "3000+",
    website: "www.ignou.ac.in",
    totalStudents: "4000000+",
    faculty: "500+",
    campusSize: "400 acres",
    establishedYear: 1985,
    type: "Central University",
    approvals: ["UGC", "DEB", "NAAC A++", "AIU"],
    facilities: [
      "Digital Library with 50,000+ e-books",
      "Online Learning Management System",
      "Virtual Classrooms",
      "24/7 Student Support",
      "Mobile Learning App",
      "Multimedia Learning Resources"
    ],
    admissionProcess: [
      "Online Application Submission",
      "Document Upload and Verification",
      "Fee Payment",
      "Program Registration",
      "Study Material Dispatch"
    ],
    feeStructure: {
      undergraduate: "₹7,200 - ₹15,000 per year",
      postgraduate: "₹9,000 - ₹20,000 per year",
      diploma: "₹3,000 - ₹8,000 per year",
      certificate: "₹1,500 - ₹5,000 per year"
    },
    scholarships: [
      "SC/ST Fee Waiver",
      "Physically Challenged Students Support",
      "Merit-based Scholarships",
      "Women Empowerment Scholarships"
    ],
    rating: 4.5,
    reviews: 15000,
    placementRate: "75%"
  },
  'lpu': {
    id: 'lpu',
    name: "Lovely Professional University (LPU)",
    shortName: "LPU",
    location: "Phagwara, Punjab",
    state: "Punjab",
    established: "2005",
    accreditation: "NAAC A++",
    ugcApproved: true,
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA", "B.Tech", "M.Tech", "BCA", "MCA"],
    highlights: [
      "Modern infrastructure",
      "Industry partnerships",
      "Global exposure programs",
      "High placement rates",
      "International collaborations",
      "State-of-the-art facilities"
    ],
    description: "Lovely Professional University (LPU) is a private university located in Phagwara, Punjab, India. It was established in 2005 and is recognized by UGC.",
    detailedDescription: "LPU is one of the largest private universities in India with over 30,000 students from all states of India and more than 50 countries. The university offers more than 200 programs in various disciplines including Engineering, Management, Computer Applications, Hotel Management, Agriculture, Law, Arts, Commerce, Science, Education, Journalism, Mass Communication, Fashion Design, and many more.",
    ranking: "Top 100 Universities in India",
    studycenters: "500+",
    website: "www.lpu.in",
    totalStudents: "30000+",
    faculty: "2000+",
    campusSize: "600 acres",
    establishedYear: 2005,
    type: "Private University",
    approvals: ["UGC", "AICTE", "NAAC A++", "AIU"],
    facilities: [
      "World-class Infrastructure",
      "Industry-standard Labs",
      "International Faculty",
      "Global Internship Programs",
      "Placement Cell",
      "Sports Complex"
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (if applicable)",
      "Merit-based Selection",
      "Counseling Process",
      "Admission Confirmation"
    ],
    feeStructure: {
      undergraduate: "₹80,000 - ₹1,50,000 per year",
      postgraduate: "₹90,000 - ₹1,80,000 per year",
      diploma: "₹40,000 - ₹80,000 per year",
      certificate: "₹20,000 - ₹50,000 per year"
    },
    scholarships: [
      "Merit-based Scholarships up to 100%",
      "Sports Scholarships",
      "Need-based Financial Aid",
      "International Student Scholarships"
    ],
    rating: 4.3,
    reviews: 8500,
    placementRate: "90%"
  },
  'amity-university': {
    id: 'amity-university',
    name: "Amity University Online",
    shortName: "Amity",
    location: "Noida, Uttar Pradesh",
    state: "Uttar Pradesh",
    established: "2005",
    accreditation: "NAAC A+",
    ugcApproved: true,
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA", "B.Tech", "M.Tech", "BCA", "MCA"],
    highlights: [
      "Technology-enabled learning",
      "Industry expert faculty",
      "Comprehensive support",
      "Global alumni network",
      "Research opportunities",
      "International collaborations"
    ],
    description: "Amity University Online is a leading private university offering innovative online education programs with cutting-edge technology and industry-relevant curriculum.",
    detailedDescription: "Amity University Online is part of the prestigious Amity Education Group, known for its commitment to excellence in education. The university leverages advanced technology to deliver high-quality online education that matches the standards of traditional classroom learning. With a focus on practical learning and industry exposure, Amity Online prepares students for successful careers in their chosen fields.",
    ranking: "Top 50 Private Universities",
    studycenters: "300+",
    website: "www.amityonline.com",
    totalStudents: "25000+",
    faculty: "1500+",
    campusSize: "200 acres",
    establishedYear: 2005,
    type: "Private University",
    approvals: ["UGC", "AICTE", "NAAC A+", "AIU"],
    facilities: [
      "Advanced Learning Management System",
      "Virtual Labs and Simulations",
      "Industry Expert Faculty",
      "24/7 Student Support",
      "Career Counseling Services",
      "Alumni Network Access"
    ],
    admissionProcess: [
      "Online Application Submission",
      "Eligibility Verification",
      "Merit-based Selection",
      "Counseling Session",
      "Admission Confirmation"
    ],
    feeStructure: {
      undergraduate: "₹60,000 - ₹1,20,000 per year",
      postgraduate: "₹70,000 - ₹1,50,000 per year",
      diploma: "₹30,000 - ₹60,000 per year",
      certificate: "₹15,000 - ₹40,000 per year"
    },
    scholarships: [
      "Merit-based Scholarships up to 50%",
      "Need-based Financial Assistance",
      "Women Empowerment Scholarships",
      "Alumni Referral Benefits"
    ],
    rating: 4.4,
    reviews: 12000,
    placementRate: "85%"
  },
  'manipal-university': {
    id: 'manipal-university',
    name: "Manipal University Jaipur",
    shortName: "MUJ",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    established: "2011",
    accreditation: "NAAC A",
    ugcApproved: true,
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA", "B.Tech", "M.Tech", "BCA", "MCA"],
    highlights: [
      "Part of Manipal Group",
      "Industry-oriented curriculum",
      "Research opportunities",
      "International collaborations",
      "Modern infrastructure",
      "Experienced faculty"
    ],
    description: "Manipal University Jaipur is part of the renowned Manipal Education and Medical Group, offering quality education with a focus on innovation and research.",
    detailedDescription: "Manipal University Jaipur (MUJ) is a self-financed state private university located in Jaipur, Rajasthan. As part of the prestigious Manipal Education and Medical Group, MUJ has established itself as a leading institution in higher education. The university is committed to providing world-class education through innovative teaching methodologies, state-of-the-art infrastructure, and industry partnerships.",
    ranking: "Top Private University in Rajasthan",
    studycenters: "200+",
    website: "www.jaipur.manipal.edu",
    totalStudents: "15000+",
    faculty: "800+",
    campusSize: "122 acres",
    establishedYear: 2011,
    type: "Private University",
    approvals: ["UGC", "AICTE", "NAAC A", "AIU"],
    facilities: [
      "Smart Classrooms",
      "Research Centers",
      "Industry Partnerships",
      "International Exchange Programs",
      "Placement Cell",
      "Innovation Labs"
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (if applicable)",
      "Merit-based Selection",
      "Interview Process",
      "Final Admission"
    ],
    feeStructure: {
      undergraduate: "₹1,00,000 - ₹2,00,000 per year",
      postgraduate: "₹1,20,000 - ₹2,50,000 per year",
      diploma: "₹50,000 - ₹1,00,000 per year",
      certificate: "₹25,000 - ₹60,000 per year"
    },
    scholarships: [
      "Merit Scholarships up to 75%",
      "Sports Scholarships",
      "Need-based Financial Aid",
      "Sibling Discounts"
    ],
    rating: 4.2,
    reviews: 6500,
    placementRate: "82%"
  },
  'chandigarh-university': {
    id: 'chandigarh-university',
    name: "Chandigarh University",
    shortName: "CU",
    location: "Mohali, Punjab",
    state: "Punjab",
    established: "2012",
    accreditation: "NAAC A+",
    ugcApproved: true,
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA", "B.Tech", "M.Tech", "BCA", "MCA"],
    highlights: [
      "Innovative teaching methods",
      "Industry partnerships",
      "Research excellence",
      "Student-centric approach",
      "Global exposure",
      "Entrepreneurship support"
    ],
    description: "Chandigarh University is a leading private university known for its innovative approach to education and strong industry connections.",
    detailedDescription: "Chandigarh University (CU) is a private university located in Mohali, Punjab. Established in 2012, CU has rapidly emerged as one of India's leading universities, known for its innovative teaching methodologies, world-class infrastructure, and strong industry partnerships. The university is committed to providing holistic education that combines academic excellence with practical skills development.",
    ranking: "Fastest Growing University in India",
    studycenters: "150+",
    website: "www.cuchd.in",
    totalStudents: "20000+",
    faculty: "1200+",
    campusSize: "200 acres",
    establishedYear: 2012,
    type: "Private University",
    approvals: ["UGC", "AICTE", "NAAC A+", "AIU"],
    facilities: [
      "Modern Campus Infrastructure",
      "Industry-standard Labs",
      "Research and Development Centers",
      "International Collaborations",
      "Incubation Centers",
      "Sports and Recreation Facilities"
    ],
    admissionProcess: [
      "Online Application",
      "Entrance Test (CUCET)",
      "Merit-based Selection",
      "Counseling Process",
      "Admission Confirmation"
    ],
    feeStructure: {
      undergraduate: "₹80,000 - ₹1,60,000 per year",
      postgraduate: "₹1,00,000 - ₹2,00,000 per year",
      diploma: "₹40,000 - ₹80,000 per year",
      certificate: "₹20,000 - ₹50,000 per year"
    },
    scholarships: [
      "Merit Scholarships up to 100%",
      "Sports Excellence Scholarships",
      "Need-based Financial Support",
      "International Student Scholarships"
    ],
    rating: 4.1,
    reviews: 9500,
    placementRate: "80%"
  }
};

interface UniversityPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: UniversityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const university = universities[resolvedParams.id as keyof typeof universities];
  
  if (!university) {
    return {
      title: 'University Not Found - EDBELL EDUSOLUTIONS',
      description: 'The requested university could not be found.'
    };
  }

  return {
    title: `${university.name} - Online Programs | EDBELL EDUSOLUTIONS`,
    description: `${university.detailedDescription.substring(0, 160)}...`,
    keywords: `${university.name}, ${university.shortName}, online university, distance education, ${university.accreditation}, ${university.programs.join(', ')}, ${university.location}`,
    openGraph: {
      title: `${university.name} - Online Programs`,
      description: university.description,
      type: 'article',
      url: `https://edbelledusolutions.com/universities/${resolvedParams.id}`,
      images: [
        {
          url: '/og-university-image.jpg',
          width: 1200,
          height: 630,
          alt: university.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${university.name} - Online Programs`,
      description: university.description,
      images: ['/og-university-image.jpg'],
    },
    alternates: {
      canonical: `https://edbelledusolutions.com/universities/${resolvedParams.id}`,
    },
  };
}

export default async function UniversityPage({ params }: UniversityPageProps) {
  const resolvedParams = await params;
  const university = universities[resolvedParams.id as keyof typeof universities];

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">University Not Found</h1>
          <Link href="/universities" className="text-blue-600 hover:text-blue-800">
            ← Back to Universities
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: university.name,
    description: university.detailedDescription,
    url: `https://edbelledusolutions.com/universities/${resolvedParams.id}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: university.location,
      addressRegion: university.state,
      addressCountry: 'IN'
    },
    foundingDate: university.established,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: university.rating,
      reviewCount: university.reviews
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
          {/* 3D Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-indigo-600/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Link href="/universities" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Universities
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{university.name}</h1>
                <p className="text-xl text-gray-700 mb-6">{university.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600">Established</div>
                    <div className="font-semibold text-gray-900">{university.established}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600">Students</div>
                    <div className="font-semibold text-gray-900">{university.totalStudents}</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600">Programs</div>
                    <div className="font-semibold text-gray-900">{university.programs.length}+</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="font-semibold text-gray-900">{university.rating}/5</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919876543210" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Apply Now
                  </a>
                  <a href="mailto:info@edbelledusolutions.com?subject=University Prospectus Request&body=Hi, I would like to download the university prospectus. Please send me the details." className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Download Prospectus
                  </a>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">University Highlights</h3>
                <div className="space-y-4">
                  {university.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Accreditation</div>
                      <div className="text-xl font-bold text-gray-900">{university.accreditation}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Placement Rate</div>
                      <div className="text-xl font-bold text-gray-900">{university.placementRate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* About University */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About {university.shortName}</h2>
                  <p className="text-lg text-gray-700 mb-6">{university.detailedDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">University Type</h3>
                      <p className="text-gray-700">{university.type}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Campus Size</h3>
                      <p className="text-gray-700">{university.campusSize}</p>
                    </div>
                  </div>
                </div>

                {/* Programs Offered */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Programs Offered</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {university.programs.map((program, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <span className="font-semibold text-gray-900">{program}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Facilities & Infrastructure</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {university.facilities.map((facility, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center space-x-3">
                          <Building className="h-6 w-6 text-blue-600" />
                          <span className="text-gray-900">{facility}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admission Process */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Process</h2>
                  <div className="space-y-4">
                    {university.admissionProcess.map((step, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-900">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fee Structure */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Fee Structure</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(university.feeStructure).map(([level, fee]) => (
                      <div key={level} className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">{level}</h3>
                        <p className="text-2xl font-bold text-blue-600">{fee}</p>
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
                      <span className="text-gray-600">Established</span>
                      <span className="font-semibold">{university.established}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-semibold">{university.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold">{university.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Students</span>
                      <span className="font-semibold">{university.totalStudents}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Faculty</span>
                      <span className="font-semibold">{university.faculty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold">{university.rating}</span>
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Approvals */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Approvals & Accreditations</h3>
                  <div className="space-y-3">
                    {university.approvals.map((approval, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scholarships */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Scholarships Available</h3>
                  <div className="space-y-3">
                    {university.scholarships.map((scholarship, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 text-sm">{scholarship}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Get More Information</h3>
                  <p className="text-blue-100 mb-4">
                    Connect with our counselors for detailed information about {university.shortName}.
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
                      href="mailto:info@edbelledusolutions.com?subject=University Brochure Request&body=Hi, I would like to get the university brochure. Please send me the details."
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Get Brochure
                    </a>
                    <a 
                      href={`https://${university.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Universities */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(universities)
                .filter(u => u.id !== university.id)
                .slice(0, 3)
                .map((relatedUniversity) => (
                  <Link key={relatedUniversity.id} href={`/universities/${relatedUniversity.id}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedUniversity.name}</h3>
                      <p className="text-gray-600 mb-4">{relatedUniversity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                          {relatedUniversity.accreditation}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{relatedUniversity.rating}</span>
                        </div>
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