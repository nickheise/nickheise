/**
 * Wave Color Utilities
 * 
 * DEPRECATED: This file is kept for backwards compatibility
 * New code should use getSectionConfig() and getWaveColors() from sectionConfig.ts
 */

import { getSectionConfig, getWaveColors as getWaveColorsNew, type SectionId } from './sectionConfig';

/**
 * @deprecated Use getWaveColors() from sectionConfig.ts instead
 */
export function getWaveColors(fromSection: SectionId, toSection?: SectionId) {
  // Use the new automated system
  return getWaveColorsNew(fromSection);
}

/**
 * @deprecated Use getSectionConfig() from sectionConfig.ts instead
 */
export function getSectionBgColor(sectionId: SectionId, mode: 'light' | 'dark' = 'light') {
  const config = getSectionConfig(sectionId);
  return mode === 'light' ? config.bgColorLight : config.bgColorDark;
}
