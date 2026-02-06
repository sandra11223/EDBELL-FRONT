const fs = require('fs');
const path = require('path');

// Check for missing photos and add them
async function checkMissingPhotos() {
  try {
    console.log('🔍 CHECKING FOR MISSING PHOTOS...\n');

    // Get all files from directory
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    const files = fs.readdirSync(galleryDir);
    console.log(`📁 Found ${files.length} files in gallery directory`);

    // Get current database images
    const response = await fetch('http://localhost:3000/api/gallery?limit=100');
    const data = await response.json();
    
    if (!data.success) {
      console.log('❌ Failed to fetch gallery data');
      return;
    }

    const existingUrls = data.images.map(img => img.imageUrl);
    console.log(`💾 Current database has ${data.images.length} images\n`);

    // Find missing files
    const missingFiles = [];
    files.forEach(filename => {
      const imageUrl = `/uploads/gallery/${filename}`;
      if (!existingUrls.includes(imageUrl)) {
        missingFiles.push(filename);
      }
    });

    console.log(`🔍 Analysis:`);
    console.log(`   - Total files: ${files.length}`);
    console.log(`   - In database: ${data.images.length}`);
    console.log(`   - Missing: ${missingFiles.length}`);

    if (missingFiles.length === 0) {
      console.log('\n✅ All photos are already in the database!');
      return;
    }

    console.log(`\n📋 Missing files:`);
    missingFiles.forEach((file, index) => {
      console.log(`   ${index + 1}. ${file}`);
    });

    // Add missing photos
    console.log(`\n🔄 Adding ${missingFiles.length} missing photos...`);
    
    const photoMetadata = {
      'awards-ceremony.svg': {
        title: 'Awards Ceremony',
        description: 'Recognition ceremony honoring outstanding academic performance and extracurricular achievements.',
        category: 'achievements',
        location: 'Conference Hall',
        tags: ['awards', 'recognition', 'excellence', 'achievement']
      },
      'computer-lab.svg': {
        title: 'Computer Laboratory',
        description: 'Well-equipped computer laboratory providing hands-on experience with latest technology and software.',
        category: 'campus',
        location: 'IT Building',
        tags: ['computer', 'lab', 'technology', 'education']
      },
      'cultural-festival.svg': {
        title: 'Cultural Festival',
        description: 'Annual cultural celebration bringing together students from diverse backgrounds to showcase their talents.',
        category: 'events',
        location: 'Cultural Center',
        tags: ['culture', 'festival', 'diversity', 'talent']
      },
      'graduation-ceremony-2024.svg': {
        title: 'Graduation Day 2024',
        description: 'Special graduation day celebration with families and faculty celebrating student achievements.',
        category: 'graduation',
        location: 'Graduation Hall',
        tags: ['graduation', 'celebration', 'family', '2024']
      },
      'modern-campus-library.svg': {
        title: 'Library Complex',
        description: 'Contemporary library complex offering extensive academic resources and collaborative study spaces.',
        category: 'campus',
        location: 'Academic Block',
        tags: ['library', 'complex', 'academic', 'study']
      },
      'student-workshop.svg': {
        title: 'Student Workshop',
        description: 'Interactive workshop session providing hands-on learning experience and skill development opportunities.',
        category: 'activities',
        location: 'Workshop Hall',
        tags: ['workshop', 'students', 'interactive', 'learning']
      }
    };

    let addedCount = 0;
    
    for (const filename of missingFiles) {
      try {
        // Get metadata or use default
        const metadata = photoMetadata[filename] || {
          title: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: `Educational photo showcasing campus life and activities at EdBell EduSolutions.`,
          category: 'campus',
          location: 'Campus',
          tags: ['campus', 'education', 'students']
        };

        // Create gallery entry
        const payload = {
          title: metadata.title,
          description: metadata.description,
          category: metadata.category,
          imageUrl: `/uploads/gallery/${filename}`,
          imageAlt: metadata.title,
          location: metadata.location,
          eventDate: new Date().toISOString(),
          uploadedBy: 'System',
          tags: metadata.tags,
          featured: Math.random() > 0.7, // 30% chance of being featured
          published: true
        };

        const addResponse = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        const result = await addResponse.json();

        if (result.success) {
          console.log(`   ✅ Added: ${metadata.title}`);
          addedCount++;
        } else {
          console.log(`   ❌ Failed: ${metadata.title} - ${result.error}`);
        }

        // Small delay
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.log(`   ❌ Error adding ${filename}: ${error.message}`);
      }
    }

    // Final check
    console.log(`\n📊 Final Status:`);
    const finalResponse = await fetch('http://localhost:3000/api/gallery?limit=100');
    const finalData = await finalResponse.json();
    
    if (finalData.success) {
      console.log(`   ✅ Total images now: ${finalData.images.length}`);
      console.log(`   📈 Added this run: ${addedCount}`);
      
      // Category distribution
      const categoryCount = {};
      finalData.images.forEach(img => {
        categoryCount[img.category] = (categoryCount[img.category] || 0) + 1;
      });
      
      console.log(`\n📁 Category Distribution:`);
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });
    }

    console.log('\n🎉 Missing photos have been added!');
    console.log('🌐 Visit http://localhost:3000/gallery to see all images');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkMissingPhotos();