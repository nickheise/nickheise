# Images - Current Status & Replacement Guide

All images are currently using **working Unsplash placeholder images**. The site is fully functional with these placeholders, but you should replace them with your actual photos for the final production site.

## ✅ Current Status

All image URLs have been updated to use **working Unsplash URLs** so the site displays properly right now. No broken images!

**All image URLs are centralized in:** `/src/config/images.config.ts`

This makes updates incredibly easy - change the URL in one place, and it updates everywhere on the site!

## 📸 Where to Add Your Actual Images

### Option 1: Direct URL Replacement (Easiest)
Replace the Unsplash URLs in the code files with your own image URLs (hosted on your preferred CDN or image host).

### Option 2: Local Images (Recommended for Production)
Download and place your images in the `/public/images/` folder structure, then update the code to use local paths.

## 🔄 Images to Replace

### **Hero Section** (4 art photos)
**File to edit:** `/src/components/sections/Hero.tsx`

**Current placeholder images:**
- Abstract art painting
- Colorful pen drawing  
- Watercolor painting
- Acrylic paint art

**What to replace with:** Your actual 4 art photos or personal photos  
**Recommended size:** 800x1067px (3:4 portrait aspect ratio)

```typescript
// Update these URLs in /src/config/images.config.ts
export const heroImages = [
  { name: 'Reality', src: 'YOUR_IMAGE_URL_HERE' },
  { name: 'Pen Art', src: 'YOUR_IMAGE_URL_HERE' },
  { name: 'Watercolor', src: 'YOUR_IMAGE_URL_HERE' },
  { name: 'Acrylic', src: 'YOUR_IMAGE_URL_HERE' }
];
```

---

### **Speaking Events Carousel** (3 event photos)
**File to edit:** `/src/data/images.ts`

**Current placeholder images:**
- Conference speaker stage
- Business panel discussion
- Professional networking event

**What to replace with:** Your actual speaking event photos  
**Recommended size:** 800x600px (4:3 aspect ratio)

```typescript
// Update these URLs in /src/config/images.config.ts
export const imagePanelData = {
  speaking: [
    'YOUR_EVENT_PHOTO_1_URL',
    'YOUR_EVENT_PHOTO_2_URL',
    'YOUR_EVENT_PHOTO_3_URL'
  ]
};
```

---

### **Project Images** (3 projects × 5 images each = 15 total)
**File to edit:** `/src/data/projects.ts`

#### **Opal Project**
**Current placeholders:**
- Card thumbnail: AI technology interface
- Hero image: AI technology interface (larger)
- Gallery: 3 generic tech images

**Recommended sizes:**
- Card thumbnail: 800x600px
- Hero image: 1920x1080px  
- Gallery images: 1200x800px each

```typescript
// In /src/data/projects.ts - Opal project
image: 'YOUR_OPAL_THUMBNAIL_URL',
detailContent: {
  heroImage: 'YOUR_OPAL_HERO_URL',
  images: [
    'YOUR_OPAL_GALLERY_1_URL',
    'YOUR_OPAL_GALLERY_2_URL',
    'YOUR_OPAL_GALLERY_3_URL'
  ]
}
```

#### **Mixboard Project**
**Current placeholders:**
- Card thumbnail: Creative digital workspace
- Hero image: Creative workspace (larger)
- Gallery: 3 creative/design images

```typescript
// In /src/data/projects.ts - Mixboard project
image: 'YOUR_MIXBOARD_THUMBNAIL_URL',
detailContent: {
  heroImage: 'YOUR_MIXBOARD_HERO_URL',
  images: [
    'YOUR_MIXBOARD_GALLERY_1_URL',
    'YOUR_MIXBOARD_GALLERY_2_URL',
    'YOUR_MIXBOARD_GALLERY_3_URL'
  ]
}
```

#### **Pomelli Project**
**Current placeholders:**
- Card thumbnail: Small business marketing
- Hero image: Business marketing (larger)
- Gallery: 3 business/marketing images

```typescript
// In /src/data/projects.ts - Pomelli project
image: 'YOUR_POMELLI_THUMBNAIL_URL',
detailContent: {
  heroImage: 'YOUR_POMELLI_HERO_URL',
  images: [
    'YOUR_POMELLI_GALLERY_1_URL',
    'YOUR_POMELLI_GALLERY_2_URL',
    'YOUR_POMELLI_GALLERY_3_URL'
  ]
}
```

---

### **Blog Featured Image** (1 image)
**File to edit:** `/src/data/articles.ts`

**Current placeholder:** Children learning technology

**What to replace with:** Featured image for "Raising AI-Native Kids" article  
**Recommended size:** 1200x630px (16:9 aspect ratio)

```typescript
// In /src/config/images.config.ts - First article
export const blogFeaturedImage = 'YOUR_BLOG_FEATURED_IMAGE_URL'
```

---

## 🎯 Quick Replacement Checklist

- [ ] **Hero section** - 4 art/personal photos
- [ ] **Speaking events** - 3 event photos
- [ ] **Opal project** - 1 thumbnail + 1 hero + 3 gallery (5 images)
- [ ] **Mixboard project** - 1 thumbnail + 1 hero + 3 gallery (5 images)
- [ ] **Pomelli project** - 1 thumbnail + 1 hero + 3 gallery (5 images)
- [ ] **Blog featured** - 1 image

**Total: 23 images to replace**

---

## 💡 Image Hosting Options

### For Production Sites:
1. **Cloudinary** - Free tier available, great image optimization
2. **Imgix** - Professional CDN with powerful transformations
3. **AWS S3 + CloudFront** - Full control, scales infinitely
4. **Vercel/Netlify** - If deploying there, use their image optimization

### For Quick Testing:
1. **Imgur** - Simple, free image hosting
2. **Google Photos** - Get shareable links
3. **Dropbox Public Links** - Easy for personal use

---

## 📐 Image Optimization Tips

Before uploading/replacing images:

1. **Resize to recommended dimensions** (see sizes above)
2. **Compress images** using:
   - [TinyPNG](https://tinypng.com/) - Best compression
   - [Squoosh](https://squoosh.app/) - Google's tool
   - Photoshop "Export for Web"
3. **Target file sizes:**
   - Thumbnails: <200KB
   - Hero images: <500KB
   - Gallery: <300KB each
4. **Use WebP format** when possible (30% smaller than JPG)
5. **Keep aspect ratios** as specified to avoid stretching

---

## 🚀 Using Local Images (Advanced)

If you prefer to store images locally in the codebase:

1. Create folder structure in `/public/images/`:
```
/public/images/
├── hero/
├── speaking/
├── projects/
│   ├── cards/
│   └── details/
└── blog/
```

2. Place your images in the appropriate folders

3. Update URLs in code to use local paths:
```typescript
// Example
src: '/images/hero/reality.jpg'  // instead of full URL
```

4. **Benefits:** No external dependencies, faster loading, works offline
5. **Considerations:** Increases repo size, need to optimize before adding

---

## ❓ Need Help?

- All image placeholders are **fully functional** - site works perfectly as-is
- Replace images **gradually** - no rush to do all at once
- **Test in both light and dark modes** after replacing images
- Images are just URLs - easy to swap anytime

The site is production-ready with placeholder images. Replace them when you have the final assets ready! 🎨