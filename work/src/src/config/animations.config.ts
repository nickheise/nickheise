/**
 * ANIMATION CONFIGURATION
 * 
 * Central location for all animation values and timing functions.
 * Modify these values to adjust animations site-wide.
 * 
 * IMPORTANT: All values are optimized for 60fps performance.
 * Changing these may affect performance on lower-end devices.
 */

// ============================================
// ANIMATION DURATIONS (in milliseconds)
// ============================================

export const ANIMATION_DURATION = {
  // Fast interactions (buttons, hovers)
  instant: 150,
  fast: 300,
  
  // Standard animations (fade-ins, transitions)
  normal: 400,
  medium: 600,
  
  // Slower, more dramatic effects
  slow: 800,
  slower: 1000,
  slowest: 1200,
  
  // Continuous animations
  float: 6000,
  floatDelayed: 8000,
  pulseSlow: 4000,
  scroll: 60000,
  scrollSlow: 90000,
} as const;

// ============================================
// EASING FUNCTIONS
// ============================================

export const EASING = {
  // Standard easing
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Custom spring-like easing (used throughout site)
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
  
  // Bounce effect
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  // Linear (for continuous animations)
  linear: 'linear',
} as const;

// ============================================
// ANIMATION DELAYS (in milliseconds)
// ============================================

export const ANIMATION_DELAY = {
  none: 0,
  tiny: 50,
  short: 100,
  base: 150,
  medium: 200,
  long: 300,
  longer: 400,
  longest: 500,
  extraLong: 1000,
} as const;

// ============================================
// STAGGER TIMING
// Used for sequential animations (cards appearing one by one)
// ============================================

export const STAGGER = {
  // Delay between each item in a list
  fast: 50,
  normal: 100,
  slow: 150,
  slower: 200,
} as const;

// ============================================
// TRANSFORM VALUES
// ============================================

export const TRANSFORM = {
  // Y-axis translation (fade up/down effects)
  translateY: {
    small: 8,     // Subtle movement (bio cards)
    medium: 20,   // Standard (most scroll reveals)
    large: 30,    // Prominent (hero sections)
  },
  
  // Scale values (zoom effects)
  scale: {
    min: 0.92,    // Starting scale for scale-in animations
    hover: 1.02,  // Hover effect scale
    active: 0.98, // Click/active state
    max: 1.05,    // Float animation peak
  },
} as const;

// ============================================
// INTERSECTION OBSERVER CONFIG
// Used for scroll-based animations
// ============================================

export const INTERSECTION_CONFIG = {
  // How much of element must be visible to trigger
  threshold: {
    minimal: 0.05,   // Trigger very early
    small: 0.1,      // Default for most elements
    partial: 0.25,   // Quarter visible
    half: 0.5,       // Half visible
    full: 1.0,       // Completely visible
  },
  
  // Root margin (trigger before element enters viewport)
  rootMargin: {
    none: '0px',
    small: '-50px',   // Trigger 50px before entering
    medium: '-100px', // Trigger 100px before
    large: '-200px',  // Trigger 200px before
  },
  
  // Whether animation triggers once or repeatedly
  triggerOnce: true, // Default: only animate once when scrolling into view
} as const;

// ============================================
// HOVER EFFECTS
// ============================================

export const HOVER = {
  // Card hover effects
  card: {
    scale: 1.02,
    translateY: -4,
    duration: ANIMATION_DURATION.fast,
    easing: EASING.spring,
  },
  
  // Button hover effects
  button: {
    scale: 1.05,
    duration: ANIMATION_DURATION.instant,
    easing: EASING.easeOut,
  },
  
  // Link hover effects
  link: {
    duration: ANIMATION_DURATION.instant,
    easing: EASING.easeOut,
  },
} as const;

// ============================================
// PAGE TRANSITIONS
// ============================================

export const PAGE_TRANSITION = {
  // Transition when navigating between pages
  duration: ANIMATION_DURATION.normal,
  exitDuration: ANIMATION_DURATION.fast,
  easing: EASING.spring,
} as const;

