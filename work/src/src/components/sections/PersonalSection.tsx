import { Heart, Sparkles, Rocket, Code, Palette, Coffee, Mountain, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';
import { useState, useRef, useEffect } from 'react';

const sideProjects = [
  { id: 1, title: 'AI Writing Assistant', description: 'Chrome extension for enhanced writing with AI suggestions.', brandColor: 'bg-purple-100 dark:bg-purple-950/30', link: 'https://example.com', icon: 'Code' },
  { id: 2, title: 'Design Token Library', description: 'Open-source design tokens for cross-platform consistency.', brandColor: 'bg-blue-100 dark:bg-blue-950/30', link: null, icon: 'Palette' },
  { id: 3, title: 'PM Interview Prep', description: 'Interactive platform to practice product management interviews.', brandColor: 'bg-green-100 dark:bg-green-950/30', link: null, icon: 'Coffee' },
  { id: 4, title: 'Prototype Gallery', description: 'Collection of micro-interactions and UI experiments.', brandColor: 'bg-rose-100 dark:bg-rose-950/30', link: 'https://example.com', icon: 'Sparkles' },
  { id: 5, title: 'User Research Hub', description: 'Tools and templates for conducting user research.', brandColor: 'bg-amber-100 dark:bg-amber-950/30', link: null, icon: 'Rocket' }
];

const initialInterests = ['Cooking', 'Hiking', 'Photography', 'Travel', 'Reading', 'Yoga', 'Gardening'];

const getProjectIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Code,
    Palette,
    Coffee,
    Sparkles,
    Rocket
  };
  const Icon = icons[iconName] || Code;
  return <Icon className="text-stone-700 dark:text-stone-300" size={32} />;
};

export default function PersonalSection() {
  const config = getSectionConfig('personal');
  const waveColors = getWaveColors('personal');
  
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const scrollInterval = setInterval(() => {
      if (!isPaused && container) {
        container.scrollLeft += 1;
        
        // Reset to start when reaching the end for infinite loop
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="personal" className={`py-20 pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
              Life Outside of Work
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mt-4 transition-colors">
              My passions, side projects, and what keeps me inspired beyond the office
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
              <div className="relative rounded-3xl bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-600 transition-colors overflow-hidden">
                <div className="overflow-hidden bg-stone-200 dark:bg-stone-700">
                  <img
                    src="https://images.unsplash.com/photo-1742522450616-a2cf0cba1274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHNtaWxpbmd8ZW58MXx8fHwxNzYzNjk5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Happy family"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-50 dark:bg-rose-950/30 rounded-full shadow-sm transition-colors">
                      <Heart className="text-rose-500" size={20} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
                      Family Life
                    </h3>
                  </div>
                  <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed transition-colors">
                    When I'm not in the office, I live in San Francisco with my husband, our three young kids, a dog, and a cat.
                  </p>
                </div>
              </div>

              <div className="relative p-10 rounded-3xl bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-950/30 rounded-full shadow-sm transition-colors">
                    <Sparkles className="text-amber-500" size={20} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
                    Personal Interests
                  </h3>
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-6 transition-colors">
                  Things I enjoy outside of work:
                </p>
                <div className="flex flex-wrap gap-2">
                  {initialInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full text-sm border border-stone-200 dark:border-stone-600 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-600 transition-colors scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-full shadow-sm transition-colors">
                  <Rocket className="text-blue-500" size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
                  Side Projects
                </h3>
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-8 transition-colors">
                Always building, always tinkering. Here are a few things keeping me busy lately:
              </p>

              <div className="relative -mx-10 group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-white dark:from-stone-800 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-white dark:from-stone-800 to-transparent pointer-events-none" />

                <div className="overflow-x-scroll scrollbar-hide px-10" ref={scrollContainerRef}>
                  <div className="flex gap-4 w-fit">
                    {[...sideProjects, ...sideProjects, ...sideProjects].map((project, index) => (
                      <div
                        key={`project-${project.id}-${index}`}
                        className="w-[280px] flex-shrink-0 bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`${project.brandColor} p-6 flex items-center justify-center`}>
                          {getProjectIcon(project.icon)}
                        </div>

                        <div className="p-6">
                          <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 transition-colors">
                            {project.description}
                          </p>

                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors"
                            >
                              <span>View Project →</span>
                            </a>
                          ) : (
                            <span className="text-sm text-stone-400 dark:text-stone-500 italic transition-colors">
                              Coming soon
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll buttons */}
                <button
                  onClick={handleScrollLeft}
                  aria-label="Scroll left"
                  className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-full p-2.5 shadow-lg hover:shadow-xl border border-stone-200 dark:border-stone-700 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleScrollRight}
                  aria-label="Scroll right"
                  className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-full p-2.5 shadow-lg hover:shadow-xl border border-stone-200 dark:border-stone-700 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3L1200,42.7V120H1200V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
            fill={waveColors.toColor}
            className="dark:hidden"
          />
          <path
            d="M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3L1200,42.7V120H1200V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
            fill={waveColors.toColorDark}
            className="hidden dark:block"
          />
        </svg>
      </div>
    </section>
  );
}