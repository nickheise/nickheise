import { ExternalLink, ArrowRight } from 'lucide-react';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';
import WaveDivider from '../WaveDivider';

const articles = [
  {
    id: 1,
    slug: 'raising-ai-native-kids',
    tag: 'FEATURED IN FORBES',
    headline: 'Raising AI-Native Kids: Creativity, Literacy, And Boundaries At Home',
    description: 'I shared my perspective on how our family uses tools like Gemini and Opal to spark creativity and curiosity.',
    link: `#blog/raising-ai-native-kids`,
    linkText: 'Read Full Article',
    external: false
  },
  {
    id: 2,
    slug: 'friction-in-product-design',
    tag: 'PRODUCT THINKING',
    headline: 'The Importance of Friction in Product Design',
    description: 'Exploring when and why intentional friction creates better user experiences and builds trust.',
    link: `#blog/friction-in-product-design`,
    linkText: 'Read Article',
    external: false
  },
  {
    id: 3,
    slug: 'mentoring-product-managers',
    tag: 'LEADERSHIP',
    headline: 'Mentoring Product Managers: Lessons from the Trenches',
    description: 'Reflections on what I\'ve learned from mentoring PMs at various stages of their careers.',
    link: `#blog/mentoring-product-managers`,
    linkText: 'Read Article',
    external: false
  }
];

export default function ThoughtsSection() {
  const config = getSectionConfig('thoughts');
  const waveColors = getWaveColors('thoughts');

  return (
    <section id="thoughts" className={`py-20 pb-32 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 transition-colors">
              Thursday Thoughts
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto transition-colors">
              Perspectives on product, AI, and leadership from years of building at scale.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {articles.map((article, index) => (
              <a
                key={article.id}
                href={article.link}
                target={article.external ? '_blank' : undefined}
                rel={article.external ? 'noopener noreferrer' : undefined}
                className="bg-white dark:bg-stone-700 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-lg transition-all hover:-translate-y-1 scroll-reveal flex flex-col cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Tag */}
                <span className="inline-block px-3 py-1 bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 transition-colors self-start">
                  {article.tag}
                </span>

                {/* Headline */}
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3 transition-colors">
                  {article.headline}
                </h3>

                {/* Description */}
                <p className="text-stone-600 dark:text-stone-300 mb-6 flex-grow transition-colors">
                  {article.description}
                </p>
                
                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-rose-500 dark:text-rose-400 font-medium group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors group-hover:gap-3">
                  {article.linkText} 
                  {article.external ? (
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  ) : (
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center scroll-reveal">
            <a
              href="#blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all hover:scale-105 cursor-pointer"
            >
              Read More Thoughts <ArrowRight size={18} />
            </a>
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