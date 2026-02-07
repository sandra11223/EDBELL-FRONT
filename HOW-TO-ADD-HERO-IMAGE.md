# How to Add Your Professional Image to Hero Section

## Quick Steps (Takes 30 seconds!)

1. **Save the Image from Chat:**
   - Right-click on the professional photo in the chat
   - Select "Save image as..."
   - Save it anywhere on your computer (like Desktop)

2. **Move to Project:**
   - Open File Explorer
   - Navigate to: `C:\Users\LENOVO\Desktop\Edbell\edbell-website\public\`
   - Copy/paste or drag the image you saved into this folder
   - Rename it to: `hero-professional.jpg`
   - Replace the existing placeholder file when prompted

3. **View the Result:**
   - Open your browser to: http://localhost:3000
   - Press `Ctrl + Shift + R` (hard refresh to clear cache)
   - Your professional image will now appear in the hero section!

## Why This Manual Step is Needed

AI assistants cannot directly save images from chat to your computer's file system due to security restrictions. This protects your computer from unauthorized file access.

## What's Already Done

✅ The code is already configured in `src/app/page.tsx`
✅ The hero section is ready with animations and effects
✅ The file path `/hero-professional.jpg` is already set up
✅ All you need to do is replace the placeholder with your actual image

## Troubleshooting

**If the image doesn't appear:**
- Make sure the filename is exactly: `hero-professional.jpg` (no spaces, correct extension)
- Make sure it's in the `public` folder, not in a subfolder
- Try a hard refresh: `Ctrl + Shift + R`
- Check browser console for any errors (F12)

**If you need help:**
- The image should be in: `edbell-website/public/hero-professional.jpg`
- The server should be running at: http://localhost:3000
- The image will automatically display once the file is in place
