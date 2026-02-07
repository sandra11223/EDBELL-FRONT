import { Metadata } from 'next';
import Link from 'next/link';
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
  ArrowLeft,
  TrendingUp,
  Building,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delhi University - Online University Programs | EDBELL EDUSOLUTIONS',
  description: 'Delhi University (DU), officially known as the University of Delhi, is one of India\'s premier central universities, established in 1922. It is accredited with an A++ grade by NAAC and currently has over 77 colleges, 16 faculties, and more than 162,000 students enrolled.',
  keywords: 'delhi university, online university, distance education, UGC approved, NAAC',
  openGraph: {
    title: 'Delhi University - Online University Programs',
    description: 'Delhi University (DU), officially known as the University of Delhi, is one of India\'s premier central universities, established in 1922. It is accredited with an A++ grade by NAAC and currently has over 77 colleges, 16 faculties, and more than 162,000 students enrolled.',
    type: 'article',
    url: 'https://edbelledusolutions.com/universities/delhi-university',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi University - Online University Programs',
    description: 'Delhi University (DU), officially known as the University of Delhi, is one of India\'s premier central universities, established in 1922. It is accredited with an A++ grade by NAAC and currently has over 77 colleges, 16 faculties, and more than 162,000 students enrolled.',
  },
  alternates: {
    canonical: 'https://edbelledusolutions.com/universities/delhi-university',
  },
};

export default function UniversityPage() {
  const university = {
    name: "Delhi University",
    description: "One of India's premier central universities, established in 1922. NAAC A++ accredited with 77 colleges and 162,000+ students.",
    accreditation: "NAAC A++",
    established: "1922",
    location: "New Delhi, India",
    website: "https://www.du.ac.in"
  };

  return (
    <div className="min-h-screen">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/universities" className="flex items-center text-blue-200 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Universities
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{university.name}</h1>
              <p className="text-lg text-blue-100 mb-6">{university.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="text-center bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                  <Calendar className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Established</div>
                  <div className="font-semibold text-sm">{university.established}</div>
                </div>
                <div className="text-center bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                  <Award className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Accreditation</div>
                  <div className="font-semibold text-sm">{university.accreditation}</div>
                </div>
                <div className="text-center bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                  <MapPin className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Location</div>
                  <div className="font-semibold text-sm">New Delhi</div>
                </div>
                <div className="text-center bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                  <Star className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs text-blue-200">Rating</div>
                  <div className="font-semibold text-sm">4.5/5</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919876543210" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Apply Now
                </a>
                <a href="mailto:info@edbelledusolutions.com?subject=University Information Request" className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Info
                </a>
              </div>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">University Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Established:</span>
                  <span className="font-semibold">{university.established}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Accreditation:</span>
                  <span className="font-semibold">{university.accreditation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Location:</span>
                  <span className="font-semibold">{university.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Website:</span>
                  <a href={university.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm text-cyan-300 hover:text-cyan-200 transition-colors">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-blue-600" />
                  About the University
                </h3>
                <p className="text-gray-700 leading-relaxed">{university.description}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Why Choose This University?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">UGC Approved</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Quality Education</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Online Learning</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Student Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm">Established:</span>
                    <span className="font-semibold text-blue-900">{university.established}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm">Accreditation:</span>
                    <span className="font-semibold text-blue-900">{university.accreditation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Location:</span>
                    <span className="font-semibold text-blue-900 text-sm">{university.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <a href={university.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group">
                    <Globe className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors">Visit Website</span>
                  </a>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Contact for details</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Contact for details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join This University?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Take the next step in your educational journey with quality online programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919876543210" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Apply Now
            </a>
            <a href="mailto:info@edbelledusolutions.com?subject=University Information Request" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get More Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}