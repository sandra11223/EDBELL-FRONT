'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Users, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  Eye,
  Download,
  Share2
} from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: 'events' | 'campus' | 'graduation' | 'activities' | 'achievements';
  date: string;
  location?: string;
  description: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery?published=true');
      const data = await response.json();
      
      if (data.success) {
        // Transform API data to match component interface
        const transformedImages = data.images.map((img: any) => ({
          id: img._id,
          src: img.imageUrl,
          alt: img.imageAlt,
          title: img.title,
          category: img.category,
          date: img.eventDate || img.createdAt,
          location: img.location,
          description: img.description
        }));
        setGalleryImages(transformedImages);
      } else {
        console.error('Failed to fetch gallery images:', data.error);
        setGalleryImages([]);
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setGalleryImages([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'campus', name: 'Campus', icon: MapPin },
    { id: 'graduation', name: 'Graduation', icon: GraduationCap },
    { id: 'activities', name: 'Activities', icon: Users },
    { id: 'achievements', name: 'Achievements', icon: Award }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center mobile-container">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <h3 className="mobile-heading-4 text-gray-900 mb-2">Loading Gallery</h3>
          <p className="mobile-body text-gray-600">Please wait while we load your photos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="mobile-container py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors mobile-touch-target">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Gallery</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-blue-700">
        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500 transform-gpu"></div>
        </div>
        
        <div className="relative mobile-container mobile-section-padding">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/30 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8 mobile-touch-target transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-xl border border-blue-400/30">
              <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-bounce" />
            </div>
            <h1 className="mobile-hero-text text-white mb-4 sm:mb-6 text-balance transform hover:scale-105 transition-transform duration-300">
              Photo Gallery
            </h1>
            <p className="mobile-body-large text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
              Explore moments from our vibrant campus life, memorable events, achievements, 
              and the journey of our students towards academic excellence.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-md mx-auto">
              <div className="bg-blue-500/20 backdrop-blur-lg text-center p-3 sm:p-4 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">{galleryImages.length}+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Photos</div>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-lg text-center p-3 sm:p-4 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-blue-200 text-xs sm:text-sm">Categories</div>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-lg text-center p-3 sm:p-4 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">2024</div>
                <div className="text-blue-200 text-xs sm:text-sm">Latest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="mobile-container py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
              <span className="mobile-heading-4 text-gray-900">Browse by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`mobile-touch-target flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-xs sm:text-sm ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">{category.name}</span>
                    <span className="xs:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="body-large text-gray-600">
              {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="card card-hover cursor-pointer overflow-hidden group"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/600/400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="glass rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge ${
                      image.category === 'events' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'campus' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'graduation' ? 'bg-cyan-100 text-cyan-800' :
                      image.category === 'activities' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                    <span className="body-small text-gray-500">{formatDate(image.date)}</span>
                  </div>
                  
                  <h3 className="heading-4 text-gray-900 mb-2 line-clamp-2">
                    {image.title}
                  </h3>
                  
                  {image.location && (
                    <div className="flex items-center space-x-2 body-small text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{image.location}</span>
                    </div>
                  )}
                  
                  <p className="body text-gray-600 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Camera className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="heading-3 text-gray-900 mb-4">No Photos Found</h3>
              <p className="body-large text-gray-600 mb-8">
                No photos available in the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn btn-primary"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-96 sm:h-[500px] object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = '/api/placeholder/800/600';
                  }}
                />
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        selectedImage.category === 'events' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'campus' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'graduation' ? 'bg-cyan-100 text-cyan-800' :
                        selectedImage.category === 'activities' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedImage.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(selectedImage.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    
                    {selectedImage.location && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedImage.location}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col gap-2">
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
                
                {filteredImages.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 text-center">
                      Photo {currentImageIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="body-large text-blue-100 mb-8">
              Join our vibrant community and create your own memorable moments. 
              Start your educational journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                <Users className="h-5 w-5" />
                <span>Join Our Community</span>
              </Link>
              <Link href="/courses" className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                <GraduationCap className="h-5 w-5" />
                <span>Explore Courses</span>
              </Link>
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