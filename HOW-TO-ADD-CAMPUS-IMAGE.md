# How to Add Campus Image to Home Page

## Quick Guide

Follow these simple steps to add your EDBELL campus/university photo to the home page:

### Step 1: Prepare Your Image

1. **Choose your best campus photo** - Select a high-quality image of your campus, facilities, or university building
2. **Recommended size**: 1200x800 pixels or similar aspect ratio (3:2)
3. **Format**: JPG or PNG
4. **File size**: Keep under 500KB for fast loading

### Step 2: Rename Your Image

Rename your image file to: **`campus-modern.jpg`**

### Step 3: Upload to Public Folder

1. Open your project folder: `edbell-website`
2. Navigate to the `public` folder
3. Copy your renamed image (`campus-modern.jpg`) into the `public` folder
4. The file path should be: `edbell-website/public/campus-modern.jpg`

### Step 4: Verify

1. Save the file
2. Refresh your website
3. Scroll down to the "Why Choose Edbell" section
4. You should see your campus image displayed on the right side

## Image Location on Website

The campus image appears in the **"Why Choose Edbell"** section on the home page, on the right side next to the feature list.

## Troubleshooting

**Image not showing?**
- Check the filename is exactly: `campus-modern.jpg` (lowercase, no spaces)
- Verify the image is in the `public` folder (not in any subfolder)
- Clear your browser cache and refresh
- Check the image file size (should be under 2MB)

**Image looks stretched or cropped?**
- Use an image with 3:2 aspect ratio (e.g., 1200x800, 1500x1000)
- The image will automatically fill the container

## Current Image Path

```
edbell-website/public/campus-modern.jpg
```

## Alternative: Use a Different Filename

If you want to use a different filename:

1. Upload your image to the `public` folder with any name (e.g., `my-campus.jpg`)
2. Open `edbell-website/src/app/page.tsx`
3. Find line with: `src="/campus-modern.jpg"`
4. Change it to: `src="/my-campus.jpg"` (use your filename)
5. Save and refresh

---

**Need Help?** The image will show a placeholder icon if the file is not found, so you can always add it later!
