'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Heart, Loader2, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setMessage(data.message);
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Universities', href: '/universities' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Online Degree Programs', href: '/courses' },
    { name: 'Career Counseling', href: '/services' },
    { name: 'Study Abroad Services', href: '/services' },
    { name: 'Test Preparations', href: '/services' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/edbelledusolutions',
      icon: Instagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      color: 'hover:text-blue-700',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mobile-touch-target">
                <span className="text-white font-bold text-lg sm:text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">EdBell</h3>
                <p className="text-gray-400 text-sm">EDUSOLUTIONS LLP</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Empowering students with quality education and comprehensive support services. Your success is our mission.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-300">
                  15/382, Calicut Tower<br />
                  Kozhikode Road, Wayanad<br />
                  Kerala, India - 673121
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors mobile-touch-target">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@edbelledusolutions.com" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors mobile-touch-target">
                  info@edbelledusolutions.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 mobile-touch-target`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base mobile-touch-target inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base mobile-touch-target inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Stay Connected</h4>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Get updates on courses, admissions, and educational opportunities.
            </p>
            
            {isSubscribed ? (
              <div className="text-center p-4 bg-green-900/30 border border-green-700 rounded-lg">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mb-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-green-300 text-sm">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base min-h-[48px]"
                  disabled={isLoading}
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
                {message && (
                  <p className="text-red-300 text-xs text-center">{message}</p>
                )}
              </form>
            )}
            
            {/* Certifications */}
            <div className="mt-6">
              <h5 className="text-sm sm:text-base font-semibold text-white mb-2">Certifications</h5>
              <div className="space-y-1">
                <div className="text-xs sm:text-sm text-gray-400">✓ UGC-DEB Approved</div>
                <div className="text-xs sm:text-sm text-gray-400">✓ NAAC A++ Graded</div>
                <div className="text-xs sm:text-sm text-gray-400">✓ ISO 9001:2015 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} EDBELL EDUSOLUTIONS LLP. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Kerala, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;