import Link from 'next/link';
import { 
  ArrowLeft, 
  BookOpen
} from 'lucide-react';
import BlogArticleClient from './BlogArticleClient';

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

// Sample blog data with full content
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Online Education in India",
    slug: "future-online-education-india",
    excerpt: "Discover how online education is transforming the learning landscape in India and what it means for students.",
    content: `
      <h2>Introduction</h2>
      <p>Online education in India has witnessed unprecedented growth, especially in the post-pandemic era. With technological advancements and changing student preferences, the educational landscape is rapidly evolving.</p>
      
      <h2>Current State of Online Education</h2>
      <p>India's online education market is projected to reach $10.4 billion by 2025, growing at a CAGR of 20%. This growth is driven by several factors:</p>
      <ul>
        <li>Increased internet penetration across rural and urban areas</li>
        <li>Affordable smartphone technology</li>
        <li>Government initiatives promoting digital education</li>
        <li>Growing acceptance of online degrees by employers</li>
      </ul>
      
      <h2>Key Advantages of Online Learning</h2>
      <p>Online education offers numerous benefits that traditional classroom learning cannot match:</p>
      
      <h3>Flexibility and Convenience</h3>
      <p>Students can learn at their own pace, from anywhere, at any time. This is particularly beneficial for working professionals who want to upskill or pursue higher education without leaving their jobs.</p>
      
      <h3>Cost-Effectiveness</h3>
      <p>Online programs typically cost 30-50% less than traditional on-campus programs, making quality education accessible to a broader audience.</p>
      
      <h3>Personalized Learning</h3>
      <p>AI-powered learning platforms can adapt to individual learning styles and provide personalized content recommendations.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Despite its advantages, online education faces several challenges:</p>
      
      <h3>Digital Divide</h3>
      <p>Not all students have access to reliable internet or devices. Government initiatives like Digital India and private sector partnerships are working to bridge this gap.</p>
      
      <h3>Quality Assurance</h3>
      <p>Ensuring the quality of online programs is crucial. Accreditation bodies like UGC-DEB are establishing standards for online education.</p>
      
      <h2>Future Trends</h2>
      <p>The future of online education in India looks promising with emerging trends:</p>
      <ul>
        <li>Virtual Reality (VR) and Augmented Reality (AR) integration</li>
        <li>Blockchain-based credential verification</li>
        <li>AI-powered tutoring systems</li>
        <li>Micro-learning and bite-sized content</li>
        <li>Gamification of learning experiences</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Online education is not just a temporary solution but a permanent transformation in how we learn. As technology continues to evolve and infrastructure improves, online education will become even more accessible, effective, and integral to India's educational ecosystem.</p>
      
      <p>For students considering online education, now is the perfect time to explore the numerous opportunities available. With proper research and choosing accredited institutions, online education can provide the same quality and recognition as traditional education.</p>
    `,
    author: "Dr. Arif Wafy Varambatta",
    category: "Education Trends",
    tags: ["online learning", "education", "india", "future", "technology"],
    publishDate: "2024-02-01",
    readTime: "8 min read",
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Top 10 Career Opportunities After Graduation",
    slug: "top-career-opportunities-graduation",
    excerpt: "Explore the most promising career paths available for fresh graduates in today's competitive job market.",
    content: `
      <h2>Introduction</h2>
      <p>Graduating from college is an exciting milestone, but it also brings the challenge of choosing the right career path. With the job market constantly evolving, it's important to understand which career opportunities offer the best prospects for growth and success.</p>
      
      <h2>1. Technology and Software Development</h2>
      <p>The tech industry continues to be one of the fastest-growing sectors, offering numerous opportunities for graduates:</p>
      <ul>
        <li><strong>Software Developer:</strong> Average salary ₹4-8 LPA for freshers</li>
        <li><strong>Data Scientist:</strong> High demand with salaries ranging ₹6-12 LPA</li>
        <li><strong>Cybersecurity Specialist:</strong> Growing field with excellent job security</li>
        <li><strong>AI/ML Engineer:</strong> Cutting-edge field with high growth potential</li>
      </ul>
      
      <h2>2. Digital Marketing</h2>
      <p>With businesses going digital, digital marketing has become essential:</p>
      <ul>
        <li>Social Media Marketing</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Content Marketing</li>
        <li>Pay-Per-Click (PPC) Advertising</li>
      </ul>
      
      <h2>3. Healthcare and Biotechnology</h2>
      <p>The healthcare sector offers stable and rewarding career opportunities:</p>
      <ul>
        <li>Healthcare Administration</li>
        <li>Biotechnology Research</li>
        <li>Medical Device Sales</li>
        <li>Health Informatics</li>
      </ul>
      
      <h2>4. Financial Services</h2>
      <p>The financial sector provides diverse career paths:</p>
      <ul>
        <li>Investment Banking</li>
        <li>Financial Planning</li>
        <li>Risk Management</li>
        <li>Fintech</li>
      </ul>
      
      <h2>5. Consulting</h2>
      <p>Management consulting offers exposure to various industries and excellent learning opportunities.</p>
      
      <h2>6. E-commerce and Retail</h2>
      <p>The booming e-commerce sector offers roles in operations, marketing, and business development.</p>
      
      <h2>7. Education and Training</h2>
      <p>With the growth of online education, there are new opportunities in educational technology and content development.</p>
      
      <h2>8. Renewable Energy</h2>
      <p>The green energy sector is expanding rapidly, offering careers in solar, wind, and other renewable technologies.</p>
      
      <h2>9. Content Creation and Media</h2>
      <p>Digital content creation, video production, and social media management are growing fields.</p>
      
      <h2>10. Entrepreneurship</h2>
      <p>Starting your own business or joining a startup can provide valuable experience and potential for high returns.</p>
      
      <h2>Tips for Career Success</h2>
      <ul>
        <li>Continuously update your skills</li>
        <li>Build a strong professional network</li>
        <li>Gain practical experience through internships</li>
        <li>Develop both technical and soft skills</li>
        <li>Stay informed about industry trends</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The key to a successful career is choosing a field that aligns with your interests, skills, and market demand. Research thoroughly, gain relevant experience, and be prepared to adapt as industries evolve.</p>
    `,
    author: "Career Counselor",
    category: "Career Guidance",
    tags: ["career", "graduation", "jobs", "opportunities", "success"],
    publishDate: "2024-01-28",
    readTime: "10 min read",
    featured: false,
    views: 980,
    likes: 67
  },
  {
    id: 3,
    title: "Study Abroad: Complete Guide for Indian Students",
    slug: "study-abroad-guide-indian-students",
    excerpt: "Everything you need to know about studying abroad, from application process to visa requirements.",
    content: `
      <h2>Introduction</h2>
      <p>Studying abroad is a dream for many Indian students, offering exposure to world-class education, diverse cultures, and global career opportunities. This comprehensive guide will help you navigate the entire process.</p>
      
      <h2>Why Study Abroad?</h2>
      <ul>
        <li>Access to world-renowned universities and programs</li>
        <li>Exposure to different teaching methodologies</li>
        <li>Cultural diversity and global perspective</li>
        <li>Better career prospects and higher earning potential</li>
        <li>Personal growth and independence</li>
        <li>Networking opportunities with international peers</li>
      </ul>
      
      <h2>Popular Study Destinations</h2>
      
      <h3>United States</h3>
      <p>Home to many top-ranked universities, the US offers diverse programs and research opportunities.</p>
      <ul>
        <li><strong>Popular Programs:</strong> Engineering, Business, Computer Science</li>
        <li><strong>Average Cost:</strong> $30,000-$60,000 per year</li>
        <li><strong>Scholarships:</strong> Merit-based and need-based options available</li>
      </ul>
      
      <h3>United Kingdom</h3>
      <p>Known for its prestigious universities and shorter program durations.</p>
      <ul>
        <li><strong>Popular Programs:</strong> Business, Law, Medicine</li>
        <li><strong>Average Cost:</strong> £15,000-£35,000 per year</li>
        <li><strong>Work Opportunities:</strong> Post-study work visa available</li>
      </ul>
      
      <h3>Canada</h3>
      <p>Offers high-quality education with relatively affordable costs and immigration opportunities.</p>
      <ul>
        <li><strong>Popular Programs:</strong> Engineering, Healthcare, Business</li>
        <li><strong>Average Cost:</strong> CAD 20,000-40,000 per year</li>
        <li><strong>Immigration:</strong> Pathway to permanent residency</li>
      </ul>
      
      <h3>Australia</h3>
      <p>Known for its research-intensive universities and multicultural environment.</p>
      <ul>
        <li><strong>Popular Programs:</strong> Engineering, Business, Medicine</li>
        <li><strong>Average Cost:</strong> AUD 25,000-45,000 per year</li>
        <li><strong>Work Rights:</strong> Part-time work allowed during studies</li>
      </ul>
      
      <h2>Application Process</h2>
      
      <h3>Step 1: Research and Shortlist</h3>
      <ul>
        <li>Research universities and programs</li>
        <li>Check admission requirements</li>
        <li>Consider location, cost, and career prospects</li>
        <li>Shortlist 8-10 universities</li>
      </ul>
      
      <h3>Step 2: Prepare for Standardized Tests</h3>
      <ul>
        <li><strong>IELTS/TOEFL:</strong> English proficiency tests</li>
        <li><strong>GRE/GMAT:</strong> Graduate admission tests</li>
        <li><strong>SAT/ACT:</strong> For undergraduate programs</li>
      </ul>
      
      <h3>Step 3: Prepare Application Documents</h3>
      <ul>
        <li>Academic transcripts</li>
        <li>Statement of Purpose (SOP)</li>
        <li>Letters of Recommendation</li>
        <li>Resume/CV</li>
        <li>Portfolio (if required)</li>
      </ul>
      
      <h3>Step 4: Apply for Scholarships</h3>
      <ul>
        <li>University-specific scholarships</li>
        <li>Government scholarships (Fulbright, Chevening, etc.)</li>
        <li>Private foundation scholarships</li>
        <li>Merit-based awards</li>
      </ul>
      
      <h2>Visa Process</h2>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Passport</li>
        <li>University acceptance letter</li>
        <li>Financial proof</li>
        <li>Academic documents</li>
        <li>English proficiency scores</li>
        <li>Medical examination (if required)</li>
      </ul>
      
      <h3>Financial Requirements</h3>
      <p>Most countries require proof of funds covering:</p>
      <ul>
        <li>Tuition fees for the first year</li>
        <li>Living expenses (varies by country)</li>
        <li>Additional buffer amount</li>
      </ul>
      
      <h2>Cost Planning</h2>
      
      <h3>Tuition Fees</h3>
      <p>Varies significantly by country, university, and program. Research thoroughly and budget accordingly.</p>
      
      <h3>Living Expenses</h3>
      <ul>
        <li>Accommodation: $500-$1500 per month</li>
        <li>Food: $300-$600 per month</li>
        <li>Transportation: $50-$200 per month</li>
        <li>Miscellaneous: $200-$400 per month</li>
      </ul>
      
      <h3>Funding Options</h3>
      <ul>
        <li>Education loans from Indian banks</li>
        <li>Scholarships and grants</li>
        <li>Part-time work (where permitted)</li>
        <li>Assistantships and fellowships</li>
      </ul>
      
      <h2>Pre-Departure Preparation</h2>
      <ul>
        <li>Book accommodation</li>
        <li>Purchase health insurance</li>
        <li>Open international bank account</li>
        <li>Pack appropriately for the climate</li>
        <li>Research local culture and customs</li>
        <li>Connect with other Indian students</li>
      </ul>
      
      <h2>Common Challenges and Solutions</h2>
      
      <h3>Cultural Adjustment</h3>
      <p>Join international student groups and participate in cultural activities to ease the transition.</p>
      
      <h3>Academic Differences</h3>
      <p>Familiarize yourself with the education system and don't hesitate to seek help from professors and peers.</p>
      
      <h3>Financial Management</h3>
      <p>Create a budget and stick to it. Look for part-time work opportunities if permitted.</p>
      
      <h2>Career Opportunities</h2>
      <p>Many countries offer post-study work visas, allowing graduates to gain international work experience. This can lead to:</p>
      <ul>
        <li>Higher starting salaries</li>
        <li>Global career opportunities</li>
        <li>Pathway to permanent residency</li>
        <li>Enhanced professional network</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Studying abroad is a significant investment in your future. With proper planning, research, and preparation, it can be one of the most rewarding experiences of your life. Start early, stay organized, and don't hesitate to seek guidance from education consultants or alumni.</p>
      
      <p>Remember, the journey may be challenging, but the personal and professional growth you'll experience makes it worthwhile. Good luck with your study abroad journey!</p>
    `,
    author: "Study Abroad Expert",
    category: "Study Abroad",
    tags: ["study abroad", "international", "visa", "application", "scholarships"],
    publishDate: "2024-01-25",
    readTime: "15 min read",
    featured: false,
    views: 1450,
    likes: 112
  }
];

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const resolvedParams = await params;
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <BookOpen className="h-10 w-10 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/blog" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return <BlogArticleClient post={post} blogPosts={blogPosts} />;
}