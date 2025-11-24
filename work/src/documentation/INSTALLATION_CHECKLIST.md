# Installation & Verification Checklist

Follow this checklist to ensure Phase 1 is properly installed and working.

---

## 📦 Step 1: Install Dependencies

### Required Package
```bash
npm install react-helmet-async
```

### Verify Installation
```bash
npm list react-helmet-async
```
Should show: `react-helmet-async@2.x.x`

---

## 🔍 Step 2: Verify File Structure

Check that these files exist:

### New Components
- [ ] `/src/components/SEO.tsx`
- [ ] `/src/components/ErrorBoundary.tsx`
- [ ] `/src/components/design-system/SectionHeader.tsx`
- [ ] `/src/components/design-system/WaveSection.tsx`
- [ ] `/src/components/design-system/Container.tsx`
- [ ] `/src/components/design-system/index.ts`

### New Hooks
- [ ] `/src/hooks/useScrollReveal.ts`

### New Styles
- [ ] `/styles/animations.css`

### New Public Files
- [ ] `/public/robots.txt`
- [ ] `/public/sitemap.xml`

### Documentation
- [ ] `/PERFORMANCE_ASSESSMENT.md`
- [ ] `/IMPLEMENTATION_SUMMARY.md`
- [ ] `/MIGRATION_GUIDE.md`
- [ ] `/INSTALLATION_CHECKLIST.md` (this file)

### Deleted Files (should NOT exist)
- [ ] `/src/components/ui/ScrollReveal.tsx` ❌
- [ ] `/src/components/ui/AnimatedCard.tsx` ❌
- [ ] `/src/components/ui/ParallaxImage.tsx` ❌
- [ ] `/src/utils/animations.ts` ❌

---

## 🏗️ Step 3: Build & Run

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Check for Errors
Look for:
- ❌ No TypeScript errors
- ❌ No missing import errors
- ❌ No runtime errors in console

---

## ✅ Step 4: Visual Verification

### Homepage Load
- [ ] Page loads without errors
- [ ] Hero section appears
- [ ] Animations work smoothly
- [ ] Featured Work section displays

### Scroll Behavior
- [ ] Sections reveal on scroll
- [ ] Wave dividers appear between sections
- [ ] Lazy-loaded sections appear when scrolling

### Dark Mode Toggle
- [ ] Toggle button works
- [ ] All sections switch to dark mode
- [ ] Colors are correct
- [ ] No flash of wrong theme

### Mobile Menu
- [ ] Hamburger menu opens
- [ ] Close button works (smooth transition)
- [ ] Navigation links work
- [ ] Menu closes when clicking link

---

## 🎨 Step 5: Animation Verification

### CSS Animations (Check DevTools)
Open browser DevTools → Network tab:
- [ ] No `motion/react` or `framer-motion` in network requests
- [ ] `/styles/animations.css` loads
- [ ] Animations are CSS-based (check Elements tab)

### Scroll Reveal
- [ ] Elements with `scroll-reveal` class animate on scroll
- [ ] Animations are smooth (60fps)
- [ ] Delay classes work (animation-delay-200, etc.)

### Infinite Animations
- [ ] Hero background blobs float smoothly
- [ ] Speaking Events carousel scrolls infinitely
- [ ] Decorative elements pulse

### Reduced Motion
Test in DevTools → Rendering → Emulate CSS prefers-reduced-motion:
- [ ] Animations are disabled when "reduce" is selected
- [ ] Content is still visible
- [ ] No jarring movements

---

## 🔍 Step 6: SEO Verification

### View Source (Right-click → View Page Source)
Check for these meta tags:
- [ ] `<title>Jaclyn Konzelmann - Director of Product Management at Google Labs</title>`
- [ ] `<meta name="description" content="...">`
- [ ] `<meta property="og:title" content="...">`
- [ ] `<meta property="og:image" content="...">`
- [ ] `<meta name="twitter:card" content="summary_large_image">`
- [ ] `<script type="application/ld+json">` (JSON-LD structured data)

### Test Tools
1. **Facebook Sharing Debugger**
   - Go to: https://developers.facebook.com/tools/debug/
   - Enter: https://www.jaclynkonzelmann.com
   - [ ] Preview shows correct image, title, description

2. **Twitter Card Validator**
   - Go to: https://cards-dev.twitter.com/validator
   - Enter: https://www.jaclynkonzelmann.com
   - [ ] Card preview shows correctly

3. **Google Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Enter: https://www.jaclynkonzelmann.com
   - [ ] Structured data validates

### Robots & Sitemap
- [ ] Visit: https://www.jaclynkonzelmann.com/robots.txt
- [ ] Visit: https://www.jaclynkonzelmann.com/sitemap.xml
- [ ] Both files load correctly

---

## ⚡ Step 7: Performance Testing

### Lighthouse Test
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. Click "Analyze page load"

**Target Scores:**
- [ ] Performance: 90+ (ideally 95+)
- [ ] Accessibility: 90+
- [ ] Best Practices: 95+
- [ ] SEO: 100

### Network Analysis
Open DevTools → Network tab:
- [ ] Initial JS bundle < 150KB (gzipped)
- [ ] Lazy-loaded chunks appear as you scroll
- [ ] Hero/FeaturedWork load immediately
- [ ] Below-fold sections load on demand

