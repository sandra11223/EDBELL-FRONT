import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  UserCheck, 
  Plane, 
  DollarSign, 
  BookOpen, 
  GraduationCap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Target,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  FileText,
  Briefcase
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: <UserCheck className="h-12 w-12 text-blue-600" />,
      title: "Career Counseling",
      description: "Expert guidance to help you choose the right career path and achieve your professional goals.",
      features: [
        "One-on-one counseling sessions",
        "Career assessment tests",
        "Industry trend analysis",
        "Personalized career roadmap",
        "Resume and interview preparation"
      ],
      benefits: [
        "Make informed career decisions",
        "Identify your strengths and interests",
        "Understand market opportunities",
        "Build confidence for job interviews"
      ],
      pricing: "₹2,000 - ₹5,000",
      duration: "2-4 sessions"
    },
    {
      icon: <Plane className="h-12 w-12 text-cyan-600" />,
      title: "Study Abroad Services",
      description: "Complete assistance for international education opportunities worldwide.",
      features: [
        "University selection guidance",
        "Application process support",
        "Visa assistance and documentation",
        "Scholarship identification",
        "Pre-departure orientation"
      ],
      benefits: [
        "Access to global education",
        "Simplified application process",
        "Higher chances of visa approval",
        "Comprehensive support throughout"
      ],
      pricing: "₹15,000 - ₹50,000",
      duration: "3-6 months"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-indigo-600" />,
      title: "Scholarship Assistance",
      description: "Help securing financial aid and scholarships for your education.",
      features: [
        "Scholarship database access",
        "Application preparation",
        "Document verification",
        "Follow-up and tracking",
        "Alternative funding options"
      ],
      benefits: [
        "Reduce education costs",
        "Access to merit-based funding",
        "Government scheme guidance",
        "Increased approval chances"
      ],
      pricing: "₹3,000 - ₹10,000",
      duration: "1-3 months"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-teal-600" />,
      title: "Test Preparations",
      description: "Comprehensive preparation for various competitive and entrance exams.",
      features: [
        "Structured study materials",
        "Mock tests and practice papers",
        "Expert faculty guidance",
        "Performance analysis",
        "Doubt clearing sessions"
      ],
      benefits: [
        "Improved exam scores",
        "Better time management",
        "Increased confidence",
        "Strategic exam approach"
      ],
      pricing: "₹5,000 - ₹25,000",
      duration: "2-6 months"
    }
  ];

  const additionalServices = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "University Admissions",
      description: "End-to-end support for university admission processes",
      details: [
        "Application form assistance",
        "Document preparation",
        "Entrance exam guidance",
        "Interview preparation"
      ],
      pricing: "₹2,000 - ₹8,000"
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      title: "PSC/UPSC Coaching",
      description: "Specialized coaching for government job examinations",
      details: [
        "Comprehensive syllabus coverage",
        "Current affairs updates",
        "Mock interviews",
        "Answer writing practice"
      ],
      pricing: "₹10,000 - ₹30,000"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Spoken English Classes",
      description: "Improve your communication skills with professional training",
      details: [
        "Grammar and vocabulary building",
        "Pronunciation improvement",
        "Conversation practice",
        "Business English training"
      ],
      pricing: "₹3,000 - ₹12,000"
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Professional Certifications",
      description: "Industry-recognized certification programs",
      details: [
        "Digital marketing certifications",
        "Office administration courses",
        "Hospital management programs",
        "Teacher training courses"
      ],
      pricing: "₹8,000 - ₹25,000"
    },
    {
      icon: <FileText className="h-8 w-8 text-sky-600" />,
      title: "Document Services",
      description: "Professional assistance with educational documentation",
      details: [
        "Transcript verification",
        "Document translation",
        "Attestation services",
        "Educational certificates"
      ],
      pricing: "₹500 - ₹3,000"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Placement Assistance",
      description: "Job placement support and career development",
      details: [
        "Resume building",
        "Interview preparation",
        "Job matching",
        "Skill development"
      ],
      pricing: "₹2,000 - ₹10,000"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free consultation to understand your goals and requirements"
    },
    {
      step: "2",
      title: "Service Planning",
      description: "Customized service plan based on your specific needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Expert execution of services with regular progress updates"
    },
    {
      step: "4",
      title: "Follow-up Support",
      description: "Continued support until you achieve your desired outcomes"
    }
  ];

  const testimonials = [
    {
      name: "Priya Nair",
      role: "MBA Graduate",
      content: "The career counseling service helped me identify my true passion and guided me towards the right career path. Highly recommended!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Engineering Student",
      content: "Thanks to their study abroad services, I'm now pursuing my Master's in Canada. The visa process was smooth and hassle-free.",
      rating: 5
    },
    {
      name: "Anjali Menon",
      role: "B.Com Graduate",
      content: "I secured a scholarship worth ₹2 lakhs with their assistance. Their team knows exactly what scholarship providers are looking for.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is included in career counseling sessions?",
      answer: "Our career counseling includes aptitude tests, personality assessments, industry analysis, career roadmap creation, and ongoing support for career decisions."
    },
    {
      question: "How long does the study abroad process take?",
      answer: "The study abroad process typically takes 3-6 months, depending on the country, university, and program. We provide timeline-specific guidance for each case."
    },
    {
      question: "Do you guarantee scholarship approval?",
      answer: "While we cannot guarantee approval, our expertise significantly increases your chances. We have a 70% success rate in scholarship applications."
    },
    {
      question: "Are your test preparation materials updated?",
      answer: "Yes, all our study materials and mock tests are regularly updated to reflect the latest exam patterns and syllabus changes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500 transform-gpu"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Comprehensive educational and career services designed to support 
            your academic journey and professional growth.
          </p>
        </div>
      </section>

      {/* Main Services */}
      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Expanding our support to cover all aspects of your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{service.pricing}</span>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach ensures you get the best possible outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from students who achieved their goals with our support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey? Contact us for personalized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="h-8 w-8 text-blue-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
              <div className="space-y-2">
                <a href="tel:+919876543210" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  +91 98765 43210
                </a>
                <a href="tel:+918765432109" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  +91 87654 32109
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Mail className="h-8 w-8 text-cyan-600 group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries anytime</p>
              <a href="mailto:info@edbelledusolutions.com" className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors duration-300 break-all">
                info@edbelledusolutions.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Calendar className="h-8 w-8 text-indigo-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Schedule Meeting</h3>
              <p className="text-gray-600 mb-4">Book a consultation session</p>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation with our experts and take the first step 
            towards achieving your educational and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?service=consultation&inquiry=details"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Link>
            <a 
              href="tel:+919876543210"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
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