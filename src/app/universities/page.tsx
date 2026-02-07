'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
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
  Building,
  GraduationCap,
  Trophy,
  Target,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  Heart,
  TrendingUp
} from 'lucide-react';

interface University {
  _id?: string;
  name: string;
  url: string;
  accreditation: string;
  established: string;
  location?: string;
  website?: string;
  description: string;
  ranking?: string;
  studentsCount?: string;
  coursesOffered?: number;
  specialization?: string[];
  rating?: number;
}

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/universities');
      const data = await response.json();
      
      if (data.success) {
        setUniversities(data.universities);
      } else {
        console.error('Failed to fetch universities:', data.error);
        setUniversities([]);
      }
    } catch (error) {
      console.error('Error fetching universities:', error);
      setUniversities([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to generate university slugs that match the [id] route
  const getUniversitySlug = (universityName: string): string => {
    // Convert university name to URL-friendly slug
    return universityName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const filters = [
    { id: 'all', name: 'All Universities', count: universities.length },
    { id: 'naac-a++', name: 'NAAC A++', count: universities.filter(u => u.accreditation === 'NAAC A++').length },
    { id: 'naac-a+', name: 'NAAC A+', count: universities.filter(u => u.accreditation === 'NAAC A+').length },
    { id: 'top-ranked', name: 'Top Ranked', count: universities.filter(u => u.ranking?.includes('#1') || u.ranking?.includes('#2') || u.ranking?.includes('#3')).length }
  ];

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.specializations?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'naac-a++' && university.accreditation === 'NAAC A++') ||
                         (selectedFilter === 'naac-a+' && university.accreditation === 'NAAC A+') ||
                         (selectedFilter === 'top-ranked' && (university.ranking?.includes('#1') || university.ranking?.includes('#2') || university.ranking?.includes('#3')));
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Universities</h3>
          <p className="text-gray-600">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section - Completely Different Design */}
      <section className="relative py-6 sm:py-8 lg:py-10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-indigo-600/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-6 py-3 mb-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                <Building className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800">🏛️ PREMIER UNIVERSITY PARTNERS</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gray-900">Choose Your</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text">
                  Dream University
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Partner with India's top universities offering world-class online education.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{universities.length}+</div>
                  <div className="text-sm text-gray-600 font-medium">Top Universities</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/50">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Degree Programs</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/50 sm:col-span-1 col-span-2">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-medium">Graduate Success</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#universities" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group">
                  <span>Explore Universities</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/contact" className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:border-blue-300 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl">
                  Get University Guidance
                </Link>
              </div>
            </div>

            {/* Right Content - University Showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Featured University Cards */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <Award className="h-8 w-8" />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">NAAC A++</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Delhi University</h3>
                    <p className="text-blue-100 text-sm">Premier institution with 100+ years of excellence</p>
                    <div className="flex items-center mt-4">
                      <Star className="h-4 w-4 text-yellow-300 fill-current" />
                      <span className="text-sm ml-1">4.8/5</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <Zap className="h-8 w-8" />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Tech Leader</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Excellence Institute</h3>
                    <p className="text-cyan-100 text-sm">Cutting-edge technology programs</p>
                    <div className="flex items-center mt-4">
                      <TrendingUp className="h-4 w-4 text-green-300" />
                      <span className="text-sm ml-1">95% Placement</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <Trophy className="h-8 w-8" />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">#3 Ranked</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Business University</h3>
                    <p className="text-indigo-100 text-sm">World-class MBA programs</p>
                    <div className="flex items-center mt-4">
                      <Globe className="h-4 w-4 text-blue-300" />
                      <span className="text-sm ml-1">Global Network</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <Heart className="h-8 w-8" />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Liberal Arts</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Arts Institute</h3>
                    <p className="text-teal-100 text-sm">Creative & innovative education</p>
                    <div className="flex items-center mt-4">
                      <Users className="h-4 w-4 text-yellow-300" />
                      <span className="text-sm ml-1">12K+ Students</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-3 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">UGC</div>
                    <div className="text-sm text-gray-600">Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200/50" id="universities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Find Your Perfect University Match</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Search through our carefully selected partner universities and find the one that aligns with your academic goals and career aspirations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities by name, location, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center space-x-2 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl scale-105 -translate-y-1'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                }`}
              >
                <span>{filter.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid - Unique Card Design */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Universities Found</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                {searchTerm ? `No universities match "${searchTerm}". Try different keywords.` : 
                'No universities match the filter. Try a different category.'}
              </p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedFilter('all');}}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Our Partner Universities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Showing {filteredUniversities.length} universities. Each offers world-class education.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredUniversities.map((university) => (
                  <div key={university._id || university.name} className="group h-full">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 transform hover:scale-105 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                      {/* Header with Gradient */}
                      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Building className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                  {university.accreditation}
                                </span>
                                <div className="text-white/80 text-sm mt-1">Est. {university.established}</div>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">{university.name}</h3>
                            <div className="flex items-center text-white/90 text-sm">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{university.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            {university.rating && (
                              <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 mb-2">
                                <Star className="h-4 w-4 text-yellow-300 fill-current mr-1" />
                                <span className="text-white font-semibold">{university.rating}</span>
                              </div>
                            )}
                            {university.ranking && (
                              <div className="text-white/90 text-sm font-medium">{university.ranking}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-grow flex flex-col">
                        
                        {/* Stats Grid - Simplified */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-3 bg-blue-50 rounded-xl">
                            <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-sm font-bold text-gray-900">{university.totalStudents || university.studentsCount || 'N/A'}</div>
                            <div className="text-xs text-gray-600">Students</div>
                          </div>
                          <div className="text-center p-3 bg-cyan-50 rounded-xl">
                            <BookOpen className="h-5 w-5 text-cyan-600 mx-auto mb-1" />
                            <div className="text-sm font-bold text-gray-900">{university.coursesOffered || 'N/A'}</div>
                            <div className="text-xs text-gray-600">Courses</div>
                          </div>
                          <div className="text-center p-3 bg-indigo-50 rounded-xl">
                            <Award className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
                            <div className="text-sm font-bold text-gray-900">UGC</div>
                            <div className="text-xs text-gray-600">Approved</div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto pt-4">
                          <Link href={`/universities/${getUniversitySlug(university.name)}`} className="flex-1">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                              <span className="text-sm">View Details</span>
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-110">
                              <Phone className="h-4 w-4" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section - Different from Courses */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-8 transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-xl">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            Your University Journey
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Starts Here
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get personalized university recommendations. Our counselors will guide you through the admission process.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              <Phone className="h-6 w-6 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-base mb-2">Free Consultation</h3>
              <p className="text-blue-100 text-sm">Expert guidance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              <Target className="h-6 w-6 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-base mb-2">Perfect Match</h3>
              <p className="text-blue-100 text-sm">Universities that fit your goals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              <Shield className="h-6 w-6 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-base mb-2">End-to-End Support</h3>
              <p className="text-blue-100 text-sm">Complete admission assistance</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group">
                <Phone className="h-5 w-5" />
                <span>Get University Guidance</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/courses">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group">
                <BookOpen className="h-5 w-5" />
                <span>Browse All Courses</span>
              </button>
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">100% Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Expert University Counselors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Personalized Recommendations</span>
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