### Performance Tab
Record page load:
- [ ] First Contentful Paint (FCP) < 1s
- [ ] Time to Interactive (TTI) < 2s
- [ ] No layout shifts (CLS close to 0)

---

## 🧪 Step 8: Error Boundary Testing

### Trigger Error (Development Mode)
1. Temporarily add this to any component:
   ```tsx
   if (true) throw new Error('Test error');
   ```
2. [ ] Error boundary catches it
3. [ ] User sees friendly error message
4. [ ] "Refresh Page" button works
5. [ ] Development mode shows error details
6. Remove the test error

---

## 🎯 Step 9: Lazy Loading Verification

### Check Lazy Loading Works
1. Open DevTools → Network tab
2. Filter: JS
3. Reload page
4. [ ] Only Hero and FeaturedWork JS loads initially
5. Scroll down slowly
6. [ ] New JS chunks load as sections appear
7. [ ] "Suspense" loading indicator shows briefly

### Console Check
- [ ] No "lazy loading" errors
- [ ] No "chunk load failed" errors
- [ ] Smooth transitions between sections

---

## 📱 Step 10: Responsive Testing

### Mobile (375px)
- [ ] Hero section readable
- [ ] Featured Work cards stack
- [ ] Mobile menu works
- [ ] Animations smooth
- [ ] No horizontal scroll

### Tablet (768px)
- [ ] Layout adjusts properly
- [ ] Grid layouts work
- [ ] Navigation shows/hides correctly

### Desktop (1440px+)
- [ ] Full desktop navigation
- [ ] Proper max-width containers
- [ ] Wave dividers scale correctly

---

## 🌓 Step 11: Dark Mode Testing

### Test Every Section
- [ ] Hero (background, text, images)
- [ ] Featured Work (cards, tags)
- [ ] Where It Started (cards, borders)
- [ ] Speaking Events (carousel, gradients)
- [ ] Experience (timeline, cards)
- [ ] Patents (content, links)
- [ ] Bio (text, images)
- [ ] Personal (cards, images)
- [ ] Thoughts (articles, background)
- [ ] Footer (links, colors)

### Persistence
- [ ] Reload page - theme persists
- [ ] Close and reopen tab - theme persists

---

## 🔧 Step 12: Browser Compatibility

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

Check for:
- [ ] Animations work
- [ ] Lazy loading works
- [ ] Dark mode toggle works
- [ ] No console errors

---

## 🐛 Step 13: Common Issues & Fixes

### Issue: "react-helmet-async not found"
**Fix:** Run `npm install react-helmet-async`

### Issue: Animations not working
**Fix:** Check that `/styles/animations.css` is imported in `/styles/globals.css`

### Issue: Lazy loading errors
**Fix:** Check that lazy imports use default exports:
```tsx
const Section = lazy(() => import('./Section')); // ✅
const Section = lazy(() => import('./Section').then(m => m.Section)); // ❌ wrong
```

### Issue: Dark mode not working
**Fix:** Check ThemeProvider wraps the entire app in App.tsx

### Issue: SEO tags not showing
**Fix:** Check HelmetProvider wraps ThemeProvider in App.tsx

### Issue: Wave dividers missing
**Fix:** Check section has correct prevSection/nextSection keys

---

## 📊 Step 14: Bundle Analysis (Optional)

### Install Analyzer
```bash
npm install --save-dev rollup-plugin-visualizer
```

### Update vite.config.ts
```ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});
```

### Build & Analyze
```bash
npm run build
```
- [ ] Check for large dependencies
- [ ] Verify code splitting is working
- [ ] Look for duplicate code

---

## ✅ Final Checklist

Before considering Phase 1 complete:

### Functionality
- [ ] All pages load without errors
- [ ] All animations work smoothly
- [ ] Lazy loading works
- [ ] Error boundary works
- [ ] SEO tags present
- [ ] Dark mode works
- [ ] Mobile responsive

### Performance
- [ ] Lighthouse score 90+
- [ ] Bundle size reduced
- [ ] Lazy loading verified
- [ ] No Framer Motion in bundle

### Code Quality
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Clean imports
- [ ] Design system components working

### Documentation
- [ ] Read PERFORMANCE_ASSESSMENT.md
- [ ] Read IMPLEMENTATION_SUMMARY.md
- [ ] Read MIGRATION_GUIDE.md
- [ ] Understand new patterns

---

## 🚀 Ready for Phase 2?

If all checkboxes above are ✅, you're ready to:

1. **Refactor remaining sections** (use MIGRATION_GUIDE.md)
2. **Implement React Router** (replace hash routing)
3. **Add image optimization** (WebP, srcset)
4. **Create more design system components**
5. **Add performance monitoring**

---

## 📞 Need Help?

### Common Resources
- **React Lazy Loading:** https://react.dev/reference/react/lazy
- **React Helmet Async:** https://github.com/staylor/react-helmet-async
- **CSS Animations:** https://web.dev/animations-guide/
- **IntersectionObserver:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Debug Checklist
1. Check browser console for errors
2. Check Network tab for failed requests
3. Verify file imports are correct
4. Test in incognito mode (clear cache)
5. Compare with working FeaturedWork.tsx

---

**Version:** 1.0
**Last Updated:** November 21, 2024
**Status:** Ready for Verification
