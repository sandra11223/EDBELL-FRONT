# Quick Guide: Add Hero Image (2 Methods)

## ⚡ METHOD 1: Admin Dashboard (EASIEST - 30 seconds)

1. **Save the image from chat:**
   - Right-click the professional photo → "Save image as..."
   - Save anywhere (Desktop is fine)

2. **Go to Admin:**
   - Open: http://localhost:3000/admin
   - Click "Settings" in left sidebar

3. **Upload:**
   - Click "Choose File"
   - Select your saved image
   - Click "Upload Hero Image"
   - Wait for green success message

4. **View:**
   - Go to: http://localhost:3000
   - Press `Ctrl + Shift + R`
   - Done! ✅

---

## 🔧 METHOD 2: Using Script (Alternative)

1. **Save the image:**
   - Right-click the professional photo → "Save image as..."
   - Save to Desktop as `hero.jpg`

2. **Run the script:**
   ```bash
   cd edbell-website
   node add-hero-image.js
   ```

3. **View:**
   - Go to: http://localhost:3000
   - Press `Ctrl + Shift + R`
   - Done! ✅

---

## 📝 The Next.js Code (Already Set Up)

The hero section in `src/app/page.tsx` is already configured:

```jsx
<img 
  src="/hero-professional.jpg" 
  alt="EDBELL Professional" 
  className="w-full h-full object-cover rounded-2xl transform hover:scale-110 transition-transform duration-700"
/>
```

This code:
- ✅ Loads image from `/public/hero-professional.jpg`
- ✅ Has responsive sizing
- ✅ Includes hover animations
- ✅ Has proper alt text for accessibility

All you need to do is **add the image file** using either method above!

---

## ❓ Why Can't AI Add It Directly?

AI assistants cannot save images from chat to your file system due to security restrictions. This protects your computer from unauthorized file access.

**Solution:** Use the admin dashboard upload feature (Method 1) - it's the fastest way!
