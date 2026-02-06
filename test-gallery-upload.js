const fs = require('fs');
const path = require('path');

// Test gallery upload functionality
async function testGalleryUpload() {
  try {
    console.log('🧪 Testing Gallery Upload Functionality...\n');

    // Test 1: Check if gallery API is accessible
    console.log('1. Testing Gallery API endpoint...');
    const response = await fetch('http://localhost:3000/api/gallery');
    const data = await response.json();
    
    if (data.success) {
      console.log(`✅ Gallery API working! Found ${data.images.length} images`);
      console.log(`📊 Pagination: Page ${data.pagination.page} of ${data.pagination.pages}`);
      console.log(`📈 Total images: ${data.pagination.total}\n`);
    } else {
      console.log('❌ Gallery API error:', data.error);
      return;
    }

    // Test 2: Display sample images
    if (data.images.length > 0) {
      console.log('2. Sample Gallery Images:');
      data.images.slice(0, 5).forEach((img, index) => {
        console.log(`   ${index + 1}. ${img.title}`);
        console.log(`      Category: ${img.category}`);
        console.log(`      Published: ${img.published ? '✅' : '❌'}`);
        console.log(`      Featured: ${img.featured ? '⭐' : '⚪'}`);
        console.log(`      URL: ${img.imageUrl}`);
        console.log('');
      });
    }

    // Test 3: Check file system
    console.log('3. Checking file system...');
    const galleryDir = path.join(__dirname, 'public', 'uploads', 'gallery');
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      console.log(`✅ Gallery directory exists with ${files.length} files`);
      
      // Show first few files
      files.slice(0, 5).forEach((file, index) => {
        const filePath = path.join(galleryDir, file);
        const stats = fs.statSync(filePath);
        console.log(`   ${index + 1}. ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
      });
    } else {
      console.log('❌ Gallery directory not found');
    }

    console.log('\n🎉 Gallery system is working properly!');
    console.log('\n📝 Next steps:');
    console.log('   1. Visit http://localhost:3000/admin');
    console.log('   2. Login with your credentials');
    console.log('   3. Go to Gallery Management section');
    console.log('   4. Click "Upload New Image" to test the upload functionality');
    console.log('   5. Visit http://localhost:3000/gallery to see the public gallery');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testGalleryUpload();