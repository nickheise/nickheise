# Quick Start Guide

Get up and running with content updates in 5 minutes!

---

## 🎯 What You Need to Know

**Everything is centralized in config files.** No need to hunt through component files!

### The 4 Key Config Files

1. **`/src/config/content.config.ts`** - All text (name, bio, titles, CTAs)
2. **`/src/config/images.config.ts`** - All images (URLs & alt text)
3. **`/src/config/animations.config.ts`** - All animation values
4. **`/src/config/design.config.ts`** - All design tokens (colors, spacing)

---

## ⚡ Quick Updates

### Change Your Name & Bio

**File:** `/src/config/content.config.ts`

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name Here', // ← Change this
  title: 'Your Title Here', // ← Change this
  email: 'your@email.com', // ← Change this
  shortBio: 'Your short bio...', // ← Change this
};
```

### Replace Hero Images

**File:** `/src/config/images.config.ts`

```typescript
export const HERO_IMAGES = {
  artCards: [
    {
      src: 'YOUR_IMAGE_URL', // ← Paste your image URL
      alt: 'Description', // ← Update description
    },
    // ... repeat for all 4 images
  ],
};
```

### Update Social Links

**File:** `/src/config/content.config.ts`

```typescript
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/yourprofile', // ← Update
  twitter: 'https://twitter.com/yourhandle', // ← Update
  github: 'https://github.com/yourusername', // ← Update
};
```

### Add a Project

**File:** `/src/data/projects.ts`

```typescript
export const projectsData: Project[] = [
  {
    id: 'my-project',
    title: 'Project Title',
    description: 'Brief description',
    tags: ['Tag1', 'Tag2'],
    featured: true, // Show on homepage
    image: 'IMAGE_URL', // From images.config.ts
  },
  // ... other projects
];
```

---

## 📸 Image Management

### Current Status
✅ All images are **working Unsplash placeholders**  
✅ Site is **fully functional** right now  
✅ Replace with your images **when ready**

### Replace Images in 3 Steps

1. **Open:** `/src/config/images.config.ts`
2. **Find:** The image you want to replace (hero, project, speaking)
3. **Update:** The `src` URL with your image URL

**Example:**

```typescript
// Before
src: 'https://images.unsplash.com/photo-...',

// After
src: 'https://your-cdn.com/your-image.jpg',
```

**Need details?** See [IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)

---

## 🎬 Animation Tweaks

### Make Animations Faster/Slower

**File:** `/src/config/animations.config.ts`

```typescript
export const ANIMATION_DURATION = {
  fast: 200,    // ← Lower = faster
  normal: 400,  // ← Standard speed
  slow: 800,    // ← Higher = slower
};
```

### Adjust Photo Stack

```typescript
export const HERO_PHOTOS = {
  scale: 0.715,      // ← Overall size (smaller = more compact)
  rotationBase: -8,  // ← Starting angle (degrees)
  rotationStep: 4,   // ← Angle between cards
  borderWidth: 8,    // ← White border thickness (px)
};
```

---

## 🎨 Design Changes

### Update Colors

**File:** `/styles/globals.css`

```css
:root {
  --background: #ffffff; /* ← Light mode background */
}

.dark {
  --background: oklch(0.145 0 0); /* ← Dark mode background */
}
```

### Change Fonts

**File:** `/styles/globals.css`

```css
/* 1. Import your font */
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

/* 2. Apply it */
.font-sans {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

---

## 📝 Common Tasks Checklist

### Initial Personalization

- [ ] Update name in `content.config.ts` → `PERSONAL_INFO.name`
- [ ] Update bio in `content.config.ts` → `PERSONAL_INFO.shortBio`
- [ ] Update email in `content.config.ts` → `PERSONAL_INFO.email`
- [ ] Update social links in `content.config.ts` → `SOCIAL_LINKS`
- [ ] Replace hero images in `images.config.ts` → `HERO_IMAGES`

### Add Your Projects

- [ ] Add project images to `images.config.ts` → `PROJECT_IMAGES`
- [ ] Add project data to `/src/data/projects.ts`
- [ ] Set `featured: true` for homepage projects
- [ ] Test project detail pages work

### SEO Setup

- [ ] Update site title in `content.config.ts` → `SEO.defaultTitle`
- [ ] Update description in `content.config.ts` → `SEO.description`
- [ ] Update site URL in `content.config.ts` → `SEO.siteUrl`
- [ ] Add OG image to `/public/og-image.jpg` (1200x630px)
- [ ] Add favicon to `/public/favicon.ico`

---

## 🎓 Learning Resources

### Start Here (10 min read)
**[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** - Complete guide for all updates

### Browse All Docs
**[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - Find any documentation file

### Specific Topics
- **Images:** [IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)
- **Navigation:** [NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)
- **Waves:** [WAVE_SYSTEM_GUIDE.md](./WAVE_SYSTEM_GUIDE.md)
- **Performance:** [PERFORMANCE_ASSESSMENT.md](./PERFORMANCE_ASSESSMENT.md)

---

## 💡 Pro Tips

### Import from Config

```typescript
// Clean imports from central location
import { PERSONAL_INFO, HERO_IMAGES, ANIMATION_DURATION } from '@/config';

// Use anywhere in your components
<h1>{PERSONAL_INFO.name}</h1>
```

### Test Your Changes

1. Save the config file
2. Check browser (should auto-reload)
3. Test on mobile view (Chrome DevTools)
4. Toggle dark mode (button in nav)
5. Check animations work smoothly

### Keep Backups

Before major changes, copy the original values:

```typescript
// Original (keep as comment)
// name: 'Jaclyn Konzelmann',

// Your version
name: 'Your Name',
```

---

## 🚀 You're Ready!

That's it! You can now update:
- ✅ Text content
- ✅ Images
- ✅ Animations
- ✅ Design tokens
- ✅ Projects & experience
- ✅ SEO metadata

Everything is in the `/src/config/` folder and `/src/data/` folder.

**Need more details?** Check the full guide:
👉 **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)**

---

## 📞 Quick Reference

| I want to... | Edit this file... |
|--------------|-------------------|
| Change my name/bio | `/src/config/content.config.ts` |
| Update images | `/src/config/images.config.ts` |
| Add a project | `/src/data/projects.ts` |
| Adjust animations | `/src/config/animations.config.ts` |
| Change colors | `/styles/globals.css` |
| Update navigation | `/src/config/content.config.ts` |
| Add blog post | `/src/data/articles.ts` |
| Modify SEO | `/src/config/content.config.ts` |

---

**Happy editing! 🎉**
