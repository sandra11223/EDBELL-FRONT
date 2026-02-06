'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  BookOpen, 
  ThumbsUp, 
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

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

interface BlogArticleClientProps {
  post: BlogPost;
  blogPosts: BlogPost[];
}

export default function BlogArticleClient({ post, blogPosts }: BlogArticleClientProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    }
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL');
        }
        break;
    }
  };

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500 transform-gpu"></div>
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <Link 
                href="/blog" 
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  ⭐ Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">{post.title}</h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">{post.author}</div>
                  <div className="text-sm text-blue-200">{formatDate(post.publishDate)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.views} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-12 border border-blue-100/50">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:mb-2 prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-blue-800 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-blue-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-blue-600" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm px-4 py-2 rounded-full hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 cursor-pointer transform hover:scale-105 font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Actions */}
                <div className="mt-8 pt-8 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={handleLike}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold ${
                          liked 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-red-50 hover:to-pink-50 hover:text-red-600'
                        }`}
                      >
                        <ThumbsUp className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                        <span>{likes}</span>
                      </button>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Share your thoughts</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 mr-2 font-medium">Share:</span>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <Facebook className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="p-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <Twitter className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl ${
                          copied 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                            : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400'
                        }`}
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100/50 group transform hover:scale-105 hover:-translate-y-2">
                          <div className="p-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                {relatedPost.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span className="font-medium">{formatDate(relatedPost.publishDate)}</span>
                              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Subscription */}
              <Newsletter variant="sidebar" />
              
              {/* Author Info */}
              <div className="bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Educational expert and career counselor with over 10 years of experience in guiding students towards successful academic and professional paths.
                  </p>
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg hover:shadow-xl"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.slug !== post.slug)
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 4)
                    .map((popularPost) => (
                      <Link key={popularPost.id} href={`/blog/${popularPost.slug}`}>
                        <div className="pb-4 border-b border-blue-100 last:border-b-0 group cursor-pointer">
                          <h4 className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 line-clamp-2 group-hover:translate-x-2 transform">
                            {popularPost.title}
                          </h4>
                          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                            <span className="font-medium">{formatDate(popularPost.publishDate)}</span>
                            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{popularPost.views} views</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}