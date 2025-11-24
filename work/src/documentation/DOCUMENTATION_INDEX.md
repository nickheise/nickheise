# Documentation Index

Complete guide to all documentation files in this project. Start here to find what you need!

---

## 🚀 Getting Started

**New to the project?** Start with these:

1. **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** - Master guide for all content updates
2. **[IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)** - How to replace placeholder images

---

## 📚 All Documentation Files

### Content & Configuration

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** | Complete guide for updating all content, images, animations, and design | Main reference for any content updates |
| **[IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)** | Guide for replacing Unsplash placeholders with your actual images | When you're ready to add your real photos |

### Configuration Files (in `/src/config/`)

| File | Purpose | Quick Link |
|------|---------|------------|
| **content.config.ts** | All site text, SEO, navigation, CTAs | [View File](/src/config/content.config.ts) |
| **images.config.ts** | All image URLs and specifications | [View File](/src/config/images.config.ts) |
| **animations.config.ts** | Animation timing, easing, transforms | [View File](/src/config/animations.config.ts) |
| **design.config.ts** | Design tokens: colors, typography, spacing | [View File](/src/config/design.config.ts) |
| **index.ts** | Central export for all configs | [View File](/src/config/index.ts) |

### Implementation Guides

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** | Technical implementation overview | Understanding site architecture |
| **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** | Migration from old structure to current | Historical reference |
| **[NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)** | Navigation system documentation | Understanding routing & navigation |
| **[WAVE_SYSTEM_GUIDE.md](./WAVE_SYSTEM_GUIDE.md)** | Wave divider system documentation | Customizing section dividers |

### Performance & Optimization

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[PERFORMANCE_ASSESSMENT.md](./PERFORMANCE_ASSESSMENT.md)** | Performance optimization details | Improving site speed |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Quick commands and reminders | Fast lookups |
| **[README_IMPROVEMENTS.md](./README_IMPROVEMENTS.md)** | Suggestions for improvements | Planning enhancements |

### Component Documentation

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[Attributions.md](./Attributions.md)** | Credits for libraries and tools | Licensing information |
| **[INSTALLATION_CHECKLIST.md](./INSTALLATION_CHECKLIST.md)** | Setup and installation steps | Initial project setup |

---

## 🎯 Quick Navigation by Task

### "I want to..."

#### Update Content

- **Change text content** → [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md) → `/src/config/content.config.ts`
- **Update personal bio** → `/src/config/content.config.ts` → `PERSONAL_INFO`
- **Modify section titles** → `/src/config/content.config.ts` → `SECTIONS`
- **Edit navigation** → `/src/config/content.config.ts` → `NAVIGATION`

#### Manage Images

- **Replace placeholder images** → [IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)
- **Update image URLs** → `/src/config/images.config.ts`
- **Change hero photos** → `/src/config/images.config.ts` → `HERO_IMAGES`
- **Update project images** → `/src/config/images.config.ts` → `PROJECT_IMAGES`

#### Customize Animations

- **Adjust animation speed** → `/src/config/animations.config.ts` → `ANIMATION_DURATION`
- **Change easing curves** → `/src/config/animations.config.ts` → `EASING`
- **Modify photo stack effect** → `/src/config/animations.config.ts` → `HERO_PHOTOS`
- **Edit scroll triggers** → `/src/config/animations.config.ts` → `INTERSECTION_CONFIG`

#### Design Changes

- **Update colors** → `/styles/globals.css` + `/src/config/design.config.ts`
- **Change fonts** → `/styles/globals.css` → `@import` + `.font-sans`
- **Adjust spacing** → `/src/config/design.config.ts` → `CONTAINER`
- **Modify shadows** → `/src/config/design.config.ts` → `SHADOWS`

#### Add/Edit Projects

- **Add new project** → `/src/data/projects.ts` → `projectsData`
- **Update project images** → `/src/config/images.config.ts` → `PROJECT_IMAGES`
- **Edit project details** → `/src/data/projects.ts` → `detailContent`

#### Update Experience

- **Add job position** → `/src/data/experience.ts` → `experienceData`
- **Edit timeline** → `/src/data/experience.ts`

#### Blog Management

- **Add blog post** → `/src/data/articles.ts` → `articles`
- **Change featured post** → `/src/data/articles.ts` → `featured: true`

#### SEO & Metadata

- **Update meta tags** → `/src/config/content.config.ts` → `SEO`
- **Change OG image** → Place in `/public/` → Update `SEO.ogImage`
- **Modify keywords** → `/src/config/content.config.ts` → `SEO.keywords`

---

## 📖 Documentation Structure

```
/
├── DOCUMENTATION_INDEX.md          ← You are here
├── CONTENT_MANAGEMENT_GUIDE.md     ← ⭐ Master content guide
├── IMAGES_PLACEHOLDER_GUIDE.md     ← ⭐ Image replacement guide
│
├── /src/config/                    ← ⭐ Configuration files
│   ├── content.config.ts           ← All text content
│   ├── images.config.ts            ← All images
│   ├── animations.config.ts        ← Animation values
│   ├── design.config.ts            ← Design tokens
│   └── index.ts                    ← Central exports
│
├── /src/data/                      ← Data files
│   ├── projects.ts                 ← Project data
│   ├── experience.ts               ← Experience timeline
│   ├── articles.ts                 ← Blog posts
│   └── images.ts                   ← Legacy images
│
├── /styles/                        ← Style files
│   ├── globals.css                 ← Global styles
│   └── animations.css              ← Animation keyframes
│
└── [Other documentation files]
```

