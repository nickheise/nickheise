# Navigation Component Guide

## Overview
The navigation system is built with performance, accessibility, and scalability in mind. It uses semantic HTML, ARIA attributes, and optimized event handlers for a consistent cross-browser experience.

---

## Architecture

### Centralized Configuration (`NAV_CONFIG`)
All navigation items are defined in a single configuration object for easy maintenance:

```typescript
const NAV_CONFIG = {
  mainItems: [
    { name: 'Work', href: '#work', ariaLabel: 'Navigate to work section' },
    { name: 'Experience', href: '#experience', ariaLabel: 'Navigate to experience section' },
    { name: 'Personal', href: '#personal', ariaLabel: 'Navigate to personal section' }
  ],
  actions: {
    blog: { 
      label: 'Blog', 
      href: '#blog',
      ariaLabel: 'Read blog posts'
    },
    resume: { 
      label: 'Resume', 
      href: '/resume.pdf',
      ariaLabel: 'Download resume PDF',
      icon: Download
    }
  }
}
```

**Benefits:**
- ✅ Single source of truth for all nav items
- ✅ Easy to add/remove/reorder items
- ✅ Consistent labeling across desktop/mobile
- ✅ Type-safe with TypeScript

---

## Performance Optimizations

### 1. **Scroll Detection with requestAnimationFrame**
```typescript
useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Benefits:**
- ⚡ Prevents scroll jank by batching DOM reads/writes
- ⚡ Uses passive listeners for better scroll performance
- ⚡ Throttles updates to 60fps max

### 2. **Pure CSS Animations**
The nav hover effect uses CSS animations instead of JavaScript:
```css
.nav-item-hover:hover::before {
  animation: navPop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

**Benefits:**
- ⚡ GPU-accelerated animations
- ⚡ No JavaScript overhead
- ⚡ Consistent 60fps performance

### 3. **Staggered Mobile Menu Animations**
```typescript
style={{
  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
}}
```

**Benefits:**
- 🎨 Elegant entrance effect
- ⚡ Pure CSS transitions (no animation library)
- ⚡ Minimal bundle size impact

---

## Accessibility Features

### 1. **Semantic HTML**
- `<header role="banner">` - Identifies main page header
- `<nav role="navigation">` - Identifies navigation regions
- `<button>` for interactive elements (not `<div>` or `<a>` without href)

### 2. **ARIA Attributes**
All interactive elements have proper ARIA labels:
```tsx
<button
  aria-label="Navigate to work section"
  aria-expanded={mobileMenuOpen}
  aria-controls="mobile-menu"
  aria-pressed={isDarkMode}
>
```

### 3. **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Focus management on smooth scroll
- Visual focus indicators (browser default + custom)

### 4. **Screen Reader Support**
- Descriptive labels for icon-only buttons
- Proper heading hierarchy
- Mobile menu announced as dialog with `role="dialog"`

### 5. **Focus Management**
```typescript
const handleNavClick = (href: string, event?: React.MouseEvent) => {
  event?.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      (element as HTMLElement).focus({ preventScroll: true });
    }, 300);
  }
};
```

---

## Cross-Browser Compatibility

### 1. **Mobile Viewport Height**
Uses `100dvh` instead of `100vh` for better mobile browser support:
```tsx
className="h-[100dvh]" // Dynamic viewport height
```

**Benefits:**
- ✅ Accounts for mobile browser chrome (address bar, bottom nav)
- ✅ Works on iOS Safari, Chrome Mobile, Firefox Mobile

### 2. **Backdrop Blur**
Uses conditional backdrop-blur for performance:
```tsx
className="backdrop-blur-md" // Only when scrolled
```

**Benefits:**
- ✅ Graceful degradation on older browsers
- ✅ Hardware-accelerated on modern browsers

### 3. **Touch-Friendly Targets**
All interactive elements meet WCAG 2.1 touch target size (44×44px minimum):
```tsx
className="p-2" // Provides adequate touch area
```

---

## Responsive Design

### Desktop (lg+)
- Horizontal navigation
- Reduced horizontal spacing (`gap-2` instead of `gap-8`)
- Icon-only resume button
- Filled blog button (always dark)
- Theme toggle with cursor pointer

### Mobile/Tablet
- Hamburger menu
- Full-screen overlay
- Center-aligned menu items
- Filled blog button (dark background)
- Icon-only resume download
- Smooth staggered animations

---

## Design Decisions

### 1. **Reduced Horizontal Spacing**
Changed from `gap-8` to `gap-2` for tighter desktop nav:
```tsx
<nav className="hidden lg:flex items-center gap-2">
```

### 2. **Consistent Blog Button**
Always uses filled dark background (both light & dark mode):
```tsx
className="bg-stone-900 dark:bg-stone-900 text-white dark:text-white"
```

### 3. **Icon-Only Resume**
Desktop shows only download icon, mobile shows larger icon in circle:
```tsx
// Desktop
<Download size={16} />

// Mobile
<Download size={24} />
```

### 4. **Cursor States**
All interactive elements have explicit cursor pointer:
```tsx
className="cursor-pointer"
```

### 5. **Dark Mode Consistency**
Nav items have consistent hover states in dark mode via CSS:
```css
.dark .nav-item-hover::before {
  background-color: rgb(41 37 36); /* stone-800 */
}
```

---

## How to Update

### Add a New Nav Item
1. Add to `NAV_CONFIG.mainItems`:
```typescript
{ name: 'Projects', href: '#projects', ariaLabel: 'Navigate to projects section' }
```
2. Create corresponding section with `id="projects"`
3. Done! Auto-updates in desktop and mobile.

### Change Button Style
Update the `NAV_CONFIG.actions` object:
```typescript
blog: { 
  label: 'Articles', // Changed from 'Blog'
  href: '#articles',
  ariaLabel: 'Read articles'
}
```

### Modify Animations
Edit `/styles/animations.css`:
- `navPop` keyframe for hover effect
- Transition delays in Header component

### Update Spacing
Modify `gap-*` utility classes in the nav container:
```tsx
<nav className="hidden lg:flex items-center gap-3"> {/* Change 2 to 3 */}
```

---

## Testing Checklist

### Functionality
- [ ] All nav links scroll to correct sections
- [ ] Mobile menu opens/closes smoothly
- [ ] Theme toggle works in both modes
- [ ] Resume downloads correctly
- [ ] Blog link navigates properly

### Accessibility
- [ ] Tab navigation works through all items
- [ ] Screen reader announces all elements correctly
- [ ] Focus indicators are visible
- [ ] ARIA labels are descriptive
- [ ] Mobile menu has proper dialog semantics

### Performance
- [ ] No scroll jank (check Chrome DevTools Performance tab)
- [ ] Animations run at 60fps
- [ ] No layout shifts on scroll
- [ ] Fast Time to Interactive (TTI)

### Cross-Browser
- [ ] Chrome/Edge (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (macOS & iOS)
- [ ] Samsung Internet
- [ ] Opera

### Responsive
- [ ] Desktop nav appears at lg breakpoint
- [ ] Mobile menu works on small screens
- [ ] Touch targets are adequate (44×44px min)
- [ ] No horizontal scroll on any device
- [ ] Viewport height works correctly on mobile

---

## Performance Metrics

Target metrics for navigation:
- **First Contentful Paint (FCP):** < 1.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Animation FPS:** 60fps
- **Bundle Size Impact:** < 5KB (gzipped)

---

## Common Issues & Solutions

### Issue: Menu doesn't close after navigation
**Solution:** Ensure `handleNavClick` includes `setMobileMenuOpen(false)`

### Issue: Scroll jank on mobile
**Solution:** Verify `{ passive: true }` is set on scroll listener

### Issue: Dark mode hover not working
**Solution:** Check that `.dark` class is applied to root element

### Issue: Focus outline not visible
**Solution:** Don't remove default outline, enhance with custom styles

### Issue: Touch targets too small
**Solution:** Ensure minimum `p-2` padding on all interactive elements

---

## Browser Support

- **Chrome/Edge:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **iOS Safari:** 14+
- **Samsung Internet:** 15+

---

## Future Enhancements

Potential improvements for future iterations:

1. **Scroll Progress Indicator**
   - Show reading progress on blog articles
   - Use `position: sticky` + IntersectionObserver

2. **Active Section Highlighting**
   - Highlight current section in nav
   - Use IntersectionObserver to detect active section

3. **Reduced Motion Support**
   - Respect `prefers-reduced-motion`
   - Disable animations for users who prefer it

4. **Search Integration**
   - Add search button to nav
   - Open search modal/overlay

5. **Breadcrumb Navigation**
   - Show current location in deep pages
   - Improve navigation context
