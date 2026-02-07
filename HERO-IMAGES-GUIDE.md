# Hero Images Management Guide 🎨

## ✨ New Feature: Dedicated Hero Images Section

You now have a dedicated section in the admin panel to manage hero images for both Home and About pages - just like Blogs and Gallery!

## 📍 Location

**Admin Dashboard → Hero Images** (3rd item in sidebar)

```
http://localhost:3000/admin → Click "Hero Images"
```

## 🎯 Features

### Home Page Hero Image
- **Current Image Display** - See what's currently shown
- **Upload New Image** - Select and upload from your computer
- **Live Preview** - Preview before uploading
- **Instant Apply** - Replaces `/public/hero-professional.jpg`

### About Page Hero Image
- **Current Image Display** - See what's currently shown
- **Upload New Image** - Select and upload from your computer
- **Live Preview** - Preview before uploading
- **Instant Apply** - Replaces `/public/about-professional.jpg`

## 🚀 How to Use

### Step 1: Access Hero Images Section
1. Go to: http://localhost:3000/admin
2. Login if needed
3. Click **"Hero Images"** in the left sidebar

### Step 2: Upload Home Page Hero
1. Scroll to **"Home Page Hero Image"** section
2. Click **"Choose File"**
3. Select your professional photo
4. Preview the image
5. Click **"Upload Home Hero Image"**
6. Wait for success message ✓

### Step 3: Upload About Page Hero
1. Scroll to **"About Page Hero Image"** section
2. Click **"Choose File"**
3. Select your professional photo
4. Preview the image
5. Click **"Upload About Hero Image"**
6. Wait for success message ✓

### Step 4: View Changes
1. Open the respective page:
   - Home: http://localhost:3000
   - About: http://localhost:3000/about
2. Press **`Ctrl + Shift + R`** (hard refresh)
3. Your new images are live! 🎉

## 📋 Image Specifications

### Recommended Specs
- **Format**: JPG or PNG
- **Size**: At least 800x600 pixels
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Under 2MB for fast loading
- **Content**: Professional photos with good lighting

### Where Images Are Saved
- Home Hero: `/public/hero-professional.jpg`
- About Hero: `/public/about-professional.jpg`

## 🎨 What This Looks Like

The Hero Images section shows:
- **Side-by-side layout** for each page
- **Current image** on the left
- **Upload interface** on the right
- **Color-coded sections**:
  - Home = Blue theme
  - About = Indigo/Purple theme

## ✅ Benefits

1. **Easy Management** - Upload images directly from admin panel
2. **No File Access Needed** - No need to manually replace files
3. **Live Preview** - See images before uploading
4. **Instant Feedback** - Success/error messages
5. **Organized** - Dedicated section like Blogs and Gallery
6. **Professional** - Clean, intuitive interface

## 🔧 Technical Details

### API Endpoints
- Home Hero: `/api/upload-hero`
- About Hero: `/api/upload-about-hero`

### Code Integration
- Home page already uses: `/hero-professional.jpg`
- About page already uses: `/about-professional.jpg`
- Both pages have responsive design and animations

## 💡 Tips

1. **Use high-quality images** for best results
2. **Preview before uploading** to ensure it looks good
3. **Hard refresh** (Ctrl + Shift + R) to see changes immediately
4. **Upload both images** for a consistent professional look
5. **Keep file sizes reasonable** (under 2MB) for fast loading

## 🎉 Ready to Use!

The Hero Images section is now live in your admin dashboard. Just navigate to it and start uploading your professional images!

**Quick Access**: http://localhost:3000/admin → Hero Images
