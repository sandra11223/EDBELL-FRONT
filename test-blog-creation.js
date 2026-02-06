// Test script to create a sample blog post
const testBlogCreation = async () => {
  try {
    const sampleBlog = {
      title: "Welcome to EDBELL Blog",
      excerpt: "We're excited to launch our new blog where we'll share educational insights, career guidance, and the latest trends in online education.",
      content: `Welcome to the EDBELL EDUSOLUTIONS blog! We're thrilled to launch this platform where we'll be sharing valuable insights about online education, career guidance, and educational opportunities.

## What You Can Expect

Our blog will cover a wide range of topics including:

- **Education Trends**: Latest developments in online and distance learning
- **Career Guidance**: Tips for choosing the right career path and educational programs
- **Study Abroad**: Information about international education opportunities
- **Scholarships**: Updates on available scholarships and funding options
- **Skills Development**: Essential skills for today's job market

## Our Mission

At EDBELL EDUSOLUTIONS, we believe that quality education should be accessible to everyone. Through this blog, we aim to provide you with the information and guidance you need to make informed decisions about your educational journey.

Stay tuned for regular updates, and don't hesitate to reach out if you have any questions or topics you'd like us to cover!`,
      author: "EDBELL Team",
      category: "Education Trends",
      tags: ["welcome", "online education", "career guidance", "blog launch"],
      readTime: "3 min read",
      featured: true,
      published: true,
      publishDate: new Date().toISOString()
    };

    const response = await fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sampleBlog)
    });

    const result = await response.json();
    console.log('Blog creation result:', result);
    
    if (result.success) {
      console.log('✅ Sample blog post created successfully!');
      console.log('📝 Title:', result.blog.title);
      console.log('🔗 Slug:', result.blog.slug);
      console.log('📅 Published:', result.blog.published ? 'Yes' : 'No');
    } else {
      console.log('❌ Error creating blog post:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

// Run the test
testBlogCreation();