import { ReactNode } from 'react';
import WaveDivider from '../WaveDivider';
import { getSectionConfig } from '../../utils/sectionConfig';
import { getWaveColors } from '../../utils/waveColors';

type SectionKey = 'hero' | 'work' | 'where-started' | 'speaking' | 'experience' | 'press' | 'patents' | 'bio' | 'personal' | 'thoughts';

interface WaveSectionProps {
  id: string;
  sectionKey: SectionKey;
  prevSection?: SectionKey;
  nextSection?: SectionKey;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export function WaveSection({
  id,
  sectionKey,
  prevSection,
  nextSection,
  className = '',
  containerClassName = 'container mx-auto px-6 md:px-12 relative z-10',
  children
}: WaveSectionProps) {
  const config = getSectionConfig(sectionKey);
  const waveTopColors = prevSection ? getWaveColors(sectionKey, prevSection) : null;
  const waveBottomColors = nextSection ? getWaveColors(sectionKey, nextSection) : null;

  return (
    <section id={id} className={className}>
      {/* Wave at top */}
      {config.waveTop && waveTopColors && (
        <WaveDivider 
          position="top" 
          fromColor={waveTopColors.fromColor}
          toColor={waveTopColors.toColor}
          fromColorDark={waveTopColors.fromColorDark}
          toColorDark={waveTopColors.toColorDark}
          variant={config.waveVariant}
        />
      )}

      <div className={containerClassName}>
        {children}
      </div>

      {/* Wave at bottom */}
      {config.waveBottom && waveBottomColors && (
        <WaveDivider 
          position="bottom" 
          fromColor={waveBottomColors.fromColor}
          toColor={waveBottomColors.toColor}
          fromColorDark={waveBottomColors.fromColorDark}
          toColorDark={waveBottomColors.toColorDark}
          variant={config.waveVariant}
        />
      )}
    </section>
  );
}
