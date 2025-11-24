import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';
import { BookOpen, Handshake, Mic } from 'lucide-react';

const initiatives = [
  {
    id: 1,
    Icon: BookOpen,
    iconBg: 'bg-rose-50 dark:bg-rose-950/30',
    iconColor: 'text-rose-600 dark:text-rose-400',
    title: 'Teaching',
    subtitle: 'Academic Contributions',
    description: 'Sharing design thinking and methodologies with the next generation of designers.',
    items: [
      { label: 'Professor, Carnegie Mellon', detail: 'Advanced Interactivity Design (2017)' },
      { label: 'Professor, MIT', detail: 'Empathy for Designers (2016)' }
    ]
  },
  {
    id: 2,
    Icon: Handshake,
    iconBg: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Mentorship',
    subtitle: 'One-on-One Guidance',
    description: 'Helping designers navigate their careers and craft with personalized feedback.',
    items: [
      { label: 'Portfolio Review', detail: 'Ongoing since 2015' }
    ]
  },
  {
    id: 3,
    Icon: Mic,
    iconBg: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Speaking',
    subtitle: 'Conference Talks',
    description: 'Sharing insights and experiences at design conferences around the world.',
    items: [
      { label: 'FITC', detail: '2020' },
      { label: 'IxDA', detail: '2022' },
      { label: 'Design Leadership Conference', detail: '2019' }
    ]
  }
];

export default function WhereStartedSection() {
  const config = getSectionConfig('where-started');
  const waveColors = getWaveColors('where-started');
  
  return (
    <section id="where-started" className={`py-20 pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors mb-4">
              Teaching, Mentorship & Speaking
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto transition-colors">
              Using what I've learned over the years to help others grow—because great design is better when it's shared.
            </p>
          </div>

          {/* Initiative Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 scroll-reveal">
            {initiatives.map((initiative) => (
              <div
                key={initiative.id}
                className="relative p-8 rounded-2xl bg-white dark:bg-stone-700 shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex p-3.5 rounded-xl ${initiative.iconBg} transition-colors mb-5`}>
                  <initiative.Icon size={26} className={initiative.iconColor} strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2 transition-colors">
                  {initiative.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mb-4 transition-colors">
                  {initiative.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-stone-600 dark:text-stone-300 mb-6 leading-relaxed transition-colors">
                  {initiative.description}
                </p>

                {/* Divider */}
                <div className="border-t border-stone-200 dark:border-stone-600 mb-5 transition-colors" />

                {/* Items List */}
                <div className="space-y-3">
                  {initiative.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 transition-colors mt-0.5">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
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