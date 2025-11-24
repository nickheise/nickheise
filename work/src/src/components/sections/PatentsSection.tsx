import { FileText, ExternalLink } from 'lucide-react';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

const patents = [
  {
    id: 1,
    status: 'GRANTED',
    date: '2022-10-20',
    title: 'Dynamic and/or context-specific hot words to invoke automated assistant',
    assignee: 'Google LLC',
    patentNumber: '12,272,356',
    link: 'https://patents.google.com/'
  },
  {
    id: 2,
    status: 'GRANTED',
    date: '2024-07-30',
    title: 'Methods and systems for reducing latency in automated assistant interactions',
    assignee: 'Google LLC',
    patentNumber: '12,051,416',
    link: 'https://patents.google.com/'
  }
];

export default function PatentsSection() {
  const config = getSectionConfig('patents');
  const waveColors = getWaveColors('patents');

  return (
    <section id="patents" className={`py-20 pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto scroll-reveal">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 transition-colors">
              Patents & Innovation
            </h2>
            <p className="text-stone-600 dark:text-stone-300 transition-colors">
              Contributions to intellectual property in AI, voice assistants, and UI.
            </p>
          </div>

          {/* Patents List */}
          <div className="space-y-6">
            {patents.map((patent) => (
              <div
                key={patent.id}
                className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md dark:hover:shadow-black/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 p-6">
                  {/* Icon Thumbnail - Square Inset */}
                  <div className="w-20 h-20 flex-shrink-0 bg-stone-100 dark:bg-stone-700 flex items-center justify-center rounded-lg border border-stone-200 dark:border-stone-600">
                    <FileText size={36} className="text-stone-400 dark:text-stone-500" />
                  </div>

                  {/* Patent Content */}
                  <div className="flex-1 flex flex-col sm:flex-row gap-4 min-w-0">
                    {/* Left side - Text content */}
                    <div className="flex-1 min-w-0">
                      {/* Date and Status */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-stone-400 dark:text-stone-500 text-sm transition-colors">
                          {patent.date}
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-md text-xs uppercase tracking-wide transition-colors">
                          {patent.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg text-stone-900 dark:text-stone-100 mb-2 transition-colors break-words">
                        {patent.title}
                      </h3>

                      {/* Assignee and Number */}
                      <p className="text-stone-500 dark:text-stone-400 text-sm transition-colors">
                        Assignee: {patent.assignee} • No: {patent.patentNumber}
                      </p>
                    </div>

                    {/* Right side - View Patent Link */}
                    <a
                      href={patent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 border border-stone-200 dark:border-stone-700 hover:border-rose-300 dark:hover:border-rose-600 rounded-lg transition-all cursor-pointer self-start whitespace-nowrap"
                    >
                      View Patent
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
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