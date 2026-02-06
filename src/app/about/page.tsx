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
    <div className="min-h-screen">
      {/* Hero Section with Storytelling Design */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden flex items-center">
        {/* Particle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Logo */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-8 transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer shadow-2xl animate-bounce">
              <Users className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Our
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text animate-pulse">
                Journey
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              From a vision in Kerala to empowering 
              <span className="text-cyan-400 font-bold"> 25,000+ students</span> across India
            </p>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white/70 text-sm mt-2">Scroll to explore our story</p>
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

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-2xl">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group transform hover:scale-105 hover:-translate-y-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-2xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the visionary leader driving our mission forward
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-12 text-center border border-gray-100 group transform hover:scale-105 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Adv. Arif Wafy Varambatta</h3>
              <p className="text-xl text-blue-600 mb-8 font-semibold">Managing Director</p>
              <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
                A visionary leader with extensive experience in education and legal practice, 
                Adv. Arif Wafy Varambatta brings a unique perspective to educational services. 
                His commitment to ethical practices and student welfare has been instrumental 
                in establishing EDBELL EDUSOLUTIONS as a trusted name in online education.
              </p>
            </div>
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