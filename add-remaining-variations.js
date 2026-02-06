const fs = require('fs');
const path = require('path');

// Add any remaining variations of the requested photos
async function addRemainingVariations() {
  try {
    console.log('🔍 CHECKING FOR REMAINING PHOTO VARIATIONS...\n');

    // Get current database images
    const response = await fetch('http://localhost:3000/api/gallery?limit=100');
    const data = await response.json();
    
    if (!data.success) {
      console.log('❌ Failed to fetch gallery data');
      return;
    }

    const existingUrls = data.images.map(img => img.imageUrl);
    console.log(`💾 Current database has ${data.images.length} images`);

    // Get all files from directory
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    const files = fs.readdirSync(galleryDir);
    console.log(`📁 Found ${files.length} files in gallery directory`);

    // Find files that match the requested photo types but aren't in database yet
    const photoVariations = [
      {
        patterns: ['annual-cultural-festival', 'cultural-festival'],
        title: 'Annual Cultural Festival',
        description: 'Vibrant annual cultural festival celebrating diversity, talent, and creativity with performances, exhibitions, and cultural activities.',
        category: 'events',
        location: 'Main Campus Ground',
        tags: ['festival', 'culture', 'celebration', 'students', 'diversity']
      },
      {
        patterns: ['student-achievement-awards', 'achievement-awards', 'student-awards'],
        title: 'Student Achievement Awards',
        description: 'Recognition ceremony celebrating exceptional student achievements in academics, extracurricular activities, and leadership.',
        category: 'achievements',
        location: 'Awards Hall',
        tags: ['student', 'achievement', 'awards', 'recognition', 'excellence']
      },
      {
        patterns: ['industry-expert-guest-lecture', 'guest-lecture', 'expert-lecture'],
        title: 'Industry Expert Guest Lecture',
        description: 'Inspiring guest lecture by industry experts sharing real-world insights and career guidance.',
        category: 'activities',
        location: 'Lecture Hall',
        tags: ['guest lecture', 'industry', 'expert', 'career', 'professional']
      },
      {
        patterns: ['student-orientation-program', 'orientation-program', 'orientation'],
        title: 'Student Orientation Program',
        description: 'Welcome orientation program for new students introducing campus life, facilities, and academic programs.',
        category: 'events',
        location: 'Orientation Hall',
        tags: ['orientation', 'students', 'welcome', 'campus', 'new students']
      }
    ];

    // Find missing files
    const missingFiles = [];
    
    files.forEach(filename => {
      const imageUrl = `/uploads/gallery/${filename}`;
      
      // Skip if already in database
      if (existingUrls.includes(imageUrl)) {
        return;
      }
      
      // Check if this file matches any of our requested photo patterns
      for (const photoType of photoVariations) {
        const matches = photoType.patterns.some(pattern => 
          filename.toLowerCase().includes(pattern.toLowerCase())
        );
        
        if (matches) {
          missingFiles.push({
            filename,
            ...photoType,
            title: `${photoType.title} - ${filename.split('-')[0].replace(/([A-Z])/g, ' $1').trim()}`
          });
          break;
        }
      }
    });

    console.log(`\n🔍 Found ${missingFiles.length} missing photo variations:`);
    missingFiles.forEach((file, index) => {
      console.log(`   ${index + 1}. ${file.filename} → ${file.title}`);
    });

    if (missingFiles.length === 0) {
      console.log('\n✅ All photo variations are already in the database!');
      return;
    }

    console.log(`\n🔄 Adding ${missingFiles.length} missing photo variations...`);
    let addedCount = 0;

    for (const photo of missingFiles) {
      try {
        const filePath = path.join(galleryDir, photo.filename);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
          console.log(`   ⚠️  File not found: ${photo.filename}`);
          continue;
        }

        // Read file and create FormData
        const fileBuffer = fs.readFileSync(filePath);
        const formData = new FormData();
        
        // Determine MIME type
        let mimeType = 'image/jpeg';
        if (photo.filename.endsWith('.svg')) mimeType = 'image/svg+xml';
        else if (photo.filename.endsWith('.png')) mimeType = 'image/png';
        else if (photo.filename.endsWith('.gif')) mimeType = 'image/gif';
        
        const blob = new Blob([fileBuffer], { type: mimeType });
        const file = new File([blob], photo.filename, { type: mimeType });
        
        formData.append('image', file);
        formData.append('title', photo.title);
        formData.append('description', photo.description);
        formData.append('category', photo.category);
        formData.append('location', photo.location);
        formData.append('eventDate', new Date().toISOString().split('T')[0]);
        formData.append('tags', photo.tags.join(','));
        formData.append('featured', Math.random() > 0.7 ? 'true' : 'false'); // 30% chance featured
        formData.append('published', 'true');
        formData.append('uploadedBy', 'Admin');

        const uploadResponse = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          body: formData
        });

        const result = await uploadResponse.json();

        if (result.success) {
          console.log(`   ✅ Added: ${photo.title}`);
          console.log(`      File: ${photo.filename}`);
          console.log(`      Category: ${photo.category}`);
          addedCount++;
        } else {
          console.log(`   ❌ Failed: ${photo.title} - ${result.error}`);
        }

        // Small delay
        await new Promise(resolve => setTimeout(resolve, 200));

      } catch (error) {
        console.log(`   ❌ Error adding ${photo.title}: ${error.message}`);
      }
    }

    // Final status check
    console.log(`\n📊 Final Status Check...`);
    const finalResponse = await fetch('http://localhost:3000/api/gallery?limit=100');
    const finalData = await finalResponse.json();
    
    if (finalData.success) {
      console.log(`   ✅ Total images now: ${finalData.images.length}`);
      console.log(`   📈 Successfully added: ${addedCount} photos`);
      
      // Category distribution
      const categoryCount = {};
      finalData.images.forEach(img => {
        categoryCount[img.category] = (categoryCount[img.category] || 0) + 1;
      });
      
      console.log(`\n📁 Final Category Distribution:`);
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });

      // Featured count
      const featuredCount = finalData.images.filter(img => img.featured).length;
      console.log(`\n⭐ Featured Images: ${featuredCount}`);

      // Show requested photo types status
      console.log(`\n✅ Requested Photo Types Status:`);
      const requestedTypes = [
        'Annual Cultural Festival',
        'Student Achievement Awards',
        'Industry Expert Guest Lecture',
        'Student Orientation Program'
      ];
      
      requestedTypes.forEach(type => {
        const count = finalData.images.filter(img => 
          img.title.toLowerCase().includes(type.toLowerCase().split(' ')[0]) ||
          img.title.toLowerCase().includes(type.toLowerCase().split(' ')[1]) ||
          img.title.toLowerCase().includes(type.toLowerCase())
        ).length;
        console.log(`   ${type}: ${count} images`);
      });
    }

    console.log('\n🎉 All requested photo variations have been processed!');
    console.log('🌐 Visit http://localhost:3000/gallery to see all images');
    console.log('👨‍💼 Visit http://localhost:3000/admin (Gallery Management) to manage them');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

addRemainingVariations();