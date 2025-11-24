/**
 * DESIGN SYSTEM CONFIGURATION
 * 
 * Central location for all design tokens: colors, typography, spacing, etc.
 * These values complement the CSS variables in /styles/globals.css
 * 
 * Use this file for design values that need to be accessed in JavaScript/TypeScript.
 */

// ============================================
// TYPOGRAPHY
// ============================================

export const TYPOGRAPHY = {
  // Font families (must match globals.css imports)
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
  },
  
  // Font sizes (in rem - relative to root 16px)
  // NOTE: Prefer using default typography from globals.css
  // Only use these for programmatic calculations
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================
// COLORS (STONE PALETTE)
// ============================================

export const COLORS = {
  // Stone palette (primary colors)
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },
  
  // Semantic colors
  semantic: {
    success: '#10b981', // green-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444',   // red-500
    info: '#3b82f6',    // blue-500
  },
  
  // Background colors (light/dark)
  background: {
    light: '#fafaf9', // stone-50
    dark: '#292524',  // stone-800
  },
} as const;

// ============================================
// SPACING SCALE
// ============================================

export const SPACING = {
  // Tailwind spacing scale (in rem)
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const BREAKPOINTS = {
  // Mobile first breakpoints
  sm: '640px',   // Small devices (phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
  
  // Pixel values for JS calculations
  values: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const RADIUS = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded
  
  // Named radius from globals.css
  default: '0.625rem', // 10px (--radius)
} as const;

// ============================================
// SHADOWS
// ============================================

export const SHADOWS = {
  // Standard card shadow (used throughout site)
  card: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  
  // Tailwind shadow scale
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  // No shadow
  none: 'none',
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================

export const Z_INDEX = {
  // Organized from lowest to highest
  behind: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700,
  max: 9999,
} as const;

// ============================================
// CONTAINER WIDTHS
// ============================================

export const CONTAINER = {
  // Max widths for content containers
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
  
  // Content widths (used throughout site)
  content: {
    narrow: '640px',   // Blog posts, forms
    standard: '1024px', // Default content width
    wide: '1280px',    // Wide sections
    full: '100%',      // Full width
  },
  
  // Padding (horizontal spacing inside containers)
  padding: {
    mobile: '1rem',    // 16px
    tablet: '2rem',    // 32px
    desktop: '3rem',   // 48px
  },
} as const;

// ============================================
// OPACITY SCALE
// ============================================

export const OPACITY = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;

// ============================================
// BLUR VALUES
// ============================================

export const BLUR = {
  none: '0',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const;

// ============================================
// ICON SIZES
// ============================================

export const ICON_SIZES = {
  // Standard icon sizes (lucide-react)
  xs: 12,
  sm: 16,
  base: 20,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48,
  
  // Named sizes for specific contexts
  button: 20,      // Icons in buttons
  nav: 20,         // Navigation icons
  card: 24,        // Card header icons
  hero: 32,        // Hero section icons
} as const;

// ============================================
// CARD STYLES
// ============================================

export const CARD_STYLES = {
  // Standard card styling (used throughout site)
  default: {
    border: 'border border-stone-200 dark:border-stone-600',
    shadow: 'shadow-sm',
    radius: 'rounded-2xl',
    background: 'bg-white dark:bg-stone-900',
    padding: {
      mobile: 'p-6',
      desktop: 'p-8',
    },
  },
  
  // Hover effects
  hover: {
    scale: 'hover:scale-[1.02]',
    shadow: 'hover:shadow-md',
    transition: 'transition-all duration-300',
  },
} as const;

// ============================================
// BUTTON STYLES
// ============================================

export const BUTTON_STYLES = {
  // Primary button
  primary: {
    base: 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900',
    hover: 'hover:bg-stone-800 dark:hover:bg-stone-200',
    active: 'active:scale-95',
    transition: 'transition-all duration-150',
  },
  
  // Secondary button
  secondary: {
    base: 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100',
    hover: 'hover:bg-stone-200 dark:hover:bg-stone-700',
    active: 'active:scale-95',
    transition: 'transition-all duration-150',
  },
  
  // Ghost button
  ghost: {
    base: 'bg-transparent text-stone-900 dark:text-stone-100',
    hover: 'hover:bg-stone-100 dark:hover:bg-stone-800',
    active: 'active:scale-95',
    transition: 'transition-all duration-150',
  },
  
  // Sizes
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  },
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Convert rem to pixels
 * @example remToPx('1.5rem', 16) // Returns: 24
 */
export function remToPx(rem: string, baseFontSize: number = 16): number {
  const value = parseFloat(rem);
  return value * baseFontSize;
}

/**
 * Convert pixels to rem
 * @example pxToRem(24, 16) // Returns: '1.5rem'
 */
export function pxToRem(px: number, baseFontSize: number = 16): string {
  return `${px / baseFontSize}rem`;
}

/**
 * Get responsive value based on breakpoint
 * @example getResponsiveValue({ sm: '1rem', md: '2rem', lg: '3rem' }, 'md') // Returns: '2rem'
 */
export function getResponsiveValue<T>(
  values: Partial<Record<keyof typeof BREAKPOINTS, T>>,
  breakpoint: keyof typeof BREAKPOINTS
): T | undefined {
  return values[breakpoint];
}

/**
 * Check if current viewport is at or above a breakpoint
 * @example isBreakpoint('md') // Returns: true if viewport >= 768px
 */
export function isBreakpoint(breakpoint: keyof typeof BREAKPOINTS.values): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.values[breakpoint];
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// Example 1: Using typography
import { TYPOGRAPHY } from '@/config/design.config';

<h1 style={{ fontFamily: TYPOGRAPHY.fonts.serif }}>
  Title
</h1>

// Example 2: Using colors programmatically
import { COLORS } from '@/config/design.config';

const style = {
  backgroundColor: COLORS.stone[50],
  color: COLORS.stone[900],
};

// Example 3: Using icon sizes
import { Icon } from 'lucide-react';
import { ICON_SIZES } from '@/config/design.config';

<Icon size={ICON_SIZES.button} />

// Example 4: Using z-index
import { Z_INDEX } from '@/config/design.config';

<div style={{ zIndex: Z_INDEX.modal }}>
  Modal content
</div>

// Example 5: Responsive values
import { isBreakpoint } from '@/config/design.config';

const size = isBreakpoint('md') ? 'large' : 'small';

*/