// ============================================
// PARALLAX EFFECTS
// ============================================

export const PARALLAX = {
  // Wave divider parallax speed multipliers
  wave: {
    foreground: 1.0,  // Moves at normal scroll speed
    background: 0.5,  // Moves at half scroll speed (creates depth)
  },
  
  // Hero section photo stack parallax
  heroPhotos: {
    enabled: true,
    intensity: 0.3, // How much photos move (0 = no parallax, 1 = full parallax)
  },
} as const;

// ============================================
// HERO SECTION PHOTO STACK
// ============================================

export const HERO_PHOTOS = {
  // Stack transformations
  scale: 0.715,      // 28.5% smaller than original (1 - 0.285)
  rotationBase: -8,  // Base rotation in degrees
  rotationStep: 4,   // Rotation increment per card
  
  // Spacing
  offsetStep: 18,    // Pixel offset between each card
  
  // Border
  borderWidth: 8,    // White border thickness (px)
  borderColor: '#ffffff', // Always white in light/dark modes
  
  // Responsive sizes (these are applied AFTER the 0.715 scale)
  size: {
    mobile: 202,     // Base size on mobile (px)
    tablet: 246,     // Base size on tablet (px)
    desktop: 275,    // Base size on desktop (px)
  },
  
  // Animation
  hoverScale: 1.05,  // Scale on hover
  hoverDuration: ANIMATION_DURATION.fast,
} as const;

// ============================================
// WAVE DIVIDERS
// ============================================

export const WAVE = {
  // Wave height
  height: {
    mobile: 60,
    desktop: 80,
  },
  
  // Wave animation
  duration: 20000, // 20 seconds per wave cycle
  easing: EASING.easeInOut,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate CSS animation string
 * @example getCSSAnimation('fadeInUp', 400, 'spring', 200) 
 * // Returns: "fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards"
 */
export function getCSSAnimation(
  name: string,
  duration: number = ANIMATION_DURATION.normal,
  easing: string = EASING.spring,
  delay: number = 0
): string {
  return `${name} ${duration}ms ${easing}${delay ? ` ${delay}ms` : ''} forwards`;
}

/**
 * Get staggered delay for list items
 * @example getStaggerDelay(2, 'normal') // Returns: 200 (index 2 * 100ms)
 */
export function getStaggerDelay(index: number, speed: keyof typeof STAGGER = 'normal'): number {
  return index * STAGGER[speed];
}

/**
 * Convert CSS custom property to JS value
 * @example getAnimationDurationCSS('normal') // Returns: '--duration-normal'
 */
export function getAnimationDurationCSS(key: keyof typeof ANIMATION_DURATION): string {
  return `${ANIMATION_DURATION[key]}ms`;
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// Example 1: Basic CSS animation class
<div className="animate-fade-in-up" style={{ animationDelay: `${ANIMATION_DELAY.medium}ms` }}>
  Content
</div>

// Example 2: Custom inline animation
<div style={{ 
  animation: getCSSAnimation('fadeInUp', ANIMATION_DURATION.slow, EASING.spring, ANIMATION_DELAY.medium)
}}>
  Content
</div>

// Example 3: Staggered list items
{items.map((item, index) => (
  <div 
    key={item.id}
    className="animate-fade-in-up"
    style={{ animationDelay: `${getStaggerDelay(index)}ms` }}
  >
    {item.content}
  </div>
))}

// Example 4: Using intersection observer config
const isVisible = useInView(ref, {
  threshold: INTERSECTION_CONFIG.threshold.small,
  rootMargin: INTERSECTION_CONFIG.rootMargin.none,
  triggerOnce: INTERSECTION_CONFIG.triggerOnce,
});

// Example 5: Custom hover effect
<button 
  className="transition-transform"
  style={{
    transitionDuration: `${HOVER.button.duration}ms`,
    transitionTimingFunction: HOVER.button.easing,
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${HOVER.button.scale})`}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  Hover me
</button>

*/
