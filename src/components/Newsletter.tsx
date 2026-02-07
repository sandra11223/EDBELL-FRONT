'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, CheckCircle, Loader2, Zap, LogIn } from 'lucide-react';

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'sidebar';
  className?: string;
}

export default function Newsletter({ variant = 'default', className = '' }: NewsletterProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const userEmail = localStorage.getItem('userEmail');
      
      if (loggedIn === 'true' && userEmail) {
        setIsAuthenticated(true);
        setEmail(userEmail);
      }
    }
  }, []);

  // Check for URL parameters to pre-fill the form
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlEmail = urlParams.get('email');
      const urlName = urlParams.get('name');
      const subscribe = urlParams.get('subscribe');
      
      if (urlEmail && isAuthenticated) {
        setEmail(decodeURIComponent(urlEmail));
      }
      if (urlName && isAuthenticated) {
        setName(decodeURIComponent(urlName));
      }
      
      // If subscribe=true is in URL, show a message
      if (subscribe === 'true' && isAuthenticated) {
        setMessage('Complete your newsletter subscription below:');
      }
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!isAuthenticated) {
      setMessage('Please login to subscribe to our newsletter');
      return;
    }
    
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
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setMessage(data.message);
        setEmail('');
        setName('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Mail className="h-6 w-6" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-2">Stay Updated</h3>
        <p className="text-blue-100 text-center mb-4 text-sm">
          Get educational insights delivered to your inbox
        </p>

        {!isAuthenticated ? (
          <div className="text-center space-y-3">
            <p className="text-blue-100 text-sm mb-3">Please login to subscribe to our newsletter</p>
            <button
              onClick={handleLoginRedirect}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Please Login to Subscribe
            </button>
          </div>
        ) : isSubscribed ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-green-100 text-sm">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </>
              )}
            </button>
            {message && (
              <p className="text-red-200 text-sm text-center">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl mb-3">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Newsletter</h3>
          <p className="text-gray-600 text-sm">Stay updated with latest insights</p>
        </div>

        {!isAuthenticated ? (
          <div className="text-center space-y-3">
            <p className="text-gray-600 text-sm mb-3">Please login to subscribe to our newsletter</p>
            <button
              onClick={handleLoginRedirect}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm"
            >
              <LogIn className="h-3 w-3 mr-2" />
              Please Login to Subscribe
            </button>
          </div>
        ) : isSubscribed ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-green-600 text-sm">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Mail className="h-3 w-3 mr-2" />
                  Subscribe
                </>
              )}
            </button>
            {message && (
              <p className="text-red-600 text-xs text-center">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${className}`}>
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

        {!isAuthenticated ? (
          <div className="text-center space-y-4 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <LogIn className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-white text-lg mb-4">Please login to subscribe to our newsletter</p>
              <p className="text-blue-100 text-sm mb-4">
                Get exclusive access to educational insights, career tips, and study abroad opportunities.
              </p>
            </div>
            <button
              onClick={handleLoginRedirect}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Please Login to Subscribe
            </button>
          </div>
        ) : isSubscribed ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 animate-bounce">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">Thank You!</h4>
            <p className="text-green-100">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105"
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe Now
                </>
              )}
            </button>
            {message && (
              <p className="text-red-200 text-center">{message}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}