import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { experienceData } from '../../data/experience';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

export default function ExperienceTimeline() {
  const [showAll, setShowAll] = useState(false);
  const [expandedMilestones, setExpandedMilestones] = useState<Set<string>>(new Set());
  const config = getSectionConfig('experience');
  const waveColors = getWaveColors('experience');

  const toggleMilestones = (id: string) => {
    const newExpanded = new Set(expandedMilestones);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedMilestones(newExpanded);
  };

  return (
    <section id="experience" className={`py-24 pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-16 text-center transition-colors">
            Experience Timeline
          </h2>
          <p className="text-center text-stone-600 dark:text-stone-400 max-w-2xl mx-auto -mt-12 mb-16 transition-colors">
            A journey through my career highlights and key milestones
          </p>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700 transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {(showAll ? experienceData : experienceData.slice(0, 4)).map((exp, index) => {
                const isLeft = index % 2 === 0;
                const isExpanded = expandedMilestones.has(exp.id);

                return (
                  <div
                    key={exp.id}
                    className={`relative scroll-reveal flex ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className={`inline-block ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-rose-500 dark:text-rose-400 font-medium mb-3 transition-colors">
                          {exp.title}
                        </p>
                        
                        {/* Milestones Toggle */}
                        {exp.milestones.length > 0 && (
                          <button
                            onClick={() => toggleMilestones(exp.id)}
                            className="text-sm text-stone-500 dark:text-stone-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors inline-flex items-center gap-1 cursor-pointer group"
                          >
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            View Career Milestones ({exp.milestones.length})
                          </button>
                        )}

                        {/* Expanded Milestones */}
                        {isExpanded && (
                          <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-stone-300 text-left transition-colors">
                            {exp.milestones.map((milestone, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-rose-400 dark:text-rose-400 mt-0.5 flex-shrink-0">•</span>
                                <span>{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block">
                      <div className={`w-3 h-3 bg-rose-400 rounded-full border-4 ${config.background === 'white' ? 'border-white dark:border-stone-800' : 'border-stone-50 dark:border-stone-900'}`} />
                    </div>

                    {/* Date Badge */}
                    <div className={`flex-1 ${isLeft ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                      <div className={`inline-block ${isLeft ? 'md:text-left' : 'md:text-right'} text-left`}>
                        <span className="inline-block px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full text-sm font-medium transition-colors">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show More/Less Button */}
            {experienceData.length > 4 && (
              <div className="text-center mt-12 relative z-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 border-2 border-stone-200 dark:border-stone-600 hover:border-rose-400 dark:hover:border-rose-500 hover:text-rose-500 dark:hover:text-rose-400 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                >
                  {showAll ? (
                    <>
                      <ChevronUp size={18} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={18} />
                      Show More Experience
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
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