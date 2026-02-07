/**
 * Hero Image Upload Helper Script
 * 
 * INSTRUCTIONS:
 * 1. Save the professional photo from chat to your Desktop as "hero.jpg"
 * 2. Run this script: node add-hero-image.js
 * 3. The image will be copied to the correct location
 */

const fs = require('fs');
const path = require('path');

// Source: Where you saved the image (change this path if needed)
const desktopPath = path.join(require('os').homedir(), 'Desktop', 'hero.jpg');

// Destination: Where it needs to go
const publicPath = path.join(__dirname, 'public', 'hero-professional.jpg');

console.log('🔍 Looking for image at:', desktopPath);

// Check if source file exists
if (!fs.existsSync(desktopPath)) {
  console.log('\n❌ Image not found!');
  console.log('\n📝 Please follow these steps:');
  console.log('1. Right-click the professional photo in the chat');
  console.log('2. Select "Save image as..."');
  console.log('3. Save it to your Desktop as "hero.jpg"');
  console.log('4. Run this script again: node add-hero-image.js');
  console.log('\n💡 Or save it with a different name and update the path in this script.');
  process.exit(1);
}

// Copy the file
try {
  fs.copyFileSync(desktopPath, publicPath);
  console.log('\n✅ SUCCESS! Hero image has been added!');
  console.log('📍 Location:', publicPath);
  console.log('\n🌐 Next steps:');
  console.log('1. Open: http://localhost:3000');
  console.log('2. Press Ctrl + Shift + R to refresh');
  console.log('3. Your professional image is now live! 🎉');
} catch (error) {
  console.error('\n❌ Error copying file:', error.message);
  console.log('\n💡 Make sure the file exists and you have permission to copy it.');
}
