# Jaclyn Konzelmann - Portfolio Website

Modern, performant portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a centralized content management system.

---

## 🚀 Quick Start

### For Content Updates

**Everything is centralized in config files - no need to edit components!**

```typescript
// Update your info in one place
/src/config/content.config.ts  // Your name, bio, social links
/src/config/images.config.ts   // All images
/src/data/projects.ts          // Your projects
```

**📖 Start here:** [QUICK_START.md](./QUICK_START.md) (5 min read)

---

## 📚 Documentation

### Essential Guides

| Guide | Purpose | Read First? |
|-------|---------|-------------|
| **[QUICK_START.md](./QUICK_START.md)** | Get started in 5 minutes | ✅ Yes |
| **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** | Complete content update guide | ✅ Yes |
| **[IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)** | Replace placeholder images | ⭐ When ready |
| **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** | Find any documentation | 📖 Reference |

### Configuration Files

All editable content is in `/src/config/`:

```
/src/config/
├── content.config.ts     ← Text, navigation, SEO
├── images.config.ts      ← All image URLs
├── animations.config.ts  ← Animation timing
├── design.config.ts      ← Design tokens
└── index.ts             ← Central exports
```

---

## ✨ Features

### Content Management
- ✅ **Centralized configs** - Update everything in one place
- ✅ **No component editing** - All content in config files
- ✅ **Type-safe** - TypeScript for safety
- ✅ **Well-documented** - Every config has examples

### Design & Performance
- ✅ **60fps animations** - Pure CSS, no Framer Motion
- ✅ **Dark mode** - Automatic system detection
- ✅ **Responsive** - Mobile-first design
- ✅ **Optimized** - Lazy loading, intersection observers
- ✅ **Accessible** - ARIA labels, reduced motion support

### Architecture
- ✅ **Modern React** - Hooks, TypeScript, best practices
- ✅ **Tailwind CSS v4** - Utility-first styling
- ✅ **ShadCN UI** - Beautiful component library
- ✅ **Modular** - Easy to extend and maintain

---

## 🎯 Common Tasks

### Update Your Personal Info

**File:** `/src/config/content.config.ts`

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  shortBio: 'Your bio here...',
};
```

### Replace Images

**File:** `/src/config/images.config.ts`

```typescript
export const HERO_IMAGES = {
  artCards: [
    {
      src: 'YOUR_IMAGE_URL', // ← Update this
      alt: 'Description',
    },
  ],
};
```

### Add a Project

**File:** `/src/data/projects.ts`

```typescript
{
  id: 'my-project',
  title: 'Project Name',
  description: 'Brief description',
  tags: ['Tag1', 'Tag2'],
  featured: true,
  image: 'IMAGE_URL',
}
```

### Adjust Animations

**File:** `/src/config/animations.config.ts`

```typescript
export const ANIMATION_DURATION = {
  fast: 300,    // ← Make faster/slower
  normal: 400,
  slow: 800,
};
```

---

## 📁 Project Structure

```
/
├── /src/
│   ├── /config/              ⭐ Edit these for content
│   │   ├── content.config.ts
│   │   ├── images.config.ts
│   │   ├── animations.config.ts
│   │   └── design.config.ts
│   │
│   ├── /data/               ⭐ Edit these for projects/blog
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── articles.ts
│   │
│   ├── /components/         (Don't edit directly)
│   ├── /hooks/
│   ├── /utils/
│   └── /pages/
│
├── /styles/
│   ├── globals.css          ⭐ Edit for global styles
│   └── animations.css       ⭐ Edit for animation keyframes
│
├── /public/                 ⭐ Place images, favicon here
│
└── [Documentation files]
```

---

## 🎨 Customization

### Change Colors

**File:** `/styles/globals.css`

```css
:root {
  --background: #ffffff;     /* ← Light mode */
}

.dark {
  --background: oklch(0.145 0 0); /* ← Dark mode */
}
```

### Change Fonts

**File:** `/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

.font-sans {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

### Adjust Layout Spacing

**File:** `/src/config/design.config.ts`

```typescript
export const CONTAINER = {
  content: {
    standard: '1024px', // ← Max content width
  },
  padding: {
    desktop: '3rem',    // ← Side padding
  },
};
```

---

## 🔧 Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons
- **ShadCN UI** - Component library

---

## 🎓 Learning Path

### New to the Project?

1. Read [QUICK_START.md](./QUICK_START.md) (5 min)
2. Review [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md) (15 min)
3. Open `/src/config/content.config.ts` and make your first edit
4. Check the browser - changes appear instantly!

### Want to Customize Design?

1. Colors → `/styles/globals.css`
2. Fonts → `/styles/globals.css`
3. Spacing/Layout → `/src/config/design.config.ts`
4. Animations → `/src/config/animations.config.ts`

### Ready to Add Content?

1. Projects → `/src/data/projects.ts`
2. Experience → `/src/data/experience.ts`
3. Blog → `/src/data/articles.ts`
4. Images → `/src/config/images.config.ts`

---

## ✅ Content Update Checklist

### Initial Setup

- [ ] Update personal info (`/src/config/content.config.ts`)
- [ ] Add your social links (`/src/config/content.config.ts`)
- [ ] Replace hero images (`/src/config/images.config.ts`)
- [ ] Add your projects (`/src/data/projects.ts`)
- [ ] Update experience (`/src/data/experience.ts`)

### SEO Setup

- [ ] Update meta tags (`/src/config/content.config.ts` → `SEO`)
- [ ] Add OG image (`/public/og-image.jpg` - 1200x630px)
- [ ] Add favicon (`/public/favicon.ico`)
- [ ] Update sitemap (`/public/sitemap.xml`)

### Optional

- [ ] Customize colors (`/styles/globals.css`)
- [ ] Change fonts (`/styles/globals.css`)
- [ ] Adjust animations (`/src/config/animations.config.ts`)
- [ ] Add blog posts (`/src/data/articles.ts`)

---

## 📝 Key Principles

### Content Management Philosophy

1. **Centralized** - All content in config files
2. **Type-safe** - TypeScript catches errors
3. **Documented** - Every config has examples
4. **Flexible** - Easy to extend

### Performance First

1. **Pure CSS animations** - No heavy libraries
2. **Lazy loading** - Images load when needed
3. **Intersection observers** - Efficient scroll detection
4. **Optimized builds** - Vite for fast compilation

### Maintainable Code

1. **Clear separation** - Config vs components
2. **Consistent patterns** - Easy to understand
3. **Well-documented** - Comments everywhere
4. **Best practices** - Modern React patterns

---

## 🆘 Need Help?

### Quick Links

- **Quick Start:** [QUICK_START.md](./QUICK_START.md)
- **Full Guide:** [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
- **All Docs:** [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)
- **Images:** [IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)

### Common Issues

**Images not showing?**
- Check URL in `/src/config/images.config.ts`
- Verify image URL works in browser
- Clear cache and hard refresh

**Content not updating?**
- Ensure you edited config file, not component
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Restart dev server

**Animations not working?**
- Check browser console for errors
- Verify values in `/src/config/animations.config.ts`
- Test with reduced motion disabled

---

## 📄 License

This is a personal portfolio website. Feel free to use it as inspiration for your own site!

---

## 🎉 You're Ready!

Start with [QUICK_START.md](./QUICK_START.md) and you'll be making updates in minutes!

**Happy building! 🚀**

---

**Current Version:** 2.0 (Centralized Content Management)  
**Last Updated:** November 23, 2024  
**Built with:** ❤️ and modern web technologies
