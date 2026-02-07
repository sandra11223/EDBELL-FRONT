import Newsletter from '@/components/Newsletter';
import { CheckCircle, Users, Target, Eye, Award, MapPin, Calendar, Phone, Mail, Zap, Shield, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "Highest quality education and services",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Student-Centric",
      description: "Focused on student success",
      gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Integrity",
      description: "Ethical practices and transparency",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Innovation",
      description: "Better learning experiences",
      gradient: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  const achievements = [
    "UGC-DEB approved program partnerships",
    "NAAC A++ graded university collaborations",
    "1000+ successful student enrollments",
    "95% student satisfaction rate",
    "Comprehensive career guidance services",
    "International education partnerships"
  ];

  const timeline = [
    {
      year: "2024",
      title: "Company Incorporation",
      description: "EDBELL EDUSOLUTIONS LLP was officially incorporated on December 27, 2024, in Mananthavady, Wayanad, Kerala."
    },
    {
      year: "2024",
      title: "University Partnerships",
      description: "Established partnerships with top UGC-DEB approved universities across India."
    },
    {
      year: "2025",
      title: "Digital Platform Launch",
      description: "Launched comprehensive online platform for student services and course management."
    },
    {
      year: "Future",
      title: "Expansion Plans",
      description: "Planning to expand services across South India and establish international partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Hero Section - Same as Home Page */}
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
                <span className="text-sm font-medium text-blue-900">🎓 Transforming Education Since 2024</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">About</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text">
                  EDBELL EDUSOLUTIONS
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Your trusted partner in quality education, empowering students with UGC-approved programs and comprehensive support services.
              </p>
            </div>

            {/* Right Column - Image (Takes 2 columns) */}
            <div className="lg:col-span-2 relative mt-8 lg:mt-0">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl relative overflow-hidden shadow-xl">
                <img 
                  src="/about-professional.jpg" 
                  alt="EDBELL Education" 
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

      {/* Stats Section - Same as Home Page */}
      <section className="py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 border-b border-blue-500/20 relative overflow-hidden">
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

      {/* Company Story with Timeline Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-2xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                The <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text">EDBELL</span> Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our journey of commitment to educational excellence
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-black text-blue-500 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for opposite side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                15/382, Calicut Tower<br />
                Kozhikode Road, Wayanad<br />
                Kerala, India
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-600">info@edbelledusolutions.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-blue-600" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To enable students to achieve their dreams through quality education and innovative learning solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading provider of accessible, high-quality online education in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-2xl">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide our commitment to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">What We Offer</h2>
            <p className="body-large text-gray-600">
              Comprehensive educational services designed to support your academic journey
            </p>
          </div>
          
          <div className="grid-auto-fit">
            <div className="card card-hover card-body">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-4">Online Degree Programs</h3>
              <p className="body text-gray-600 mb-4">
                UGC-DEB approved online degree programs
              </p>
              <ul className="body-small text-gray-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>NAAC A++ graded institutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Flexible learning schedules</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Home-based examinations</span>
                </li>
              </ul>
            </div>
            
            <div className="card card-hover card-body">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-4">Specialized Courses</h3>
              <p className="body text-gray-600 mb-4">
                Professional certification programs
              </p>
              <ul className="body-small text-gray-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Hospital Administration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Office Administration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Digital Marketing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>MTTC Programs</span>
                </li>
              </ul>
            </div>
            
            <div className="card card-hover card-body">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-4">Support Services</h3>
              <p className="body text-gray-600 mb-4">
                Guidance throughout your educational journey
              </p>
              <ul className="body-small text-gray-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Career counseling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Study abroad services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Scholarship assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Test preparations</span>
                </li>
              </ul>
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