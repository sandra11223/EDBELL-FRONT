'use client';

import React from 'react';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  UserCheck, 
  Plane, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface Course {
  id: string;
  name: string;
  url: string;
  category: 'Undergraduate' | 'Postgraduate' | 'Specialized';
  duration: string;
  fees: string;
  eligibility: string;
  description: string;
}

export default function Home() {
  // Static course data for frontend-only design
  const courses: Course[] = [
    {
      id: '1',
      name: 'Bachelor of Arts (BA)',
      url: '/courses/bachelor-of-arts',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹15,000',
      eligibility: '12th Pass',
      description: 'Comprehensive liberal arts program covering literature, history, political science, and more with flexible learning options.'
    },
    {
      id: '2',
      name: 'Bachelor of Commerce (B.Com)',
      url: '/courses/bachelor-of-commerce',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹18,000',
      eligibility: '12th Pass',
      description: 'Business-focused program covering accounting, finance, economics, and business management fundamentals.'
    },
    {
      id: '3',
      name: 'Master of Business Administration (MBA)',
      url: '/courses/master-of-business-administration',
      category: 'Postgraduate',
      duration: '2 Years',
      fees: '₹40,000',
      eligibility: 'Graduate',
      description: 'Comprehensive management program preparing leaders for global business challenges and opportunities.'
    },
    {
      id: '4',
      name: 'Bachelor of Science (B.Sc)',
      url: '/courses/bsc',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹20,000',
      eligibility: '12th Pass (Science)',
      description: 'Science-focused undergraduate program with specializations in various scientific disciplines.'
    },
    {
      id: '5',
      name: 'Bachelor of Computer Applications (BCA)',
      url: '/courses/bsc-cs',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹25,000',
      eligibility: '12th Pass',
      description: 'Computer applications program focusing on programming, software development, and IT skills.'
    },
    {
      id: '6',
      name: 'Digital Marketing Certification',
      url: '/courses/digital-marketing',
      category: 'Specialized',
      duration: '6 Months',
      fees: '₹12,000',
      eligibility: 'Any Graduate',
      description: 'Professional certification in digital marketing strategies, SEO, social media, and online advertising.'
    }
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Online Degree Programs",
      description: "UGC-approved degrees with flexible learning."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
      title: "Career Counseling",
      description: "Expert guidance for your career path."
    },
    {
      icon: <Plane className="h-8 w-8 text-indigo-600" />,
      title: "Study Abroad Services",
      description: "International education assistance."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-indigo-600" />,
      title: "Scholarship Assistance",
      description: "Financial aid and scholarship support."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Test Preparations",
      description: "Competitive exam preparation."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "PSC/UPSC Coaching",
      description: "Government job exam coaching."
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
      title: "UGC Approved",
      description: "Recognized nationwide programs."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Expert Faculty",
      description: "Experienced professors."
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      title: "100% Online",
      description: "Flexible learning schedule."
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Placement Support",
      description: "Career guidance included."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Hero Section with Light Blue Theme */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 min-h-[85vh] flex items-center overflow-hidden py-16">
        {/* Light Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500 transform-gpu"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 text-gray-900 text-center lg:text-left">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 shadow-lg">
                <span className="text-sm font-medium text-blue-900">🎓 Trusted by 25,000+ Students</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Guiding Students to the</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text">
                  Right Education Path
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                UGC-approved online degrees with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/courses" className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden text-center">
                  <span className="relative z-10">Explore Courses</span>
                </Link>
                <Link href="/contact" className="group border-2 border-blue-600 text-blue-600 hover:bg-white hover:border-blue-700 hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>
            
            {/* Right Content - Professional Image - Takes 2 columns */}
            <div className="lg:col-span-2 relative mt-8 lg:mt-0">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl relative overflow-hidden shadow-xl">
                {/* Professional Image */}
                <img 
                  src="/hero-professional.jpg" 
                  alt="EDBELL Professional" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Text inside image at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                    ADV. ARIF WAFY VARAMBATTA
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    (MANAGING DIRECTOR EDBELL EDUSOLUTIONS LLP)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Effects */}
      <section className="py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 border-b border-blue-500/20 relative overflow-hidden">
        {/* 3D Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center items-stretch">
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <Shield className="h-5 w-5 text-white group-hover:animate-pulse" />
              </div>
              <div className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">UGC Approved</div>
              <div className="text-xs text-blue-200 group-hover:text-white transition-colors duration-300">Recognized Programs</div>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <Users className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <div className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">25,000+</div>
              <div className="text-blue-200 group-hover:text-white transition-colors duration-300">Happy Students</div>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <Globe className="h-8 w-8 text-white group-hover:animate-spin" />
              </div>
              <div className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">50+</div>
              <div className="text-blue-200 group-hover:text-white transition-colors duration-300">University Partners</div>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <Award className="h-8 w-8 text-white group-hover:animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">95%</div>
              <div className="text-blue-200 group-hover:text-white transition-colors duration-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-8 relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-3 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-bounce">
              <Zap className="h-5 w-5 text-white animate-pulse" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 transform hover:scale-105 transition-transform duration-300">
              Our Student Support Services
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Educational solutions for your academic success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group relative h-full">
                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
                
                <div className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 border border-blue-100 group-hover:border-blue-300 h-full flex flex-col">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="transform group-hover:animate-bounce">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">{service.description}</p>
                  
                  {/* 3D Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section with 3D Effects */}
      <section className="py-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mb-3 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-pulse">
              <BookOpen className="h-5 w-5 text-white animate-bounce" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 transform hover:scale-105 transition-transform duration-300">
              Courses & Education Pathways
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              UGC-approved programs for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group relative cursor-pointer">
              {/* 3D Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-90"></div>
              
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-4 text-white text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-300 shadow-xl hover:shadow-2xl h-full flex flex-col justify-between">
                {/* 3D Floating Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-300/30 rounded-full animate-bounce delay-300"></div>
                
                <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mb-3">
                  <GraduationCap className="h-10 w-10 mx-auto animate-pulse" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-200 transition-colors duration-300">Higher Secondary</h3>
                <p className="text-xs text-indigo-100 mb-3 group-hover:text-white transition-colors duration-300">Foundation programs</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Science Stream</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Commerce Stream</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Arts Stream</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              {/* 3D Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-90"></div>
              
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* 3D Floating Elements */}
                <div className="absolute top-4 left-4 w-5 h-5 bg-white/20 rounded-full animate-bounce delay-200"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-cyan-300/30 rounded-full animate-bounce delay-400"></div>
                
                <div className="transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 mb-6">
                  <BookOpen className="h-16 w-16 mx-auto animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-200 transition-colors duration-300">Degree & PG Programs</h3>
                <p className="text-blue-100 mb-6 group-hover:text-white transition-colors duration-300">UG and PG degrees</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">BA, B.Com, B.Sc</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">MA, M.Com, MBA</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Professional Courses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              {/* 3D Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-green-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-90"></div>
              
              <div className="relative bg-gradient-to-br from-teal-600 to-green-700 rounded-2xl p-8 text-white text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* 3D Floating Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-4 left-4 w-5 h-5 bg-green-300/30 rounded-full animate-bounce delay-500"></div>
                
                <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mb-6">
                  <Award className="h-16 w-16 mx-auto animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-200 transition-colors duration-300">Skill & Counseling</h3>
                <p className="text-teal-100 mb-6 group-hover:text-white transition-colors duration-300">Career guidance & skills</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Career Counseling</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Skill Development</span>
                  </div>
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="text-sm">Test Preparation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Nair</h4>
                  <p className="text-gray-600">MBA Graduate</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Great career counseling and flexible MBA program."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rahul Kumar</h4>
                  <p className="text-gray-600">B.Com Graduate</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Excellent study abroad support. Now in Canada!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Edbell
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Expert guidance for your academic and career goals.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/campus-modern.jpg" 
                  alt="Modern Campus - EDBELL EDUSOLUTIONS" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Modern Campus</h3>
                    <p className="text-gray-600">State-of-the-art facilities</p>
                  </div>
                </div>
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-2">Modern Campus</h3>
                    <p className="text-blue-100">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}