---

## 🎓 Learning Path

### For Content Editors

1. Read **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** (start to finish)
2. Review `/src/config/content.config.ts` (see what you can change)
3. Check **[IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)** (learn about images)
4. Make your first edit in a config file
5. Test changes in the browser

### For Designers

1. Read **Design System Changes** in [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
2. Review `/src/config/design.config.ts` (design tokens)
3. Check `/styles/globals.css` (CSS variables)
4. Explore `/src/config/animations.config.ts` (animation values)
5. Test changes on mobile, tablet, and desktop

### For Developers

1. Review **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** (architecture)
2. Check **[PERFORMANCE_ASSESSMENT.md](./PERFORMANCE_ASSESSMENT.md)** (optimizations)
3. Read config file comments in `/src/config/`
4. Explore **[WAVE_SYSTEM_GUIDE.md](./WAVE_SYSTEM_GUIDE.md)** (wave dividers)
5. Review **[NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)** (routing)

---

## 🔧 Configuration Quick Reference

### Import Patterns

```typescript
// Option 1: Import from individual config files
import { PERSONAL_INFO } from '@/config/content.config';
import { HERO_IMAGES } from '@/config/images.config';

// Option 2: Import from central index (recommended)
import { PERSONAL_INFO, HERO_IMAGES, ANIMATION_DURATION } from '@/config';
```

### File Responsibilities

| Config File | Controls |
|------------|----------|
| **content.config.ts** | Text, SEO, navigation, CTAs, personal info |
| **images.config.ts** | All image URLs, alt text, specifications |
| **animations.config.ts** | Duration, easing, delays, transforms, thresholds |
| **design.config.ts** | Colors, typography, spacing, breakpoints, shadows |

---

## 📝 Common Tasks

### Replace All Placeholder Images

1. Read [IMAGES_PLACEHOLDER_GUIDE.md](./IMAGES_PLACEHOLDER_GUIDE.md)
2. Optimize your images (TinyPNG, Squoosh)
3. Upload to your image host OR place in `/public/images/`
4. Update URLs in `/src/config/images.config.ts`
5. Test in browser

### Add New Project

1. Add images to `/src/config/images.config.ts` → `PROJECT_IMAGES`
2. Add project data to `/src/data/projects.ts`
3. Set `featured: true` to show on homepage
4. Add `detailContent` for detail page (optional)

### Change Animation Speed Site-Wide

1. Open `/src/config/animations.config.ts`
2. Modify values in `ANIMATION_DURATION`
3. Save and test in browser
4. Adjust individual animations if needed

### Update Color Scheme

1. Edit `/styles/globals.css` → `:root` and `.dark`
2. Update `/src/config/design.config.ts` → `COLORS` (for JS usage)
3. Test in both light and dark modes

---

## ✅ Best Practices

### Before Making Changes

- [ ] Read relevant section in [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
- [ ] Check config file for existing examples
- [ ] Back up current values if unsure
- [ ] Test in development environment first

### After Making Changes

- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Check both light and dark modes
- [ ] Verify animations work smoothly
- [ ] Test all links and images load properly
- [ ] Check console for errors

### General Guidelines

- **Always edit config files**, not component files directly
- **Keep alt text descriptive** for accessibility
- **Optimize images** before adding to site
- **Test performance** after major changes
- **Maintain consistent tone** in content
- **Follow existing patterns** when adding new content

---

## 🆘 Troubleshooting

### Images Not Showing

1. Check URL in `/src/config/images.config.ts`
2. Verify image is accessible (paste URL in browser)
3. Check browser console for 404 errors
4. Ensure file paths are correct

### Animations Not Working

1. Check values in `/src/config/animations.config.ts`
2. Verify CSS classes in `/styles/animations.css`
3. Test with animations disabled (reduced motion)
4. Check browser console for errors

### Content Not Updating

1. Ensure you edited the config file, not component
2. Hard refresh browser (Cmd/Ctrl + Shift + R)
3. Clear browser cache
4. Restart development server

### Design Changes Not Applied

1. Check both `/styles/globals.css` AND `/src/config/design.config.ts`
2. Verify CSS variable names match
3. Test in both light and dark modes
4. Clear browser cache and hard refresh

---

## 📞 Need More Help?

- **Config files** include detailed comments and usage examples
- **Each guide** has a specific purpose - check the table above
- **Look for "USAGE EXAMPLES"** at bottom of config files
- **Check browser console** for error messages

---

## 🎉 You're All Set!

Everything you need to manage content, images, animations, and design is centralized and documented. Start with the [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md) and you'll be making updates in no time!

---

**Last Updated:** November 23, 2024

**Quick Links:**
- [Content Management Guide](./CONTENT_MANAGEMENT_GUIDE.md)
- [Images Placeholder Guide](./IMAGES_PLACEHOLDER_GUIDE.md)
- [Config Files](/src/config/)
