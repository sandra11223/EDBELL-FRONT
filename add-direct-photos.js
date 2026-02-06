// Script to add photos directly to the gallery with real image files
const fs = require('fs');
const path = require('path');

const addDirectPhotos = async () => {
  try {
    console.log('📸 Adding photos directly to the gallery...');
    
    // Create some sample image files (SVG format for demonstration)
    const sampleImages = [
      {
        filename: 'graduation-ceremony-2024.svg',
        title: 'Graduation Ceremony 2024',
        description: 'Annual graduation ceremony where students receive their degrees in a memorable celebration with family and faculty.',
        category: 'graduation',
        location: 'Main Campus Auditorium',
        eventDate: '2024-02-01',
        tags: ['graduation', 'ceremony', 'degrees', 'celebration'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1e40af"/>
          <rect x="50" y="50" width="700" height="500" fill="#3b82f6" rx="20"/>
          <circle cx="400" cy="200" r="80" fill="#fbbf24"/>
          <rect x="320" y="280" width="160" height="100" fill="#059669" rx="10"/>
          <text x="400" y="420" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">GRADUATION 2024</text>
          <text x="400" y="450" text-anchor="middle" fill="#e5e7eb" font-family="Arial" font-size="16">Excellence in Education</text>
        </svg>`
      },
      {
        filename: 'modern-campus-library.svg',
        title: 'Modern Campus Library',
        description: 'State-of-the-art library facility with digital resources, quiet study areas, and collaborative learning spaces.',
        category: 'campus',
        location: 'Central Library Building',
        eventDate: '2024-01-28',
        tags: ['library', 'study', 'books', 'learning'],
        featured: false,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#065f46"/>
          <rect x="100" y="100" width="600" height="400" fill="#10b981" rx="15"/>
          <rect x="150" y="150" width="100" height="120" fill="#fbbf24" rx="5"/>
          <rect x="270" y="150" width="100" height="120" fill="#fbbf24" rx="5"/>
          <rect x="390" y="150" width="100" height="120" fill="#fbbf24" rx="5"/>
          <rect x="510" y="150" width="100" height="120" fill="#fbbf24" rx="5"/>
          <text x="400" y="350" text-anchor="middle" fill="white" font-family="Arial" font-size="28" font-weight="bold">LIBRARY</text>
          <text x="400" y="380" text-anchor="middle" fill="#d1fae5" font-family="Arial" font-size="16">Knowledge Center</text>
        </svg>`
      },
      {
        filename: 'student-workshop.svg',
        title: 'Skills Development Workshop',
        description: 'Interactive workshop session helping students develop essential professional skills for their career advancement.',
        category: 'activities',
        location: 'Conference Hall A',
        eventDate: '2024-01-25',
        tags: ['workshop', 'skills', 'professional', 'development'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#7c2d12"/>
          <rect x="80" y="80" width="640" height="440" fill="#ea580c" rx="20"/>
          <circle cx="250" cy="250" r="60" fill="#fbbf24"/>
          <circle cx="400" cy="250" r="60" fill="#fbbf24"/>
          <circle cx="550" cy="250" r="60" fill="#fbbf24"/>
          <rect x="200" y="350" width="400" height="80" fill="#dc2626" rx="10"/>
          <text x="400" y="390" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">WORKSHOP</text>
          <text x="400" y="480" text-anchor="middle" fill="#fed7aa" font-family="Arial" font-size="16">Skills Development</text>
        </svg>`
      },
      {
        filename: 'awards-ceremony.svg',
        title: 'Excellence Awards 2024',
        description: 'Annual awards ceremony recognizing outstanding academic achievements and exceptional student performance.',
        category: 'achievements',
        location: 'Main Auditorium',
        eventDate: '2024-01-30',
        tags: ['awards', 'excellence', 'achievement', 'recognition'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#581c87"/>
          <rect x="60" y="60" width="680" height="480" fill="#a855f7" rx="25"/>
          <polygon points="400,150 420,190 460,190 430,220 440,260 400,240 360,260 370,220 340,190 380,190" fill="#fbbf24"/>
          <rect x="300" y="300" width="200" height="60" fill="#dc2626" rx="8"/>
          <text x="400" y="340" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">EXCELLENCE</text>
          <text x="400" y="420" text-anchor="middle" fill="#e9d5ff" font-family="Arial" font-size="18">Awards 2024</text>
        </svg>`
      },
      {
        filename: 'cultural-festival.svg',
        title: 'Annual Cultural Festival',
        description: 'Vibrant cultural celebration showcasing diverse talents, performances, and creative expressions of our student community.',
        category: 'events',
        location: 'Main Campus Ground',
        eventDate: '2024-01-20',
        tags: ['cultural', 'festival', 'performance', 'celebration'],
        featured: false,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#be185d"/>
          <rect x="70" y="70" width="660" height="460" fill="#ec4899" rx="20"/>
          <circle cx="300" cy="200" r="40" fill="#fbbf24"/>
          <circle cx="400" cy="180" r="45" fill="#10b981"/>
          <circle cx="500" cy="200" r="40" fill="#3b82f6"/>
          <rect x="250" y="300" width="300" height="80" fill="#dc2626" rx="15"/>
          <text x="400" y="340" text-anchor="middle" fill="white" font-family="Arial" font-size="22" font-weight="bold">CULTURAL</text>
          <text x="400" y="365" text-anchor="middle" fill="white" font-family="Arial" font-size="22" font-weight="bold">FESTIVAL</text>
          <text x="400" y="450" text-anchor="middle" fill="#fce7f3" font-family="Arial" font-size="16">Celebrating Diversity</text>
        </svg>`
      },
      {
        filename: 'computer-lab.svg',
        title: 'Advanced Computer Laboratory',
        description: 'Modern computer lab equipped with latest technology, high-speed internet, and software for programming and development.',
        category: 'campus',
        location: 'IT Block - Room 201',
        eventDate: '2024-01-22',
        tags: ['computer', 'lab', 'technology', 'programming'],
        featured: false,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1f2937"/>
          <rect x="90" y="90" width="620" height="420" fill="#374151" rx="15"/>
          <rect x="150" y="150" width="120" height="80" fill="#6b7280" rx="5"/>
          <rect x="290" y="150" width="120" height="80" fill="#6b7280" rx="5"/>
          <rect x="430" y="150" width="120" height="80" fill="#6b7280" rx="5"/>
          <rect x="570" y="150" width="120" height="80" fill="#6b7280" rx="5"/>
          <rect x="200" y="300" width="400" height="100" fill="#1f2937" rx="10"/>
          <text x="400" y="340" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="24" font-weight="bold">COMPUTER LAB</text>
          <text x="400" y="370" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">Advanced Technology</text>
        </svg>`
      }
    ];

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'gallery');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    console.log(`📁 Creating ${sampleImages.length} image files...`);

    // Create image files and add to database
    for (let i = 0; i < sampleImages.length; i++) {
      const imageData = sampleImages[i];
      
      try {
        // Write SVG file to uploads directory
        const filePath = path.join(uploadsDir, imageData.filename);
        fs.writeFileSync(filePath, imageData.svg);
        console.log(`✅ Created file: ${imageData.filename}`);

        // Add to database via API
        const formData = new FormData();
        
        // Create a blob from the SVG content
        const blob = new Blob([imageData.svg], { type: 'image/svg+xml' });
        const file = new File([blob], imageData.filename, { type: 'image/svg+xml' });
        
        formData.append('image', file);
        formData.append('title', imageData.title);
        formData.append('description', imageData.description);
        formData.append('category', imageData.category);
        formData.append('location', imageData.location);
        formData.append('eventDate', imageData.eventDate);
        formData.append('tags', imageData.tags.join(','));
        formData.append('featured', imageData.featured.toString());
        formData.append('published', imageData.published.toString());
        formData.append('uploadedBy', 'Direct Upload');

        // Upload to gallery API
        const uploadResponse = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          body: formData
        });
        
        const result = await uploadResponse.json();
        
        if (result.success) {
          console.log(`✅ Added to database: ${imageData.title}`);
        } else {
          console.log(`❌ Database error for ${imageData.title}: ${result.error}`);
        }
        
        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error) {
        console.log(`❌ Error processing ${imageData.title}:`, error.message);
      }
    }
    
    console.log('\n🎉 Direct photo upload completed!');
    
    // Verify the results
    console.log('\n📊 Verifying gallery status...');
    const verifyResponse = await fetch('http://localhost:3000/api/gallery');
    const verifyData = await verifyResponse.json();
    
    if (verifyData.success) {
      console.log(`✅ Total Photos in Database: ${verifyData.images.length}`);
      console.log(`📄 Published Photos: ${verifyData.images.filter(img => img.published).length}`);
      console.log(`⭐ Featured Photos: ${verifyData.images.filter(img => img.featured).length}`);
      
      // Show files in uploads directory
      const files = fs.readdirSync(uploadsDir);
      console.log(`📁 Files in uploads directory: ${files.length}`);
      
      console.log('\n🌐 Gallery is ready at: http://localhost:3000/gallery');
    } else {
      console.log('❌ Error verifying gallery:', verifyData.error);
    }
    
  } catch (error) {
    console.error('❌ Error in direct photo upload:', error.message);
  }
};

// Run the direct photo upload
addDirectPhotos();