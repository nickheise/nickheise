/**
 * CONTENT CONFIGURATION
 * 
 * Central location for all site content, metadata, and URLs.
 * Edit this file to update content across the entire site.
 */

// ============================================
// PERSONAL INFORMATION
// ============================================

export const PERSONAL_INFO = {
  name: 'Jaclyn Konzelmann',
  title: 'Product Leader & AI Innovator',
  email: 'hello@jaclynkonzelmann.com', // Update with your actual email
  
  // Bio text (used in multiple locations)
  shortBio: 'Product leader focused on building AI products that matter. Currently at Google, working on tools that make AI accessible to everyone.',
  
  longBio: `Product leader passionate about building AI products that empower people. Currently at Google, I lead teams creating innovative AI experiences that make technology more accessible and useful. 
  
My work spans from consumer AI tools to developer platforms, always with a focus on user-centered design and responsible AI development.
  
When I'm not building products, I'm mentoring PMs, speaking about AI and product strategy, or experimenting with creative side projects.`,
} as const;

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jaclynkonzelmann',
  twitter: 'https://twitter.com/jaclynk', // Update with your actual handle
  github: 'https://github.com/jaclynk', // Update with your actual handle
  medium: '', // Add if you have a Medium profile
  substack: '', // Add if you have a Substack
} as const;

// ============================================
// NAVIGATION
// ============================================

export const NAVIGATION = {
  // Main navigation items (shown in header)
  main: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Patents', href: '#patents' },
    { label: 'Personal', href: '#personal' },
    { label: 'Connect', href: '#connect' },
  ],
  
  // Footer navigation (if different from main nav)
  footer: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

// ============================================
// SECTION TITLES & DESCRIPTIONS
// ============================================

export const SECTIONS = {
  hero: {
    tagline: 'Building products that matter',
    subtitle: 'Product leader focused on creating AI experiences that are powerful, accessible, and trustworthy.',
    ctaText: 'View my work',
  },
  
  work: {
    title: 'Featured Work',
    subtitle: 'Recent projects and products I\'ve led at Google',
    sectionId: 'work',
  },
  
  experience: {
    title: 'Experience',
    subtitle: 'Building products at the intersection of AI and human creativity',
    sectionId: 'experience',
  },
  
  patents: {
    title: 'Patents & Innovation',
    subtitle: 'Contributions to advancing technology and protecting intellectual property',
    sectionId: 'patents',
  },
  
  personal: {
    title: 'Side Projects & Interests',
    subtitle: 'Passion projects, experiments, and creative explorations',
    sectionId: 'personal',
  },
  
  connect: {
    title: 'Let\'s Connect',
    subtitle: 'Always open to interesting conversations about product, AI, and building things that matter',
    sectionId: 'connect',
  },
} as const;

// ============================================
// CALL-TO-ACTION BUTTONS
// ============================================

export const CTA_BUTTONS = {
  // Primary CTAs
  viewWork: {
    text: 'View Featured Work',
    href: '#work',
  },
  
  getInTouch: {
    text: 'Get in Touch',
    href: '#connect',
  },
  
  downloadResume: {
    text: 'Download Resume',
    href: '/resume.pdf', // Place your resume PDF in /public folder
    download: true,
  },
  
  // Social CTAs
  linkedin: {
    text: 'Connect on LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    external: true,
  },
  
  // Project CTAs
  viewProject: {
    text: 'View Project',
  },
  
  viewDetails: {
    text: 'Learn More',
  },
} as const;

// ============================================
// SEO & METADATA
// ============================================

export const SEO = {
  defaultTitle: 'Jaclyn Konzelmann - Product Leader & AI Innovator',
  titleTemplate: '%s | Jaclyn Konzelmann',
  description: 'Product leader building AI products at Google. Focused on making AI accessible, useful, and trustworthy for everyone.',
  
  // Open Graph / Social sharing
  ogImage: '/og-image.jpg', // Place your OG image in /public folder (1200x630px)
  twitterCard: 'summary_large_image',
  twitterHandle: '@jaclynk', // Update with your actual handle
  
  // Canonical URL
  siteUrl: 'https://www.jaclynkonzelmann.com',
  
  // Keywords
  keywords: [
    'Product Leader',
    'AI Innovation',
    'Google',
    'Product Management',
    'Artificial Intelligence',
    'User Experience',
    'Technology',
  ],
} as const;

