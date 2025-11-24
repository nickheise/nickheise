# Content Management Guide

Complete guide to updating content, images, animations, and design across the website. All content is centralized in configuration files for easy updates.

---

## 🎯 Quick Reference

### **Need to update...**

- **Text content?** → `/src/config/content.config.ts`
- **Images?** → `/src/config/images.config.ts` + `/IMAGES_PLACEHOLDER_GUIDE.md`
- **Animations?** → `/src/config/animations.config.ts`
- **Design/styling?** → `/src/config/design.config.ts` + `/styles/globals.css`
- **Projects?** → `/src/data/projects.ts`
- **Experience/Timeline?** → `/src/data/experience.ts`
- **Blog posts?** → `/src/data/articles.ts`

---

## 📋 Table of Contents

1. [Configuration Files Overview](#configuration-files-overview)
2. [Updating Content](#updating-content)
3. [Managing Images](#managing-images)
4. [Customizing Animations](#customizing-animations)
5. [Design System Changes](#design-system-changes)
6. [Project & Experience Data](#project--experience-data)
7. [SEO & Metadata](#seo--metadata)
8. [Icons & Fonts](#icons--fonts)
9. [Best Practices](#best-practices)

---

## 📁 Configuration Files Overview

### Core Configuration Files (in `/src/config/`)

| File | Purpose | What to Edit |
|------|---------|--------------|
| **content.config.ts** | All site text content | Personal info, section titles, CTAs, navigation, SEO |
| **images.config.ts** | All image URLs & alt text | Hero images, project images, speaking events |
| **animations.config.ts** | Animation timing & values | Duration, easing, delays, transforms |
| **design.config.ts** | Design system tokens | Colors, typography, spacing, breakpoints |

### Data Files (in `/src/data/`)

| File | Purpose | What to Edit |
|------|---------|--------------|
| **projects.ts** | Featured work/projects | Project titles, descriptions, images, details |
| **experience.ts** | Work experience timeline | Job positions, dates, descriptions |
| **articles.ts** | Blog posts/articles | Article content, titles, featured images |
| **images.ts** | Legacy image data | Speaking event carousel images |

### Style Files (in `/styles/`)

| File | Purpose | What to Edit |
|------|---------|--------------|
| **globals.css** | Global styles & CSS vars | Font imports, colors, typography defaults |
| **animations.css** | Keyframe animations | Animation definitions, utility classes |

---

## ✍️ Updating Content

### 1. Personal Information

**File:** `/src/config/content.config.ts`

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  shortBio: 'Your short bio...',
  longBio: 'Your longer bio...',
};
```

### 2. Section Titles & Descriptions

**File:** `/src/config/content.config.ts`

```typescript
export const SECTIONS = {
  hero: {
    tagline: 'Building products that matter',
    subtitle: 'Your subtitle here',
    ctaText: 'View my work',
  },
  work: {
    title: 'Featured Work',
    subtitle: 'Recent projects...',
  },
  // ... other sections
};
```

### 3. Navigation Links

**File:** `/src/config/content.config.ts`

```typescript
export const NAVIGATION = {
  main: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    // Add, remove, or modify links
  ],
};
```

### 4. Social Links

**File:** `/src/config/content.config.ts`

```typescript
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  github: 'https://github.com/yourusername',
};
```

### 5. Call-to-Action Buttons

**File:** `/src/config/content.config.ts`

```typescript
export const CTA_BUTTONS = {
  viewWork: {
    text: 'View Featured Work',
    href: '#work',
  },
  // Customize button text and links
};
```

---

## 🖼️ Managing Images

### Current Status

All images currently use **Unsplash placeholder URLs**. The site is fully functional. Replace with your actual images when ready.

### Quick Image Update

**File:** `/src/config/images.config.ts`

#### Hero Section Images (4 stacked photos)

```typescript
export const HERO_IMAGES = {
  artCards: [
    {
      id: 'reality',
      name: 'Reality',
      src: 'YOUR_IMAGE_URL_HERE', // Update this
      alt: 'Description for accessibility',
    },
    // ... 3 more images
  ],
};
```

#### Project Images

```typescript
export const PROJECT_IMAGES = {
  opal: {
    card: {
      src: 'YOUR_THUMBNAIL_URL',
      alt: 'Project thumbnail description',
    },
    hero: {
      src: 'YOUR_HERO_IMAGE_URL',
      alt: 'Project hero image description',
    },
    gallery: [
      { src: 'IMAGE_1_URL', alt: 'Description' },
      { src: 'IMAGE_2_URL', alt: 'Description' },
      { src: 'IMAGE_3_URL', alt: 'Description' },
    ],
  },
};
```

#### Speaking Events Images

```typescript
export const SPEAKING_IMAGES = {
  events: [
    {
      id: 'event-1',
      src: 'YOUR_EVENT_PHOTO_URL',
      alt: 'Event description',
      caption: 'Event name',
    },
    // ... more events
  ],
};
```

### Image Specifications

See `/src/config/images.config.ts` for complete specs:

- **Hero cards:** 800x1067px (3:4 portrait), <200KB
- **Project cards:** 800x600px (4:3), <200KB
- **Project heroes:** 1920x1080px (16:9), <500KB
- **Gallery images:** 1200x800px (3:2), <300KB
- **Speaking events:** 800x600px (4:3), <150KB
- **Blog featured:** 1200x630px (16:9), <200KB

### Full Image Documentation

See `/IMAGES_PLACEHOLDER_GUIDE.md` for:
- Complete list of all images
- Where each image is used
- How to replace placeholders
- Optimization tips

---

## 🎬 Customizing Animations

### Animation Values

**File:** `/src/config/animations.config.ts`

#### Change Animation Speed

```typescript
export const ANIMATION_DURATION = {
  fast: 300,      // Quick interactions
  normal: 400,    // Standard animations
  slow: 800,      // Dramatic effects
  // Modify these values (in milliseconds)
};
```

#### Adjust Easing Curves

```typescript
export const EASING = {
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)', // Used throughout site
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  // Customize for different feels
};
```

#### Modify Animation Delays

```typescript
export const ANIMATION_DELAY = {
  short: 100,
  medium: 200,
  long: 300,
  // Adjust stagger timing
};
```

#### Transform Values (Movement & Scale)

```typescript
export const TRANSFORM = {
  translateY: {
    small: 8,     // Subtle fade-up
    medium: 20,   // Standard scroll reveal
    large: 30,    // Prominent entrance
  },
  scale: {
    min: 0.92,    // Scale-in starting point
    hover: 1.02,  // Hover effect
  },
};
```

#### Scroll Animation Triggers

```typescript
export const INTERSECTION_CONFIG = {
  threshold: {
    minimal: 0.05,  // Trigger early
    small: 0.1,     // Default
    half: 0.5,      // Half visible
  },
  triggerOnce: true, // Animate once or repeatedly
};
```

#### Hero Photo Stack Settings

```typescript
export const HERO_PHOTOS = {
  scale: 0.715,        // Overall size (28.5% smaller)
  rotationBase: -8,    // Starting rotation angle
  rotationStep: 4,     // Rotation between cards
  offsetStep: 18,      // Spacing between cards
  borderWidth: 8,      // White border thickness
  hoverScale: 1.05,    // Hover zoom effect
};
```

### CSS Animations

**File:** `/styles/animations.css`

To modify keyframe animations directly:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px); /* Adjust distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Disabling Animations

Set all durations to 0 in `animations.config.ts` or use the browser's reduced motion preference (automatically supported).

---

## 🎨 Design System Changes

### Colors

**File:** `/styles/globals.css`

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  /* Modify color values */
}

.dark {
  --background: oklch(0.145 0 0);
  /* Dark mode colors */
}
```

**For JavaScript/TypeScript:**

**File:** `/src/config/design.config.ts`

```typescript
export const COLORS = {
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    // ... customize stone palette
  },
};
```

### Typography

#### Change Fonts

**File:** `/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

.font-sans {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

**Also update:** `/src/config/design.config.ts`

```typescript
export const TYPOGRAPHY = {
  fonts: {
    sans: "'Your Font', system-ui, sans-serif",
    serif: "'Your Serif', Georgia, serif",
  },
};
```

#### Adjust Font Sizes

**File:** `/styles/globals.css`

```css
h1 {
  font-size: var(--text-2xl); /* Customize */
  font-weight: var(--font-weight-medium);
}
```

### Spacing & Layout

**File:** `/src/config/design.config.ts`

```typescript
export const CONTAINER = {
  content: {
    narrow: '640px',   // Blog posts
    standard: '1024px', // Default width
    wide: '1280px',    // Wide sections
  },
  padding: {
    mobile: '1rem',
    desktop: '3rem',
  },
};
```

### Border Radius

**File:** `/styles/globals.css`

```css
:root {
  --radius: 0.625rem; /* 10px - change this value */
}
```

### Shadows

**File:** `/src/config/design.config.ts`

```typescript
export const SHADOWS = {
  card: '0 1px 2px 0 rgb(0 0 0 / 0.05)', // Standard card shadow
  // Customize shadow values
};
```

---

## 📊 Project & Experience Data

### Adding/Editing Projects

**File:** `/src/data/projects.ts`

```typescript
export const projectsData: Project[] = [
  {
    id: 'your-project',
    title: 'Project Title',
    description: 'Short description',
    tags: ['Tag1', 'Tag2'],
    featured: true, // Show on homepage
    link: 'https://blog-post-url.com',
    productLink: 'https://product-url.com',
    image: 'THUMBNAIL_URL', // From images.config.ts
    
    // Detail page (optional)
    detailContent: {
      heroImage: 'HERO_IMAGE_URL',
      overview: 'Detailed overview...',
      keyPoints: [
        'Point 1',
        'Point 2',
      ],
      longDescription: `Full description...`,
      images: ['IMAGE_1', 'IMAGE_2'],
      metrics: [
        { label: 'Launch Date', value: 'Month Year' },
      ],
    },
  },
];
```

### Managing Experience Timeline

**File:** `/src/data/experience.ts`

```typescript
export const experienceData = [
  {
    company: 'Company Name',
    role: 'Your Role',
    period: 'Start - End',
    description: 'What you did...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    logo: CompanyLogoComponent, // Optional
  },
];
```

### Adding Blog Posts

**File:** `/src/data/articles.ts`

```typescript
export const articles: Article[] = [
  {
    id: '1',
    slug: 'article-url-slug',
    title: 'Article Title',
    excerpt: 'Short excerpt...',
    category: 'AI', // AI, Product, Leadership, Parenting
    tags: ['Tag1', 'Tag2'],
    readingTime: 8, // minutes
    featuredImage: 'IMAGE_URL',
    featured: true, // Show in hero
    content: [
      {
        type: 'paragraph',
        content: 'Your paragraph text...',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Section Heading',
      },
      // More content blocks...
    ],
  },
];
```

---

## 🔍 SEO & Metadata

**File:** `/src/config/content.config.ts`

```typescript
export const SEO = {
  defaultTitle: 'Your Name - Your Title',
  description: 'Your meta description...',
  ogImage: '/og-image.jpg', // 1200x630px in /public
  twitterHandle: '@yourhandle',
  siteUrl: 'https://yourwebsite.com',
  keywords: ['keyword1', 'keyword2'],
};
```

**Place these files in `/public/`:**
- `og-image.jpg` - Social sharing image (1200x630px)
- `favicon.ico` - Site favicon
- `robots.txt` - Search engine instructions
- `sitemap.xml` - Site structure

---

## 🎭 Icons & Fonts

### Icons

**Library:** Lucide React ([lucide.dev](https://lucide.dev))

**Usage:**
```typescript
import { Icon } from 'lucide-react';
import { ICON_SIZES } from '@/config/design.config';

<Icon size={ICON_SIZES.button} /> // 20px
```

**Icon sizes in config:**

**File:** `/src/config/design.config.ts`

```typescript
export const ICON_SIZES = {
  button: 20,
  nav: 20,
  card: 24,
  hero: 32,
};
```

### Fonts

**Current fonts:**
- **Sans-serif:** Inter (body text)
- **Serif:** Playfair Display (headings)

**To change fonts:** See [Typography](#typography) section above.

---

## ✅ Best Practices

### Content Updates

1. **Always update config files first** - Don't edit component files directly
2. **Test in both light and dark modes** after changes
3. **Keep alt text descriptive** for accessibility
4. **Maintain consistent tone** across all content

### Images

1. **Optimize before uploading** - Use TinyPNG, Squoosh, or similar
2. **Follow size recommendations** in `images.config.ts`
3. **Use descriptive alt text** for SEO and accessibility
4. **Test loading performance** after replacing images

### Animations

1. **Test on slower devices** after changing values
2. **Respect reduced motion preferences** (automatic)
3. **Keep animations subtle** - less is more
4. **Maintain 60fps** by only animating transform/opacity

### Design Changes

1. **Change CSS variables** instead of hardcoded values
2. **Update both light and dark modes** for consistency
3. **Test responsive breakpoints** (mobile, tablet, desktop)
4. **Use the config files** for JavaScript values

### Performance

1. **Compress images** before adding to site
2. **Use WebP format** when possible
3. **Lazy load** off-screen images
4. **Minimize animation complexity** on lower-end devices

---

## 🚀 Quick Start Checklist

### Initial Setup

- [ ] Update personal info in `content.config.ts`
- [ ] Replace placeholder images in `images.config.ts`
- [ ] Add your projects to `projects.ts`
- [ ] Update experience timeline in `experience.ts`
- [ ] Configure social links in `content.config.ts`
- [ ] Add SEO metadata in `content.config.ts`
- [ ] Place `og-image.jpg` and `favicon.ico` in `/public/`

### Customization

- [ ] Adjust animation speeds in `animations.config.ts`
- [ ] Customize colors in `globals.css` if needed
- [ ] Update fonts if desired
- [ ] Configure navigation links
- [ ] Set up contact form endpoint

### Production Ready

- [ ] Optimize all images
- [ ] Test on mobile, tablet, desktop
- [ ] Check both light and dark modes
- [ ] Verify all links work
- [ ] Test animations on slower devices
- [ ] Add analytics tracking ID

---

## 📚 Additional Resources

- **Images Guide:** `/IMAGES_PLACEHOLDER_GUIDE.md` - Complete image replacement guide
- **Animations:** `/src/config/animations.config.ts` - All animation values with examples
- **Design System:** `/src/config/design.config.ts` - Complete design tokens
- **Content:** `/src/config/content.config.ts` - All site text content

---

## 🆘 Need Help?

Each config file includes:
- ✅ Detailed comments explaining each section
- ✅ Usage examples at the bottom
- ✅ Recommended values and constraints
- ✅ Helper functions where appropriate

Look for the "USAGE EXAMPLES" section at the bottom of each config file!

---

**Last Updated:** November 23, 2024

Made with ❤️ for easy content management
