/**
 * AUTOMATED SECTION CONFIGURATION SYSTEM
 * 
 * This system automatically handles:
 * - Section order
 * - Background color alternation (stone/white)
 * - Wave divider placement and colors
 * - Dark mode colors
 * 
 * TO ADD A NEW SECTION:
 * 1. Add the section ID to the SectionId type
 * 2. Add it to the SECTION_ORDER array in the correct position
 * 3. Use getSectionConfig() in your component
 * 4. Apply the returned bgClass and wave configurations
 * 
 * That's it! No manual color or wave configuration needed.
 */

export type SectionId = 
  | 'hero'
  | 'logos'
  | 'work'
  | 'where-started'
  | 'speaking'
  | 'experience'
  | 'bio'
  | 'patents'
  | 'personal'
  | 'thoughts'
  | 'faq'
  | 'connect';

/**
 * SINGLE SOURCE OF TRUTH: Define section order here
 * This must match the order in App.tsx
 */
export const SECTION_ORDER: SectionId[] = [
  'hero',           // 0 - stone background
  'logos',          // 1 - white background (Teams I've Collaborated With)
  'work',           // 2 - stone background
  'experience',     // 3 - white background
  'bio',            // 4 - stone background (Professional Bio)
  'patents',        // 5 - white background
  'where-started',  // 6 - stone background (Teaching, Mentorship & Speaking)
  'thoughts',       // 7 - white background
  'personal',       // 8 - stone background (Life Outside of Work)
  'faq',            // 9 - white background
  'connect'         // 10 - stone background
];

/**
 * Background color overrides for specific sections
 * Use this to override the alternating pattern for specific sections
 */
const BACKGROUND_OVERRIDES: Partial<Record<SectionId, 'white' | 'stone'>> = {
  // Add overrides here if needed
};

/**
 * Background color constants for light and dark mode
 */
const COLORS = {
  white: {
    light: '#ffffff',
    dark: '#292524',  // stone-800
    class: 'bg-white dark:bg-stone-800'
  },
  stone: {
    light: '#fafaf9', // stone-50
    dark: '#1c1917',  // stone-900
    class: 'bg-stone-50 dark:bg-stone-900'
  }
} as const;

export interface SectionConfig {
  id: SectionId;
  index: number;
  background: 'white' | 'stone';
  bgClass: string;
  bgColorLight: string;
  bgColorDark: string;
  waveBottom: boolean;
  waveVariant: 1 | 2 | 3 | 4 | 5;
  nextSection: SectionId | null;
  nextBgColorLight: string;
  nextBgColorDark: string;
}

/**
 * Get complete configuration for a section
 * This is the ONLY function you need to call
 */
export function getSectionConfig(sectionId: SectionId): SectionConfig {
  const index = SECTION_ORDER.indexOf(sectionId);
  
  if (index === -1) {
    console.error(`Section "${sectionId}" not found in SECTION_ORDER`);
  }
  
  // Check for background override first
  let background: 'white' | 'stone';
  if (BACKGROUND_OVERRIDES[sectionId]) {
    background = BACKGROUND_OVERRIDES[sectionId]!;
  } else {
    // Even indices (0, 2, 4...) get stone background
    // Odd indices (1, 3, 5...) get white background
    background = index % 2 === 0 ? 'stone' : 'white';
  }
  const currentColors = COLORS[background];
  
  // Get next section info
  const nextIndex = index + 1;
  const hasNextSection = nextIndex < SECTION_ORDER.length;
  const nextSection = hasNextSection ? SECTION_ORDER[nextIndex] : null;
  
  // Calculate next section's background (check for override)
  let nextBackground: 'white' | 'stone';
  if (nextSection && BACKGROUND_OVERRIDES[nextSection]) {
    nextBackground = BACKGROUND_OVERRIDES[nextSection]!;
  } else {
    nextBackground = nextIndex % 2 === 0 ? 'stone' : 'white';
  }
  const nextColors = COLORS[nextBackground];
  
  // Wave appears at bottom of all sections except the last one
  const waveBottom = hasNextSection && nextSection !== 'footer';
  
  // Cycle through wave variants for visual variety
  const waveVariant = ((index % 5) + 1) as 1 | 2 | 3 | 4 | 5;
  
  return {
    id: sectionId,
    index,
    background,
    bgClass: currentColors.class,
    bgColorLight: currentColors.light,
    bgColorDark: currentColors.dark,
    waveBottom,
    waveVariant,
    nextSection,
    nextBgColorLight: nextColors.light,
    nextBgColorDark: nextColors.dark
  };
}

/**
 * Get wave divider colors for a section
 * This calculates the gradient from current section to next section
 */
export function getWaveColors(sectionId: SectionId) {
  const config = getSectionConfig(sectionId);
  
  return {
    // Light mode: from current background to next background
    fromColor: config.bgColorLight,
    toColor: config.nextBgColorLight,
    // Dark mode: from current background to next background
    fromColorDark: config.bgColorDark,
    toColorDark: config.nextBgColorDark
  };
}

/**
 * Utility: Get Tailwind class for a section's background
 * Useful for quick access
 */
export function getSectionBgClass(sectionId: SectionId): string {
  return getSectionConfig(sectionId).bgClass;
}

/**
 * Utility: Check if a section should have a wave at the bottom
 */
export function hasBottomWave(sectionId: SectionId): boolean {
  return getSectionConfig(sectionId).waveBottom;
}

/**
 * Utility: Get the next section ID
 */
export function getNextSectionId(sectionId: SectionId): SectionId | null {
  return getSectionConfig(sectionId).nextSection;
}

/**
 * Get the next section's background color (for backwards compatibility)
 * @deprecated Use getSectionConfig(sectionId).nextBgColorLight instead
 */
export function getNextSectionBg(currentId: SectionId): string {
  const config = getSectionConfig(currentId);
  return config.nextBgColorLight;
}

/**
 * Get the previous section's background color (for backwards compatibility)
 * @deprecated Use getSectionConfig() instead
 */
export function getPrevSectionBg(currentId: SectionId): string {
  const currentIndex = SECTION_ORDER.indexOf(currentId);
  const prevIndex = currentIndex - 1;
  
  if (prevIndex < 0) {
    return COLORS.stone.light;
  }
  
  const prevSectionId = SECTION_ORDER[prevIndex];
  const prevConfig = getSectionConfig(prevSectionId);
  return prevConfig.bgColorLight;
}

/**
 * Debug helper: Print section configuration
 * Useful for troubleshooting
 */
export function debugSectionConfig() {
  console.log('=== SECTION CONFIGURATION ===');
  SECTION_ORDER.forEach((sectionId, index) => {
    const config = getSectionConfig(sectionId);
    console.log(`${index}. ${sectionId}:`, {
      background: config.background,
      hasWave: config.waveBottom,
      waveVariant: config.waveVariant,
      nextSection: config.nextSection
    });
  });
}