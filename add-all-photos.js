const fs = require('fs');
const path = require('path');

// Add all photos from file system to database
async function addAllPhotos() {
  try {
    console.log('📸 Adding All Photos to Database...\n');

    // First, check current database status
    console.log('1. Checking current database status...');
    const currentResponse = await fetch('http://localhost:3000/api/gallery');
    const currentData = await currentResponse.json();
    
    if (currentData.success) {
      console.log(`✅ Current database: ${currentData.images.length} images`);
      const existingUrls = currentData.images.map(img => img.imageUrl);
      console.log('   Existing images:', existingUrls.slice(0, 3).join(', '), '...\n');
    }

    // Check file system
    console.log('2. Scanning file system...');
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    const files = fs.readdirSync(galleryDir);
    console.log(`✅ Found ${files.length} files in gallery directory\n`);

    // Define photo data for each file
    const photoData = [
      {
        filename: 'advanced-computer-laboratory-1770181312472-378400200.svg',
        title: 'Advanced Computer Laboratory',
        description: 'State-of-the-art computer laboratory with modern equipment and high-speed internet connectivity for practical learning.',
        category: 'campus',
        location: 'Computer Science Building',
        tags: ['computer', 'laboratory', 'technology', 'learning']
      },
      {
        filename: 'annual-cultural-festival-1770180684254-854249361.svg',
        title: 'Annual Cultural Festival',
        description: 'Vibrant cultural festival celebrating diversity and talent with performances, exhibitions, and cultural activities.',
        category: 'events',
        location: 'Main Campus Ground',
        tags: ['festival', 'culture', 'celebration', 'students']
      },
      {
        filename: 'annual-cultural-festival-1770181312193-944021106.svg',
        title: 'Cultural Festival Highlights',
        description: 'Memorable moments from our annual cultural festival showcasing student creativity and cultural diversity.',
        category: 'events',
        location: 'Main Auditorium',
        tags: ['festival', 'culture', 'performance', 'arts']
      },
      {
        filename: 'annual-graduation-ceremony-2024-1770180683297-821475973.svg',
        title: 'Annual Graduation Ceremony 2024',
        description: 'Proud graduation ceremony celebrating the achievements of our graduating class of 2024.',
        category: 'graduation',
        location: 'Main Auditorium',
        tags: ['graduation', '2024', 'ceremony', 'achievement']
      },
      {
        filename: 'awards-ceremony.svg',
        title: 'Awards Ceremony',
        description: 'Recognition ceremony honoring outstanding academic performance and extracurricular achievements.',
        category: 'achievements',
        location: 'Conference Hall',
        tags: ['awards', 'recognition', 'excellence', 'achievement']
      },
      {
        filename: 'campus-green-initiative-1770181051918-782531287.svg',
        title: 'Campus Green Initiative',
        description: 'Environmental sustainability project promoting green practices and eco-friendly campus development.',
        category: 'activities',
        location: 'Campus Gardens',
        tags: ['environment', 'green', 'sustainability', 'initiative']
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
        filename: 'computer-science-laboratory-1770181049884-950282418.svg',
        title: 'Computer Science Laboratory',
        description: 'Specialized computer science laboratory for programming, software development, and research activities.',
        category: 'campus',
        location: 'CS Department',
        tags: ['computer science', 'programming', 'research', 'lab']
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
        filename: 'digital-marketing-workshop-1770181050862-600760046.svg',
        title: 'Digital Marketing Workshop',
        description: 'Professional workshop on digital marketing strategies, social media, and online business development.',
        category: 'activities',
        location: 'Business Center',
        tags: ['digital marketing', 'workshop', 'business', 'skills']
      },
      {
        filename: 'excellence-awards-2024-1770180684092-561883874.svg',
        title: 'Excellence Awards 2024',
        description: 'Annual excellence awards ceremony recognizing outstanding academic and extracurricular achievements.',
        category: 'achievements',
        location: 'Main Hall',
        tags: ['excellence', 'awards', '2024', 'recognition']
      },
      {
        filename: 'excellence-awards-2024-1770181311912-375048472.svg',
        title: 'Excellence Awards Ceremony 2024',
        description: 'Prestigious awards ceremony celebrating academic excellence and outstanding student achievements.',
        category: 'achievements',
        location: 'Grand Auditorium',
        tags: ['excellence', 'awards', 'ceremony', '2024']
      },
      {
        filename: 'graduation-ceremony-2024-1770181311026-42235364.svg',
        title: 'Graduation Ceremony 2024',
        description: 'Memorable graduation ceremony marking the successful completion of academic programs by our students.',
        category: 'graduation',
        location: 'Main Campus',
        tags: ['graduation', '2024', 'ceremony', 'success']
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
        filename: 'industry-expert-guest-lecture-1770181051386-667687156.svg',
        title: 'Industry Expert Guest Lecture',
        description: 'Inspiring guest lecture by industry experts sharing real-world insights and career guidance.',
        category: 'activities',
        location: 'Lecture Hall',
        tags: ['guest lecture', 'industry', 'expert', 'career']
      },
      {
        filename: 'library-study-area-1770181051108-197635905.svg',
        title: 'Library Study Area',
        description: 'Quiet and comfortable study area in the library providing ideal environment for focused learning.',
        category: 'campus',
        location: 'Central Library',
        tags: ['library', 'study', 'learning', 'quiet']
      },
      {
        filename: 'modern-campus-library-1770180683730-507197026.svg',
        title: 'Modern Campus Library',
        description: 'State-of-the-art library facility with extensive collection of books, journals, and digital resources.',
        category: 'campus',
        location: 'Central Campus',
        tags: ['library', 'modern', 'books', 'resources']
      },
      {
        filename: 'modern-campus-library-1770181311319-425356449.svg',
        title: 'Campus Library Facilities',
        description: 'Modern library with comprehensive academic resources, study spaces, and digital learning tools.',
        category: 'campus',
        location: 'Library Building',
        tags: ['library', 'facilities', 'academic', 'digital']
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
        filename: 'modern-classroom-facilities-1770181052176-994874110.svg',
        title: 'Modern Classroom Facilities',
        description: 'Contemporary classroom equipped with smart boards, projectors, and modern teaching technology.',
        category: 'campus',
        location: 'Academic Building',
        tags: ['classroom', 'modern', 'technology', 'teaching']
      },
      {
        filename: 'research-conference-presentation-1770181050384-289308895.svg',
        title: 'Research Conference Presentation',
        description: 'Academic research conference featuring student and faculty presentations on innovative research projects.',
        category: 'activities',
        location: 'Conference Center',
        tags: ['research', 'conference', 'presentation', 'academic']
      },
      {
        filename: 'skills-development-workshop-1770180683924-770180836.svg',
        title: 'Skills Development Workshop',
        description: 'Professional skills development workshop focusing on career readiness and industry-relevant skills.',
        category: 'activities',
        location: 'Training Center',
        tags: ['skills', 'development', 'workshop', 'career']
      },
      {
        filename: 'skills-development-workshop-1770181311610-567363139.svg',
        title: 'Professional Skills Workshop',
        description: 'Comprehensive workshop on professional skills, communication, and workplace readiness.',
        category: 'activities',
        location: 'Professional Development Center',
        tags: ['professional', 'skills', 'communication', 'workplace']
      },
      {
        filename: 'sports-day-championship-1770181050637-443499750.svg',
        title: 'Sports Day Championship',
        description: 'Annual sports day featuring various athletic competitions and team sports championships.',
        category: 'events',
        location: 'Sports Complex',
        tags: ['sports', 'championship', 'athletics', 'competition']
      },
      {
        filename: 'student-achievement-awards-1770181051638-131851125.svg',
        title: 'Student Achievement Awards',
        description: 'Recognition ceremony celebrating exceptional student achievements in academics and extracurricular activities.',
        category: 'achievements',
        location: 'Awards Hall',
        tags: ['student', 'achievement', 'awards', 'recognition']
      },
      {
        filename: 'student-orientation-program-2024-1770181050147-973784459.svg',
        title: 'Student Orientation Program 2024',
        description: 'Welcome orientation program for new students introducing campus life, facilities, and academic programs.',
        category: 'events',
        location: 'Orientation Hall',
        tags: ['orientation', 'students', 'welcome', '2024']
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

    console.log('3. Adding missing photos to database...');
    let addedCount = 0;
    let skippedCount = 0;

    for (const photo of photoData) {
      try {
        // Check if file exists
        const filePath = path.join(galleryDir, photo.filename);
        if (!fs.existsSync(filePath)) {
          console.log(`   ⚠️  File not found: ${photo.filename}`);
          continue;
        }

        // Check if already in database
        const imageUrl = `/uploads/gallery/${photo.filename}`;
        const existingImage = currentData.images.find(img => img.imageUrl === imageUrl);
        
        if (existingImage) {
          console.log(`   ⏭️  Already exists: ${photo.title}`);
          skippedCount++;
          continue;
        }

        // Create FormData for upload
        const formData = new FormData();
        
        // Read file and create blob
        const fileBuffer = fs.readFileSync(filePath);
        const blob = new Blob([fileBuffer], { type: 'image/svg+xml' });
        const file = new File([blob], photo.filename, { type: 'image/svg+xml' });
        
        formData.append('image', file);
        formData.append('title', photo.title);
        formData.append('description', photo.description);
        formData.append('category', photo.category);
        formData.append('location', photo.location || '');
        formData.append('eventDate', new Date().toISOString().split('T')[0]);
        formData.append('tags', photo.tags.join(','));
        formData.append('featured', Math.random() > 0.7 ? 'true' : 'false'); // 30% chance of being featured
        formData.append('published', 'true');
        formData.append('uploadedBy', 'System');

        // Upload to API
        const uploadResponse = await fetch('http://localhost:3000/api/gallery', {
          method: 'POST',
          body: formData
        });

        const uploadResult = await uploadResponse.json();

        if (uploadResult.success) {
          console.log(`   ✅ Added: ${photo.title}`);
          addedCount++;
        } else {
          console.log(`   ❌ Failed: ${photo.title} - ${uploadResult.error}`);
        }

        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.log(`   ❌ Error adding ${photo.title}: ${error.message}`);
      }
    }

    console.log('\n4. Final status check...');
    const finalResponse = await fetch('http://localhost:3000/api/gallery');
    const finalData = await finalResponse.json();
    
    if (finalData.success) {
      console.log(`✅ Final database: ${finalData.images.length} images`);
      console.log(`📊 Summary:`);
      console.log(`   - Added: ${addedCount} new images`);
      console.log(`   - Skipped: ${skippedCount} existing images`);
      console.log(`   - Total files: ${files.length}`);
      console.log(`   - Total in DB: ${finalData.images.length}`);
      
      // Show category distribution
      const categoryCount = {};
      finalData.images.forEach(img => {
        categoryCount[img.category] = (categoryCount[img.category] || 0) + 1;
      });
      
      console.log('\n📁 Category Distribution:');
      Object.entries(categoryCount).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} images`);
      });
    }

    console.log('\n🎉 All photos have been processed!');
    console.log('🚀 Visit http://localhost:3000/gallery to see all images');
    console.log('👨‍💼 Visit http://localhost:3000/admin (Gallery Management) to manage them');

  } catch (error) {
    console.error('❌ Error adding photos:', error.message);
  }
}

addAllPhotos();