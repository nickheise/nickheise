# Wave Divider System Guide

## Overview
This project uses a systematic approach to wave dividers and background colors to ensure visual consistency across all sections.

## Background Color Rules
1. **Hero section** always has `bg-stone-50` (light grey)
2. All subsequent sections **alternate** between `bg-white` and `bg-stone-50`
3. The order is managed automatically by `/src/utils/sectionConfig.ts`

## Wave Divider Usage

### Import Required Modules
```tsx
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getNextSectionBg } from '../../utils/sectionConfig';
```

### Get Section Configuration
```tsx
const config = getSectionConfig('work'); // Replace with your section ID
```

### Add Wave Dividers to Section
```tsx
<section id="work" className="py-20 bg-white relative">
  {/* Wave at top */}
  {config.waveTop && (
    <WaveDivider 
      position="top" 
      fromColor="#ffffff"  {/* Current section background */}
      toColor="#fafaf9"    {/* Previous section background (stone-50) */}
      variant={config.waveVariant}
    />
  )}

  {/* Your content here */}

  {/* Wave at bottom */}
  {config.waveBottom && (
    <WaveDivider 
      position="bottom" 
      fromColor="#ffffff"  {/* Current section background */}
      toColor={getNextSectionBg('work')}  {/* Next section background */}
      variant={config.waveVariant}
    />
  )}
</section>
```

## Section IDs
Available section IDs in order:
- `'hero'` - Always stone-50 background
- `'work'` - White background
- `'experience'` - Stone-50 background
- `'patents'` - White background
- `'bio'` - Stone-50 background
- `'side-projects'` - White background
- `'thoughts'` - Stone-50 background
- `'speaking'` - White background
- `'connect'` - Stone-50 background

## Color Reference
- White: `#ffffff`
- Stone-50: `#fafaf9`

## Adding a New Section

1. Add the section ID to `sectionOrder` in `/src/utils/sectionConfig.ts`
2. The background will automatically alternate
3. Use the wave divider pattern shown above
4. The `variant` is automatically assigned for visual variety

## Moving Sections

If you reorder sections in the main App component:
1. Update the `sectionOrder` array in `/src/utils/sectionConfig.ts` to match
2. All background colors and wave transitions will update automatically
3. No need to manually change any section's background classes

## Example: Full Section Component

```tsx
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getNextSectionBg } from '../../utils/sectionConfig';

export default function MySection() {
  const config = getSectionConfig('my-section');
  const nextBg = getNextSectionBg('my-section');

  return (
    <section 
      id="my-section" 
      className={`py-20 ${config.background === 'white' ? 'bg-white' : 'bg-stone-50'} relative`}
    >
      {/* Top wave */}
      {config.waveTop && (
        <WaveDivider 
          position="top" 
          fromColor={config.background === 'white' ? '#ffffff' : '#fafaf9'}
          toColor={config.background === 'white' ? '#fafaf9' : '#ffffff'}
          variant={config.waveVariant}
        />
      )}

      <div className="container mx-auto px-6">
        {/* Your content */}
      </div>

      {/* Bottom wave */}
      {config.waveBottom && (
        <WaveDivider 
          position="bottom" 
          fromColor={config.background === 'white' ? '#ffffff' : '#fafaf9'}
          toColor={nextBg}
          variant={config.waveVariant}
        />
      )}
    </section>
  );
}
```

## Troubleshooting

- **Waves not showing**: Check that section is in `sectionOrder` array
- **Wrong colors**: Verify `fromColor` matches section bg and `toColor` matches adjacent section
- **Z-index issues**: Sections have `relative` positioning, waves are `absolute`
