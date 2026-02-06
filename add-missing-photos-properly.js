const fs = require('fs');
const path = require('path');

// Add missing photos using proper file upload method
async function addMissingPhotos() {
  try {
    console.log('📸 ADDING MISSING PHOTOS PROPERLY...\n');

    // Get current database images
    const response = await fetch('http://localhost:3000/api/gallery?limit=100');
    const data = await response.json();
    
    if (!data.success) {
      console.log('❌ Failed to fetch gallery data');
      return;
    }

    const existingUrls = data.images.map(img => img.imageUrl);
    console.log(`💾 Current database has ${data.images.length} images`);

    // Define missing photos with their metadata
    const missingPhotos = [
      {
        filename: 'awards-ceremony.svg',
        title: 'Awards Ceremony',
        description: 'Recognition ceremony honoring outstanding academic performance and extracurricular achievements.',
        category: 'achievements',
        location: 'Conference Hall',
        tags: ['awards', 'recognition', 'excellence', 'achievement']
      },
      {
        filename: 'computer-lab.svg',
        title: 'Computer Laboratory',
        description: 'Well-equipped computer laboratory providing hands-on experience with latest technology and software.',
        category: 'campus',
        location: 'IT Building',
        tags: ['computer', 'lab', 'technology', 'education']
      },
      {
        filename: 'cultural-festival.svg',
        title: 'Cultural Festival',
        description: 'Annual cultural celebration bringing together students from diverse backgrounds to showcase their talents.',
        category: 'events',
        location: 'Cultural Center',
        tags: ['culture', 'festival', 'diversity', 'talent']
      },
      {
        filename: 'graduation-ceremony-2024.svg',
        title: 'Graduation Day 2024',
        description: 'Special graduation day celebration with families and faculty celebrating student achievements.',
        category: 'graduation',
        location: 'Graduation Hall',
        tags: ['graduation', 'celebration', 'family', '2024']
      },
      {
        filename: 'modern-campus-library.svg',
        title: 'Library Complex',
        description: 'Contemporary library complex offering extensive academic resources and collaborative study spaces.',
        category: 'campus',
        location: 'Academic Block',
        tags: ['library', 'complex', 'academic', 'study']
      },
      {
        filename: 'student-workshop.svg',
        title: 'Student Workshop',
        description: 'Interactive workshop session providing hands-on learning experience and skill development opportunities.',
        category: 'activities',
        location: 'Workshop Hall',
        tags: ['workshop', 'students', 'interactive', 'learning']
      }
    ];

    // Filter out photos that already exist
    const photosToAdd = missingPhotos.filter(photo => {
      const imageUrl = `/uploads/gallery/${photo.filename}`;
      return !existingUrls.includes(imageUrl);
    });

    console.log(`🔍 Found ${photosToAdd.length} photos to add:`);
    photosToAdd.forEach((photo, index) => {
      console.log(`   ${index + 1}. ${photo.title}`);
    });

    if (photosToAdd.length === 0) {
      console.log('\n✅ All photos are already in the database!');
      return;
    }

    console.log(`\n🔄 Adding ${photosToAdd.length} missing photos using FormData...`);
    let addedCount = 0;

    for (const photo of photosToAdd) {
      try {
        const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
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
        const blob = new Blob([fileBuffer], { type: 'image/svg+xml' });
        const file = new File([blob], photo.filename, { type: 'image/svg+xml' });
        
        formData.append('image', file);
        formData.append('title', photo.title);
        formData.append('description', photo.description);
        formData.append('category', photo.category);
        formData.append('location', photo.location);
        formData.append('eventDate', new Date().toISOString().split('T')[0]);
        formData.append('tags', photo.tags.join(','));
        formData.append('featured', Math.random() > 0.7 ? 'true' : 'false');
        formData.append('published', 'true');
        formData.append('uploadedBy', 'System');

        const uploadResponse = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          body: formData
        });

        const result = await uploadResponse.json();

        if (result.success) {
          console.log(`   ✅ Added: ${photo.title}`);
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
      
      console.log(`\n📁 Updated Category Distribution:`);
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });

      // Featured count
      const featuredCount = finalData.images.filter(img => img.featured).length;
      console.log(`\n⭐ Featured Images: ${featuredCount}`);
    }

    console.log('\n🎉 Missing photos processing complete!');
    console.log('🌐 Visit http://localhost:3000/gallery to see all images');
    console.log('👨‍💼 Visit http://localhost:3000/admin (Gallery Management) to manage them');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

addMissingPhotos();