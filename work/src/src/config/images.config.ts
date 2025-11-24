/**
 * IMAGES CONFIGURATION
 * 
 * Central location for all image URLs and alt text.
 * Update image URLs here to change them across the entire site.
 * 
 * CURRENT STATUS: All images are using working Unsplash placeholder URLs.
 * Replace with your actual images when ready.
 */

// ============================================
// HERO SECTION - STACKED PHOTO CARDS
// ============================================

export const HERO_IMAGES = {
  artCards: [
    {
      id: 'reality',
      name: 'Reality',
      src: 'https://images.unsplash.com/photo-1681235014294-588fea095706?w=800',
      alt: 'Abstract reality artwork',
      // Recommended specs: 800x1067px (3:4 portrait), <200KB
    },
    {
      id: 'pen-art',
      name: 'Pen Art',
      src: 'https://images.unsplash.com/photo-1656448351130-9ad556aa4194?w=800',
      alt: 'Colorful pen drawing artwork',
      // Recommended specs: 800x1067px (3:4 portrait), <200KB
    },
    {
      id: 'watercolor',
      name: 'Watercolor',
      src: 'https://images.unsplash.com/photo-1713815539197-78db123d8f3e?w=800',
      alt: 'Watercolor painting artwork',
      // Recommended specs: 800x1067px (3:4 portrait), <200KB
    },
    {
      id: 'acrylic',
      name: 'Acrylic',
      src: 'https://images.unsplash.com/photo-1690288988059-c8d77a6d6ccc?w=800',
      alt: 'Acrylic paint artwork',
      // Recommended specs: 800x1067px (3:4 portrait), <200KB
    },
  ],
} as const;

// ============================================
// SPEAKING EVENTS CAROUSEL
// ============================================

export const SPEAKING_IMAGES = {
  events: [
    {
      id: 'event-1',
      src: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?w=800',
      alt: 'Conference speaking event',
      caption: 'Tech Conference 2024',
      // Recommended specs: 800x600px (4:3), <150KB
    },
    {
      id: 'event-2',
      src: 'https://images.unsplash.com/photo-1561491431-71b89da6056a?w=800',
      alt: 'Panel discussion event',
      caption: 'Product Leadership Panel',
      // Recommended specs: 800x600px (4:3), <150KB
    },
    {
      id: 'event-3',
      src: 'https://images.unsplash.com/photo-1759873066311-ce4966c249ac?w=800',
      alt: 'Professional networking event',
      caption: 'AI Summit Keynote',
      // Recommended specs: 800x600px (4:3), <150KB
    },
  ],
} as const;

// ============================================
// PROJECT IMAGES
// ============================================

export const PROJECT_IMAGES = {
  opal: {
    // Card thumbnail (shown on main page)
    card: {
      src: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=800',
      alt: 'Opal AI platform interface',
      // Recommended specs: 800x600px (4:3), <200KB
    },
    
    // Detail page hero image
    hero: {
      src: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=1920',
      alt: 'Opal AI platform - Create AI mini-apps with natural language',
      // Recommended specs: 1920x1080px (16:9), <500KB
    },
    
    // Gallery images (shown on detail page)
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?w=1200',
        alt: 'Opal interface showing AI app creation',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?w=1200',
        alt: 'Opal dashboard with multiple AI apps',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1756723903184-32fed816ea5d?w=1200',
        alt: 'Opal collaboration features',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
    ],
  },
  
  mixboard: {
    card: {
      src: 'https://images.unsplash.com/photo-1552233697-193249b08f5f?w=800',
      alt: 'Mixboard creative visualization tool',
      // Recommended specs: 800x600px (4:3), <200KB
    },
    
    hero: {
      src: 'https://images.unsplash.com/photo-1552233697-193249b08f5f?w=1920',
      alt: 'Mixboard - AI-powered creative brainstorming canvas',
      // Recommended specs: 1920x1080px (16:9), <500KB
    },
    
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1558403194-611308249627?w=1200',
        alt: 'Mixboard visual idea organization',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200',
        alt: 'Mixboard AI-assisted brainstorming',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
        alt: 'Mixboard creative collaboration',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
    ],
  },
  
  pomelli: {
    card: {
      src: 'https://images.unsplash.com/photo-1675119717007-ad04bd2a9d10?w=800',
      alt: 'Pomelli small business content generation',
      // Recommended specs: 800x600px (4:3), <200KB
    },
    
    hero: {
      src: 'https://images.unsplash.com/photo-1675119717007-ad04bd2a9d10?w=1920',
      alt: 'Pomelli - On-brand content creation for small businesses',
      // Recommended specs: 1920x1080px (16:9), <500KB
    },
    
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
        alt: 'Pomelli brand-consistent content generation',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200',
        alt: 'Pomelli social media content creator',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
      {
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200',
        alt: 'Pomelli marketing materials generator',
        // Recommended specs: 1200x800px (3:2), <300KB
      },
    ],
  },
} as const;

// ============================================
// BLOG IMAGES
// ============================================

export const BLOG_IMAGES = {
  featured: {
    'raising-ai-native-kids': {
      src: 'https://images.unsplash.com/photo-1759646827278-27c5733e0cee?w=1200',
      alt: 'Children learning with AI technology',
      // Recommended specs: 1200x630px (16:9), <200KB
    },
  },
} as const;

