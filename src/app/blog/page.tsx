'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Tag, 
  Target,
  Users,
  Zap,
  GraduationCap
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  featured: boolean;
  views: number;
  likes: number;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  // Sample blog data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Online Education in India",
      slug: "future-online-education-india",
      excerpt: "Discover how online education is transforming the learning landscape in India and what it means for students.",
      content: "Full content here...",
      author: "Dr. Arif Wafy Varambatta",
      category: "Education Trends",
      tags: ["online learning", "education", "india", "future"],
      publishDate: "2024-02-01",
      readTime: "5 min read",
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "Top 10 Career Opportunities After Graduation",
      slug: "top-career-opportunities-graduation",
      excerpt: "Explore the most promising career paths available for fresh graduates in today's competitive job market.",
      content: "Full content here...",
      author: "Career Counselor",
      category: "Career Guidance",
      tags: ["career", "graduation", "jobs", "opportunities"],
      publishDate: "2024-01-28",
      readTime: "7 min read",
      featured: false,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: "Study Abroad: Complete Guide for Indian Students",
      slug: "study-abroad-guide-indian-students",
      excerpt: "Everything you need to know about studying abroad, from application process to visa requirements.",
      content: "Full content here...",
      author: "Study Abroad Expert",
      category: "Study Abroad",
      tags: ["study abroad", "international", "visa", "application"],
      publishDate: "2024-01-25",
      readTime: "10 min read",
      featured: false,
      views: 1450,
      likes: 112
    }
  ];

  const categories = ['All Posts', 'Education Trends', 'Career Guidance', 'Study Abroad', 'Scholarships', 'Skills Development'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogPosts.find(post => post.featured) || blogPosts[0];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryCount = (category: string) => {
    if (category === 'All Posts') return blogPosts.length;
    return blogPosts.filter(post => post.category === category).length;
  };

  const getAllTags = () => {
    const allTags = blogPosts.flatMap(post => post.tags);
    return [...new Set(allTags)];
  };

  const getRecentPosts = () => {
    return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section with 3D Animations */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500 transform-gpu"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 3D Animated Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-8 transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl animate-bounce">
              <BookOpen className="h-12 w-12 text-white transform hover:rotate-6 transition-transform duration-300" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Educational
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Insights
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover expert insights, career guidance, and educational trends to help you make informed decisions about your future.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center p-2">
                    <div className="flex-1 flex items-center">
                      <Search className="h-6 w-6 text-gray-400 ml-4 mr-3" />
                      <input
                        type="text"
                        placeholder="Search articles, topics, or keywords..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 py-4 px-2 text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none text-lg"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Article with 3D Effects */}
          {featuredBlog && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/50 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                        ⭐ FEATURED
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {featuredBlog.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredBlog.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-gray-900 font-semibold text-sm">{featuredBlog.author}</div>
                            <div className="text-gray-500 text-xs">{formatDate(featuredBlog.publishDate)}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{featuredBlog.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{featuredBlog.views}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${featuredBlog.slug}`}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 group"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category} ({getCategoryCount(category)})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6 animate-bounce">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or category filter to find more content.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('All Posts');}}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group">
                      <div className="p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-4 text-gray-500 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(post.publishDate)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-gray-900 font-medium text-sm">{post.author}</div>
                              <div className="text-gray-500 text-xs">{formatDate(post.publishDate)}</div>
                            </div>
                          </div>
                          
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center space-x-1 transform group-hover:translate-x-2 transition-all duration-300"
                          >
                            <span>Read Full Article</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Popular Tags Section - Below Posts */}
              <div className="mt-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Target className="h-6 w-6 mr-3 text-indigo-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {getAllTags().map((tag, index) => (
                    <span key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-cyan-100 text-gray-700 hover:text-blue-700 text-sm px-4 py-3 rounded-full cursor-pointer transition-all duration-300 inline-flex items-center transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md font-medium">
                      <Tag className="h-4 w-4 mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Section - Below Tags */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-pulse delay-1000"></div>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 backdrop-blur-sm">
                    <Zap className="h-8 w-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                    Get the latest educational insights, career tips, and study abroad opportunities delivered to your inbox.
                  </p>
                  <div className="max-w-md mx-auto space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105 text-center"
                    />
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`text-left transition-all duration-300 transform hover:translate-x-2 ${
                          selectedCategory === category 
                            ? 'text-blue-600 font-semibold scale-105' 
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {category}
                      </button>
                      <span className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800 scale-110'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {getCategoryCount(category)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-cyan-600" />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {getRecentPosts().slice(0, 4).map((post) => (
                    <div key={post.id} className="pb-4 border-b border-gray-100 last:border-b-0 group cursor-pointer">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-gray-700 hover:text-blue-600 transition-all duration-300 line-clamp-2 font-medium group-hover:translate-x-2 transform"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-500">{formatDate(post.publishDate)}</p>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Users className="h-3 w-3" />
                          <span className="text-xs">{post.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-2xl animate-bounce">
            <GraduationCap className="h-10 w-10 animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            Ready to Transform Your
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Educational Journey?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of students who are already benefiting from our expert guidance, 
            comprehensive courses, and personalized career counseling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/courses"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
            >
              <BookOpen className="h-5 w-5" />
              <span>Explore Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}