// ============================================
// CONTACT FORM
// ============================================

export const CONTACT_FORM = {
  // Form fields configuration
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name',
      required: true,
    },
    email: {
      label: 'Email',
      placeholder: 'your@email.com',
      required: true,
    },
    message: {
      label: 'Message',
      placeholder: 'Tell me about your project or idea...',
      required: true,
      rows: 6,
    },
  },
  
  // Submit button
  submitText: 'Send Message',
  
  // Success/error messages
  messages: {
    success: 'Thanks for reaching out! I\'ll get back to you soon.',
    error: 'Oops! Something went wrong. Please try again or email me directly.',
  },
  
  // Form submission endpoint (replace with your actual endpoint)
  endpoint: '/api/contact', // Or use services like Formspree, Netlify Forms, etc.
} as const;

// ============================================
// FOOTER
// ============================================

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Jaclyn Konzelmann. All rights reserved.`,
  
  // Footer tagline
  tagline: 'Building products that empower people.',
  
  // Show/hide elements
  showSocialLinks: true,
  showNavigation: true,
  showNewsletter: false, // Enable if you have newsletter signup
} as const;

// ============================================
// FEATURES / CAPABILITIES
// ============================================

export const FEATURES = {
  // Enable/disable site features
  darkMode: true,
  animations: true,
  blogSection: false, // Set to true when blog is ready
  testimonials: false, // Set to true when you have testimonials
  newsletter: false, // Set to true when newsletter is ready
  analytics: false, // Set to true when analytics is configured
} as const;

// ============================================
// ANALYTICS
// ============================================

export const ANALYTICS = {
  // Google Analytics
  googleAnalyticsId: '', // Add your GA4 measurement ID: G-XXXXXXXXXX
  
  // Plausible Analytics (privacy-focused alternative)
  plausibleDomain: '', // Add your domain if using Plausible
  
  // Simple Analytics
  simpleAnalyticsDomain: '', // Add your domain if using Simple Analytics
} as const;

// ============================================
// PERFORMANCE
// ============================================

export const PERFORMANCE = {
  // Image loading strategy
  imageLoading: {
    eager: ['hero'], // Load immediately
    lazy: ['projects', 'speaking'], // Lazy load
  },
  
  // Preload critical assets
  preloadFonts: true,
  
  // Animation preferences
  respectReducedMotion: true,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get full page title
 * @example getPageTitle('Projects') // Returns: "Projects | Jaclyn Konzelmann"
 */
export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return SEO.defaultTitle;
  return SEO.titleTemplate.replace('%s', pageTitle);
}

/**
 * Get full URL for a path
 * @example getFullUrl('/projects/opal') // Returns: "https://www.jaclynkonzelmann.com/projects/opal"
 */
export function getFullUrl(path: string): string {
  return `${SEO.siteUrl}${path}`;
}

/**
 * Check if a link is external
 * @example isExternalLink('https://google.com') // Returns: true
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

/**
 * Get current year (for copyright)
 * @example getCurrentYear() // Returns: 2024
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// Example 1: Using personal info
import { PERSONAL_INFO } from '@/config/content.config';

<h1>{PERSONAL_INFO.name}</h1>
<p>{PERSONAL_INFO.shortBio}</p>

// Example 2: Using section config
import { SECTIONS } from '@/config/content.config';

<h2>{SECTIONS.work.title}</h2>
<p>{SECTIONS.work.subtitle}</p>

// Example 3: Using CTAs
import { CTA_BUTTONS } from '@/config/content.config';

<a href={CTA_BUTTONS.linkedin.href}>
  {CTA_BUTTONS.linkedin.text}
</a>

// Example 4: Using SEO
import { SEO, getPageTitle } from '@/config/content.config';

<Head>
  <title>{getPageTitle('Projects')}</title>
  <meta name="description" content={SEO.description} />
</Head>

// Example 5: Checking features
import { FEATURES } from '@/config/content.config';

{FEATURES.blogSection && <BlogSection />}

*/