// ============================================
// BRAND ASSETS
// ============================================

export const BRAND_IMAGES = {
  // Logo (if you have one)
  logo: {
    light: '/logo-light.svg', // Place in /public folder
    dark: '/logo-dark.svg',   // Place in /public folder
    alt: 'Jaclyn Konzelmann logo',
  },
  
  // Favicon
  favicon: '/favicon.ico', // Place in /public folder
  
  // Open Graph image (social sharing)
  ogImage: '/og-image.jpg', // Place in /public folder (1200x630px)
  
  // Avatar / Profile photo
  avatar: '/avatar.jpg', // Place in /public folder
} as const;

// ============================================
// IMAGE PATHS (FOR LOCAL IMAGES)
// ============================================

// When you move to local images, update these paths
export const LOCAL_IMAGE_PATHS = {
  hero: '/images/hero',
  speaking: '/images/speaking',
  projects: {
    cards: '/images/projects/cards',
    details: '/images/projects/details',
  },
  blog: '/images/blog',
  brand: '/images/brand',
} as const;

// ============================================
// IMAGE SPECIFICATIONS
// ============================================

export const IMAGE_SPECS = {
  hero: {
    width: 800,
    height: 1067,
    aspectRatio: '3:4',
    format: 'jpg',
    maxSize: 200, // KB
  },
  
  speaking: {
    width: 800,
    height: 600,
    aspectRatio: '4:3',
    format: 'jpg',
    maxSize: 150, // KB
  },
  
  projectCard: {
    width: 800,
    height: 600,
    aspectRatio: '4:3',
    format: 'jpg',
    maxSize: 200, // KB
  },
  
  projectHero: {
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    format: 'jpg',
    maxSize: 500, // KB
  },
  
  projectGallery: {
    width: 1200,
    height: 800,
    aspectRatio: '3:2',
    format: 'jpg',
    maxSize: 300, // KB
  },
  
  blogFeatured: {
    width: 1200,
    height: 630,
    aspectRatio: '16:9',
    format: 'jpg',
    maxSize: 200, // KB
  },
  
  ogImage: {
    width: 1200,
    height: 630,
    aspectRatio: '1.91:1',
    format: 'jpg',
    maxSize: 200, // KB
  },
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all hero images as array
 * @returns Array of hero image objects
 */
export function getHeroImages() {
  return HERO_IMAGES.artCards;
}

/**
 * Get all speaking event images as array
 * @returns Array of speaking event image objects
 */
export function getSpeakingImages() {
  return SPEAKING_IMAGES.events;
}

/**
 * Get project images by project ID
 * @param projectId - Project identifier (opal, mixboard, pomelli)
 * @returns Project image object or undefined
 */
export function getProjectImages(projectId: keyof typeof PROJECT_IMAGES) {
  return PROJECT_IMAGES[projectId];
}

/**
 * Get blog featured image by slug
 * @param slug - Blog post slug
 * @returns Featured image object or undefined
 */
export function getBlogFeaturedImage(slug: string) {
  return BLOG_IMAGES.featured[slug as keyof typeof BLOG_IMAGES.featured];
}

/**
 * Construct local image path
 * @example getLocalImagePath('hero', 'reality.jpg') // Returns: '/images/hero/reality.jpg'
 */
export function getLocalImagePath(category: string, filename: string): string {
  return `${LOCAL_IMAGE_PATHS.hero}/${filename}`;
}

/**
 * Get optimized image URL (add parameters for CDN optimization)
 * @example getOptimizedImageUrl('https://...', { w: 800, q: 80 })
 */
export function getOptimizedImageUrl(
  src: string,
  options?: { w?: number; h?: number; q?: number; fit?: string }
): string {
  // If using Unsplash, Cloudinary, or Imgix, add optimization params
  // For now, returns the original URL
  // Implement CDN-specific logic when moving to production CDN
  return src;
}

/**
 * Check if image URL is external
 */
export function isExternalImage(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://');
}

// ============================================
// MIGRATION HELPER
// ============================================

/**
 * When migrating to local images, use this to update all references:
 * 
 * 1. Download images to /public/images/ folders
 * 2. Update the IMAGE URLs in this file to use local paths:
 *    - Change: 'https://images.unsplash.com/...'
 *    - To: '/images/hero/reality.jpg'
 * 
 * 3. No need to update any other files - all components import from here
 */

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// Example 1: Using in components
import { HERO_IMAGES } from '@/config/images.config';

{HERO_IMAGES.artCards.map(image => (
  <img key={image.id} src={image.src} alt={image.alt} />
))}

// Example 2: Using project images
import { PROJECT_IMAGES } from '@/config/images.config';

<img 
  src={PROJECT_IMAGES.opal.card.src} 
  alt={PROJECT_IMAGES.opal.card.alt} 
/>

// Example 3: Using helper functions
import { getProjectImages } from '@/config/images.config';

const opalImages = getProjectImages('opal');
<img src={opalImages.hero.src} alt={opalImages.hero.alt} />

// Example 4: Accessing specifications
import { IMAGE_SPECS } from '@/config/images.config';

console.log(`Hero images should be ${IMAGE_SPECS.hero.width}x${IMAGE_SPECS.hero.height}`);

*/
