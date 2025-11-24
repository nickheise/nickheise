/**
 * CONFIGURATION INDEX
 * 
 * Central export point for all configuration files.
 * Import everything you need from this single file.
 * 
 * @example
 * import { PERSONAL_INFO, HERO_IMAGES, ANIMATION_DURATION } from '@/config';
 */

// Content Configuration
export * from './content.config';

// Images Configuration
export * from './images.config';

// Animations Configuration
export * from './animations.config';

// Design System Configuration
export * from './design.config';

/**
 * USAGE EXAMPLES
 * 
 * Instead of importing from individual files:
 * import { PERSONAL_INFO } from '@/config/content.config';
 * import { HERO_IMAGES } from '@/config/images.config';
 * 
 * You can import everything from this single file:
 * import { PERSONAL_INFO, HERO_IMAGES, ANIMATION_DURATION } from '@/config';
 * 
 * This keeps imports clean and organized.
 */
