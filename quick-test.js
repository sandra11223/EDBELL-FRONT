// Quick test of contact page
const quickTest = async () => {
  try {
    const response = await fetch('http://localhost:3000/contact');
    console.log(`Contact page status: ${response.status}`);
    if (response.ok) {
      console.log('✅ Contact page is working!');
    } else {
      console.log('❌ Contact page still has issues');
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
};

quickTest();