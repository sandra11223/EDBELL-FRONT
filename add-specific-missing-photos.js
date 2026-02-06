const fs = require('fs');
const path = require('path');

// Add specific missing photos that user requested
async function addSpecificMissingPhotos() {
  try {
    console.log('🔍 CHECKING FOR SPECIFIC MISSING PHOTOS...\n');

    // Get current database images
    const response = await fetch('http://localhost:3000/api/gallery?limit=100');
    const data = await response.json();
    
    if (!data.success) {
      console.log('❌ Failed to fetch gallery data');
      return;
    }

    console.log(`💾 Current database has ${data.images.length} images`);
    
    // List current images for reference
    console.log('\n📋 Current images in database:');
    data.images.forEach((img, index) => {
      console.log(`   ${index + 1}. ${img.title} (${img.category})`);
    });

    // Check file system for the specific photos user mentioned
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    const files = fs.readdirSync(galleryDir);
    console.log(`\n📁 Found ${files.length} files in gallery directory`);

    // Define the specific photos user wants added
    const requestedPhotos = [
      {
        searchTerms: ['annual-cultural-festival', 'cultural-festival'],
        title: 'Annual Cultural Festival',
        description: 'Vibrant annual cultural festival celebrating diversity, talent, and creativity with performances, exhibitions, and cultural activities from students across different backgrounds.',
        category: 'events',
        location: 'Main Campus Ground',
        tags: ['festival', 'culture', 'celebration', 'students', 'diversity', 'performance']
      },
      {
        searchTerms: ['student-achievement-awards', 'achievement-awards'],
        title: 'Student Achievement Awards',
        description: 'Recognition ceremony celebrating exceptional student achievements in academics, extracurricular activities, leadership, and community service.',
        category: 'achievements',
        location: 'Awards Hall',
        tags: ['student', 'achievement', 'awards', 'recognition', 'excellence', 'ceremony']
      },
      {
        searchTerms: ['industry-expert-guest-lecture', 'guest-lecture'],
        title: 'Industry Expert Guest Lecture',
        description: 'Inspiring guest lecture by industry experts sharing real-world insights, career guidance, and professional development opportunities.',
        category: 'activities',
        location: 'Lecture Hall',
        tags: ['guest lecture', 'industry', 'expert', 'career', 'professional', 'guidance']
      },
      {
        searchTerms: ['student-orientation-program', 'orientation-program'],
        title: 'Student Orientation Program',
        description: 'Welcome orientation program for new students introducing campus life, facilities, academic programs, and student support services.',
        category: 'events',
        location: 'Orientation Hall',
        tags: ['orientation', 'students', 'welcome', 'campus', 'introduction', 'new students']
      }
    ];

    // Find matching files for each requested photo
    const photosToAdd = [];
    
    for (const photo of requestedPhotos) {
      // Find files that match the search terms
      const matchingFiles = files.filter(filename => 
        photo.searchTerms.some(term => filename.toLowerCase().includes(term.toLowerCase()))
      );
      
      if (matchingFiles.length > 0) {
        // Check if any of these files are already in database
        const existingUrls = data.images.map(img => img.imageUrl);
        
        for (const filename of matchingFiles) {
          const imageUrl = `/uploads/gallery/${filename}`;
          if (!existingUrls.includes(imageUrl)) {
            photosToAdd.push({
              filename,
              ...photo
            });
            break; // Only add one file per photo type
          }
        }
      }
    }

    console.log(`\n🔍 Analysis of requested photos:`);
    requestedPhotos.forEach((photo, index) => {
      const matchingFiles = files.filter(filename => 
        photo.searchTerms.some(term => filename.toLowerCase().includes(term.toLowerCase()))
      );
      console.log(`   ${index + 1}. ${photo.title}:`);
      console.log(`      Files found: ${matchingFiles.length}`);
      if (matchingFiles.length > 0) {
        console.log(`      Files: ${matchingFiles.slice(0, 3).join(', ')}`);
      }
    });

    if (photosToAdd.length === 0) {
      console.log('\n✅ All requested photos are already in the database!');
      return;
    }

    console.log(`\n🔄 Adding ${photosToAdd.length} missing photos using Multer upload...`);
    let addedCount = 0;

    for (const photo of photosToAdd) {
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
        
        // Create a proper File object
        const mimeType = photo.filename.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg';
        const blob = new Blob([fileBuffer], { type: mimeType });
        const file = new File([blob], photo.filename, { type: mimeType });
        
        formData.append('image', file);
        formData.append('title', photo.title);
        formData.append('description', photo.description);
        formData.append('category', photo.category);
        formData.append('location', photo.location);
        formData.append('eventDate', new Date().toISOString().split('T')[0]);
        formData.append('tags', photo.tags.join(','));
        formData.append('featured', Math.random() > 0.6 ? 'true' : 'false'); // 40% chance of being featured
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

        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 300));

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
      
      // Show the newly added photos
      if (addedCount > 0) {
        console.log(`\n🆕 Newly added photos:`);
        const recentImages = finalData.images
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, addedCount);
        
        recentImages.forEach((img, index) => {
          console.log(`   ${index + 1}. ${img.title} (${img.category})`);
        });
      }
      
      // Category distribution
      const categoryCount = {};
      finalData.images.forEach(img => {
        categoryCount[img.category] = (categoryCount[img.category] || 0) + 1;
      });
      
      console.log(`\n📁 Updated Category Distribution:`);
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });

      // Featured count
      const featuredCount = finalData.images.filter(img => img.featured).length;
      console.log(`\n⭐ Featured Images: ${featuredCount}`);
    }

    console.log('\n🎉 Specific photos processing complete!');
    console.log('🌐 Visit http://localhost:3000/gallery to see all images');
    console.log('👨‍💼 Visit http://localhost:3000/admin (Gallery Management) to manage them');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

addSpecificMissingPhotos();