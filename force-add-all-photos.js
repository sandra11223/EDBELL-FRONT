const fs = require('fs');
const path = require('path');

// Force add all photos using direct API calls
async function forceAddAllPhotos() {
  try {
    console.log('🔄 Force Adding ALL Photos to Database...\n');

    // Get all files from directory
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    const files = fs.readdirSync(galleryDir);
    console.log(`📁 Found ${files.length} files in gallery directory`);

    // Get current database images
    const currentResponse = await fetch('http://localhost:3000/api/gallery?limit=100');
    const currentData = await currentResponse.json();
    const existingUrls = currentData.success ? currentData.images.map(img => img.imageUrl) : [];
    console.log(`💾 Current database has ${existingUrls.length} images\n`);

    // Photo metadata for all files
    const allPhotoData = {
      'advanced-computer-laboratory-1770181312472-378400200.svg': {
        title: 'Advanced Computer Laboratory',
        description: 'State-of-the-art computer laboratory with modern equipment and high-speed internet connectivity for practical learning.',
        category: 'campus',
        location: 'Computer Science Building',
        tags: ['computer', 'laboratory', 'technology', 'learning']
      },
      'annual-cultural-festival-1770180684254-854249361.svg': {
        title: 'Annual Cultural Festival',
        description: 'Vibrant cultural festival celebrating diversity and talent with performances, exhibitions, and cultural activities.',
        category: 'events',
        location: 'Main Campus Ground',
        tags: ['festival', 'culture', 'celebration', 'students']
      },
      'annual-cultural-festival-1770181312193-944021106.svg': {
        title: 'Cultural Festival Highlights',
        description: 'Memorable moments from our annual cultural festival showcasing student creativity and cultural diversity.',
        category: 'events',
        location: 'Main Auditorium',
        tags: ['festival', 'culture', 'performance', 'arts']
      },
      'annual-graduation-ceremony-2024-1770180683297-821475973.svg': {
        title: 'Annual Graduation Ceremony 2024',
        description: 'Proud graduation ceremony celebrating the achievements of our graduating class of 2024.',
        category: 'graduation',
        location: 'Main Auditorium',
        tags: ['graduation', '2024', 'ceremony', 'achievement']
      },
      'awards-ceremony.svg': {
        title: 'Awards Ceremony',
        description: 'Recognition ceremony honoring outstanding academic performance and extracurricular achievements.',
        category: 'achievements',
        location: 'Conference Hall',
        tags: ['awards', 'recognition', 'excellence', 'achievement']
      },
      'campus-green-initiative-1770181051918-782531287.svg': {
        title: 'Campus Green Initiative',
        description: 'Environmental sustainability project promoting green practices and eco-friendly campus development.',
        category: 'activities',
        location: 'Campus Gardens',
        tags: ['environment', 'green', 'sustainability', 'initiative']
      },
      'computer-lab.svg': {
        title: 'Computer Laboratory',
        description: 'Well-equipped computer laboratory providing hands-on experience with latest technology and software.',
        category: 'campus',
        location: 'IT Building',
        tags: ['computer', 'lab', 'technology', 'education']
      },
      'computer-science-laboratory-1770181049884-950282418.svg': {
        title: 'Computer Science Laboratory',
        description: 'Specialized computer science laboratory for programming, software development, and research activities.',
        category: 'campus',
        location: 'CS Department',
        tags: ['computer science', 'programming', 'research', 'lab']
      },
      'cultural-festival.svg': {
        title: 'Cultural Festival',
        description: 'Annual cultural celebration bringing together students from diverse backgrounds to showcase their talents.',
        category: 'events',
        location: 'Cultural Center',
        tags: ['culture', 'festival', 'diversity', 'talent']
      },
      'digital-marketing-workshop-1770181050862-600760046.svg': {
        title: 'Digital Marketing Workshop',
        description: 'Professional workshop on digital marketing strategies, social media, and online business development.',
        category: 'activities',
        location: 'Business Center',
        tags: ['digital marketing', 'workshop', 'business', 'skills']
      },
      'excellence-awards-2024-1770180684092-561883874.svg': {
        title: 'Excellence Awards 2024',
        description: 'Annual excellence awards ceremony recognizing outstanding academic and extracurricular achievements.',
        category: 'achievements',
        location: 'Main Hall',
        tags: ['excellence', 'awards', '2024', 'recognition']
      },
      'excellence-awards-2024-1770181311912-375048472.svg': {
        title: 'Excellence Awards Ceremony 2024',
        description: 'Prestigious awards ceremony celebrating academic excellence and outstanding student achievements.',
        category: 'achievements',
        location: 'Grand Auditorium',
        tags: ['excellence', 'awards', 'ceremony', '2024']
      },
      'graduation-ceremony-2024-1770181311026-42235364.svg': {
        title: 'Graduation Ceremony 2024',
        description: 'Memorable graduation ceremony marking the successful completion of academic programs by our students.',
        category: 'graduation',
        location: 'Main Campus',
        tags: ['graduation', '2024', 'ceremony', 'success']
      },
      'graduation-ceremony-2024.svg': {
        title: 'Graduation Day 2024',
        description: 'Special graduation day celebration with families and faculty celebrating student achievements.',
        category: 'graduation',
        location: 'Graduation Hall',
        tags: ['graduation', 'celebration', 'family', '2024']
      },
      'industry-expert-guest-lecture-1770181051386-667687156.svg': {
        title: 'Industry Expert Guest Lecture',
        description: 'Inspiring guest lecture by industry experts sharing real-world insights and career guidance.',
        category: 'activities',
        location: 'Lecture Hall',
        tags: ['guest lecture', 'industry', 'expert', 'career']
      },
      'library-study-area-1770181051108-197635905.svg': {
        title: 'Library Study Area',
        description: 'Quiet and comfortable study area in the library providing ideal environment for focused learning.',
        category: 'campus',
        location: 'Central Library',
        tags: ['library', 'study', 'learning', 'quiet']
      },
      'modern-campus-library-1770180683730-507197026.svg': {
        title: 'Modern Campus Library',
        description: 'State-of-the-art library facility with extensive collection of books, journals, and digital resources.',
        category: 'campus',
        location: 'Central Campus',
        tags: ['library', 'modern', 'books', 'resources']
      },
      'modern-campus-library-1770181311319-425356449.svg': {
        title: 'Campus Library Facilities',
        description: 'Modern library with comprehensive academic resources, study spaces, and digital learning tools.',
        category: 'campus',
        location: 'Library Building',
        tags: ['library', 'facilities', 'academic', 'digital']
      },
      'modern-campus-library.svg': {
        title: 'Library Complex',
        description: 'Contemporary library complex offering extensive academic resources and collaborative study spaces.',
        category: 'campus',
        location: 'Academic Block',
        tags: ['library', 'complex', 'academic', 'study']
      },
      'modern-classroom-facilities-1770181052176-994874110.svg': {
        title: 'Modern Classroom Facilities',
        description: 'Contemporary classroom equipped with smart boards, projectors, and modern teaching technology.',
        category: 'campus',
        location: 'Academic Building',
        tags: ['classroom', 'modern', 'technology', 'teaching']
      },
      'research-conference-presentation-1770181050384-289308895.svg': {
        title: 'Research Conference Presentation',
        description: 'Academic research conference featuring student and faculty presentations on innovative research projects.',
        category: 'activities',
        location: 'Conference Center',
        tags: ['research', 'conference', 'presentation', 'academic']
      },
      'skills-development-workshop-1770180683924-770180836.svg': {
        title: 'Skills Development Workshop',
        description: 'Professional skills development workshop focusing on career readiness and industry-relevant skills.',
        category: 'activities',
        location: 'Training Center',
        tags: ['skills', 'development', 'workshop', 'career']
      },
      'skills-development-workshop-1770181311610-567363139.svg': {
        title: 'Professional Skills Workshop',
        description: 'Comprehensive workshop on professional skills, communication, and workplace readiness.',
        category: 'activities',
        location: 'Professional Development Center',
        tags: ['professional', 'skills', 'communication', 'workplace']
      },
      'sports-day-championship-1770181050637-443499750.svg': {
        title: 'Sports Day Championship',
        description: 'Annual sports day featuring various athletic competitions and team sports championships.',
        category: 'events',
        location: 'Sports Complex',
        tags: ['sports', 'championship', 'athletics', 'competition']
      },
      'student-achievement-awards-1770181051638-131851125.svg': {
        title: 'Student Achievement Awards',
        description: 'Recognition ceremony celebrating exceptional student achievements in academics and extracurricular activities.',
        category: 'achievements',
        location: 'Awards Hall',
        tags: ['student', 'achievement', 'awards', 'recognition']
      },
      'student-orientation-program-2024-1770181050147-973784459.svg': {
        title: 'Student Orientation Program 2024',
        description: 'Welcome orientation program for new students introducing campus life, facilities, and academic programs.',
        category: 'events',
        location: 'Orientation Hall',
        tags: ['orientation', 'students', 'welcome', '2024']
      },
      'student-workshop.svg': {
        title: 'Student Workshop',
        description: 'Interactive workshop session providing hands-on learning experience and skill development opportunities.',
        category: 'activities',
        location: 'Workshop Hall',
        tags: ['workshop', 'students', 'interactive', 'learning']
      }
    };

    console.log('🔄 Processing all files...');
    let addedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const filename of files) {
      try {
        const imageUrl = `/uploads/gallery/${filename}`;
        
        // Check if already exists
        if (existingUrls.includes(imageUrl)) {
          console.log(`   ⏭️  Already exists: ${filename}`);
          skippedCount++;
          continue;
        }

        // Get photo data or use default
        const photoData = allPhotoData[filename] || {
          title: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: `Educational photo showcasing campus life and activities at EdBell EduSolutions.`,
          category: 'campus',
          location: 'Campus',
          tags: ['campus', 'education', 'students']
        };

        // Create the gallery entry using direct POST
        const payload = {
          title: photoData.title,
          description: photoData.description,
          category: photoData.category,
          imageUrl: imageUrl,
          imageAlt: photoData.title,
          location: photoData.location,
          eventDate: new Date().toISOString(),
          uploadedBy: 'System',
          tags: photoData.tags,
          featured: Math.random() > 0.7, // 30% chance of being featured
          published: true
        };

        const response = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.success) {
          console.log(`   ✅ Added: ${photoData.title}`);
          addedCount++;
        } else {
          console.log(`   ❌ Failed: ${photoData.title} - ${result.error}`);
          errorCount++;
        }

        // Small delay
        await new Promise(resolve => setTimeout(resolve, 50));

      } catch (error) {
        console.log(`   ❌ Error processing ${filename}: ${error.message}`);
        errorCount++;
      }
    }

    // Final check
    console.log('\n📊 Final Status Check...');
    const finalResponse = await fetch('http://localhost:3000/api/gallery?limit=100');
    const finalData = await finalResponse.json();
    
    if (finalData.success) {
      console.log(`✅ Final database: ${finalData.images.length} images`);
      console.log(`📈 Summary:`);
      console.log(`   - Files in directory: ${files.length}`);
      console.log(`   - Added this run: ${addedCount}`);
      console.log(`   - Already existed: ${skippedCount}`);
      console.log(`   - Errors: ${errorCount}`);
      console.log(`   - Total in database: ${finalData.images.length}`);
      
      // Category breakdown
      const categoryCount = {};
      finalData.images.forEach(img => {
        categoryCount[img.category] = (categoryCount[img.category] || 0) + 1;
      });
      
      console.log('\n📁 Category Distribution:');
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });

      // Featured images
      const featuredCount = finalData.images.filter(img => img.featured).length;
      console.log(`\n⭐ Featured Images: ${featuredCount}`);
    }

    console.log('\n🎉 Process Complete!');
    console.log('🌐 Visit http://localhost:3000/gallery to see all images');
    console.log('👨‍💼 Visit http://localhost:3000/admin (Gallery Management) to manage them');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

forceAddAllPhotos();