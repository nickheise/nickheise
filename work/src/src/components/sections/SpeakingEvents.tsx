import { useState } from 'react';
import { imagePanelData } from '../../data/images';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

export default function SpeakingEvents() {
  const config = getSectionConfig('speaking');
  const waveColors = getWaveColors('speaking');

  return (
    <section id="speaking" className={`py-16 pb-48 ${config.bgClass} overflow-hidden relative z-20 transition-colors duration-300`}>
      {/* Wave at top */}
      {config.waveTop && (
        <WaveDivider 
          position="top" 
          fromColor={waveColors.fromColor}
          toColor={waveColors.toColor}
          fromColorDark={waveColors.fromColorDark}
          toColorDark={waveColors.toColorDark}
          variant={config.waveVariant}
        />
      )}

      <div className="container mx-auto px-6 md:px-12 mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
          Speaking & Events
        </h2>
      </div>

      <div className="relative w-full mb-10">
        <div className={`absolute top-0 left-0 z-10 w-20 h-full ${config.background === 'stone' ? 'bg-gradient-to-r from-stone-50 dark:from-stone-900 to-transparent' : 'bg-gradient-to-r from-white dark:from-stone-800 to-transparent'}`} />
        <div className={`absolute top-0 right-0 z-10 w-20 h-full ${config.background === 'stone' ? 'bg-gradient-to-l from-stone-50 dark:from-stone-900 to-transparent' : 'bg-gradient-to-l from-white dark:from-stone-800 to-transparent'}`} />

        <div className="flex gap-6 px-3 animate-scroll w-fit">
          {[...imagePanelData.speaking, ...imagePanelData.speaking].map((src, index) => (
            <div
              key={index}
              className="w-[280px] md:w-[350px] h-[200px] md:h-[240px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Speaking event ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md border border-stone-100 dark:border-stone-950 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider - Automatically configured */}
      {config.waveBottom && (
        <WaveDivider 
          position="bottom" 
          fromColor={waveColors.fromColor}
          toColor={waveColors.toColor}
          fromColorDark={waveColors.fromColorDark}
          toColorDark={waveColors.toColorDark}
          variant={config.waveVariant}
        />
      )}
    </section>
  );
}