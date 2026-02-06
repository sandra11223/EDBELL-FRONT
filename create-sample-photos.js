// Script to create more sample photos with different designs
const fs = require('fs');
const path = require('path');

const createSamplePhotos = async () => {
  try {
    console.log('🎨 Creating additional sample photos...');
    
    const additionalPhotos = [
      {
        filename: 'science-laboratory.svg',
        title: 'Science Laboratory',
        description: 'Well-equipped science lab with modern instruments for physics, chemistry, and biology experiments.',
        category: 'campus',
        location: 'Science Block',
        eventDate: '2024-02-02',
        tags: ['science', 'laboratory', 'experiments', 'research'],
        featured: false,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0f172a"/>
          <rect x="50" y="50" width="700" height="500" fill="#1e293b" rx="20"/>
          <circle cx="200" cy="200" r="30" fill="#22d3ee"/>
          <circle cx="300" cy="180" r="25" fill="#a78bfa"/>
          <circle cx="400" cy="220" r="35" fill="#34d399"/>
          <rect x="500" y="150" width="80" height="100" fill="#f59e0b" rx="10"/>
          <rect x="600" y="170" width="60" height="80" fill="#ef4444" rx="8"/>
          <text x="400" y="380" text-anchor="middle" fill="white" font-family="Arial" font-size="28" font-weight="bold">SCIENCE LAB</text>
          <text x="400" y="410" text-anchor="middle" fill="#94a3b8" font-family="Arial" font-size="16">Research & Discovery</text>
        </svg>`
      },
      {
        filename: 'student-seminar.svg',
        title: 'Student Research Seminar',
        description: 'Students presenting their research findings and innovative projects to faculty and peers.',
        category: 'activities',
        location: 'Seminar Hall',
        eventDate: '2024-02-03',
        tags: ['seminar', 'research', 'presentation', 'students'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#164e63"/>
          <rect x="60" y="60" width="680" height="480" fill="#0891b2" rx="25"/>
          <rect x="150" y="150" width="500" height="200" fill="#f0f9ff" rx="15"/>
          <circle cx="400" cy="250" r="40" fill="#0369a1"/>
          <rect x="200" y="380" width="400" height="60" fill="#075985" rx="10"/>
          <text x="400" y="410" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">RESEARCH SEMINAR</text>
          <text x="400" y="435" text-anchor="middle" fill="#bae6fd" font-family="Arial" font-size="14">Innovation & Discovery</text>
        </svg>`
      },
      {
        filename: 'sports-tournament.svg',
        title: 'Inter-College Sports Tournament',
        description: 'Annual sports competition featuring various games and athletic events with participation from multiple colleges.',
        category: 'events',
        location: 'Sports Complex',
        eventDate: '2024-02-04',
        tags: ['sports', 'tournament', 'competition', 'athletics'],
        featured: false,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#365314"/>
          <rect x="70" y="70" width="660" height="460" fill="#65a30d" rx="20"/>
          <circle cx="300" cy="200" r="50" fill="#fbbf24"/>
          <circle cx="500" cy="200" r="50" fill="#fbbf24"/>
          <rect x="350" y="300" width="100" height="80" fill="#dc2626" rx="10"/>
          <polygon points="400,320 410,340 430,340 415,355 420,375 400,365 380,375 385,355 370,340 390,340" fill="#fbbf24"/>
          <text x="400" y="450" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">SPORTS MEET</text>
          <text x="400" y="480" text-anchor="middle" fill="#d9f99d" font-family="Arial" font-size="16">Excellence in Athletics</text>
        </svg>`
      },
      {
        filename: 'alumni-meet.svg',
        title: 'Alumni Reunion 2024',
        description: 'Annual gathering of alumni sharing experiences, networking, and celebrating their journey with the institution.',
        category: 'events',
        location: 'Alumni Hall',
        eventDate: '2024-02-05',
        tags: ['alumni', 'reunion', 'networking', 'celebration'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#7c2d12"/>
          <rect x="80" y="80" width="640" height="440" fill="#ea580c" rx="25"/>
          <circle cx="250" cy="220" r="35" fill="#fbbf24"/>
          <circle cx="400" cy="200" r="40" fill="#fbbf24"/>
          <circle cx="550" cy="220" r="35" fill="#fbbf24"/>
          <rect x="300" y="320" width="200" height="80" fill="#7c2d12" rx="15"/>
          <text x="400" y="355" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">ALUMNI</text>
          <text x="400" y="380" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">REUNION</text>
          <text x="400" y="470" text-anchor="middle" fill="#fed7aa" font-family="Arial" font-size="16">Celebrating Success Stories</text>
        </svg>`
      },
      {
        filename: 'innovation-expo.svg',
        title: 'Innovation & Technology Expo',
        description: 'Showcase of innovative projects, technological solutions, and creative ideas developed by students and faculty.',
        category: 'achievements',
        location: 'Exhibition Hall',
        eventDate: '2024-02-06',
        tags: ['innovation', 'technology', 'expo', 'projects'],
        featured: true,
        published: true,
        svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1e1b4b"/>
          <rect x="50" y="50" width="700" height="500" fill="#3730a3" rx="30"/>
          <rect x="150" y="150" width="120" height="100" fill="#6366f1" rx="10"/>
          <rect x="290" y="130" width="120" height="120" fill="#8b5cf6" rx="10"/>
          <rect x="430" y="150" width="120" height="100" fill="#a855f7" rx="10"/>
          <rect x="570" y="140" width="120" height="110" fill="#c084fc" rx="10"/>
          <text x="400" y="350" text-anchor="middle" fill="white" font-family="Arial" font-size="26" font-weight="bold">INNOVATION EXPO</text>
          <text x="400" y="380" text-anchor="middle" fill="#c7d2fe" font-family="Arial" font-size="16">Technology & Creativity</text>
        </svg>`
      }
    ];

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'gallery');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    console.log(`🖼️ Creating ${additionalPhotos.length} additional photos...`);

    // Create image files and add to database
    for (let i = 0; i < additionalPhotos.length; i++) {
      const imageData = additionalPhotos[i];
      
      try {
        // Write SVG file to uploads directory
        const filePath = path.join(uploadsDir, imageData.filename);
        fs.writeFileSync(filePath, imageData.svg);
        console.log(`✅ Created: ${imageData.filename}`);

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
          console.log(`✅ Database: ${imageData.title}`);
        } else {
          console.log(`❌ DB Error: ${imageData.title} - ${result.error}`);
        }
        
        // Small delay
        await new Promise(resolve => setTimeout(resolve, 150));
        
      } catch (error) {
        console.log(`❌ Error: ${imageData.title} - ${error.message}`);
      }
    }
    
    console.log('\n🎉 Additional photos created successfully!');
    
    // Final verification
    const verifyResponse = await fetch('http://localhost:3000/api/gallery');
    const verifyData = await verifyResponse.json();
    
    if (verifyData.success) {
      console.log(`\n📊 FINAL GALLERY STATUS:`);
      console.log(`📸 Total Photos: ${verifyData.images.length}`);
      console.log(`📄 Published: ${verifyData.images.filter(img => img.published).length}`);
      console.log(`⭐ Featured: ${verifyData.images.filter(img => img.featured).length}`);
      
      // Category breakdown
      const categories = {};
      verifyData.images.forEach(img => {
        categories[img.category] = (categories[img.category] || 0) + 1;
      });
      
      console.log('\n📂 By Category:');
      Object.entries(categories).forEach(([category, count]) => {
        const emoji = {
          'events': '🎉',
          'campus': '🏫', 
          'graduation': '🎓',
          'activities': '🎯',
          'achievements': '🏆'
        }[category] || '📷';
        console.log(`${emoji} ${category}: ${count}`);
      });
      
      // Check files in directory
      const files = fs.readdirSync(uploadsDir);
      console.log(`\n📁 Files in uploads: ${files.length}`);
      
      console.log('\n🌐 Gallery ready: http://localhost:3000/gallery');
    }
    
  } catch (error) {
    console.error('❌ Error creating sample photos:', error.message);
  }
};

// Run the photo creation
createSamplePhotos();