import Newsletter from '@/components/Newsletter';
import { CheckCircle, Users, Target, Eye, Award, MapPin, Calendar, Phone, Mail, Zap, Shield, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "Committed to providing the highest quality education and services",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Student-Centric",
      description: "Every decision we make is focused on student success and satisfaction",
      gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Integrity",
      description: "Maintaining ethical practices and transparency in all our operations",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Innovation",
      description: "Continuously evolving our methods to provide better learning experiences",
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
      {/* Unique Hero Section for About Page - Blue Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-400/30 shadow-2xl">
              <Globe className="h-6 w-6 text-cyan-300 mr-3 animate-spin" />
              <span className="text-white font-semibold text-lg">Transforming Education Since 2024</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Image 1 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-6 border border-blue-400/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-cyan-500 rounded-2xl relative overflow-hidden shadow-2xl">
                  <img 
                    src="/about-team.jpg" 
                    alt="EDBELL Team" 
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-3 shadow-2xl animate-bounce">
                <Users className="h-6 w-6" />
              </div>
            </div>

            {/* Center Column - Main Content */}
            <div className="text-center text-white space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text animate-pulse">
                  Who We Are
                </span>
              </h1>
              
              <p className="text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                EDBELL EDUSOLUTIONS LLP - Your trusted partner in quality education and career success
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-8">
                <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">25K+</div>
                  <div className="text-cyan-200 text-sm">Students</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">50+</div>
                  <div className="text-cyan-200 text-sm">Universities</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">95%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-cyan-200 text-sm">UGC Approved</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image 2 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-lg rounded-3xl p-6 border border-cyan-400/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl relative overflow-hidden shadow-2xl">
                  <img 
                    src="/about-campus.jpg" 
                    alt="EDBELL Campus" 
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-xl p-3 shadow-2xl animate-bounce delay-300">
                <Award className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Shield className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">UGC Approved</h3>
              <p className="text-blue-200">All programs are UGC-DEB approved and recognized nationwide</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Target className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Career Focused</h3>
              <p className="text-cyan-200">Comprehensive career guidance and placement support</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Zap className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Fast Track</h3>
              <p className="text-indigo-200">Flexible online programs that fit your schedule</p>
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
                A journey of passion, dedication, and unwavering commitment to educational excellence
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
                To enable students to achieve their dreams while promoting ethical and 
                social development through quality education, comprehensive support services, 
                and innovative learning solutions that prepare them for global opportunities.
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
                To become the leading provider of accessible, high-quality online education 
                in India, creating a generation of skilled professionals and academicians 
                who contribute positively to society and the global economy.
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
              These fundamental principles guide everything we do and shape our commitment 
              to student success and educational excellence.
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
                100% online BA, B.Com, BBA, MA, M.Com, and MBA programs from UGC-DEB approved universities
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
                Professional certification programs in high-demand fields
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
                Comprehensive guidance and assistance throughout your educational journey
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