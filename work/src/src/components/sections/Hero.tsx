import { Linkedin, ArrowRight } from 'lucide-react';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

const artImages = [
  {
    name: 'Reality',
    src: 'https://images.unsplash.com/photo-1681235014294-588fea095706?w=800',
  },
  {
    name: 'Pen Art',
    src: 'https://images.unsplash.com/photo-1656448351130-9ad556aa4194?w=800',
  },
  {
    name: 'Watercolor',
    src: 'https://images.unsplash.com/photo-1713815539197-78db123d8f3e?w=800',
  },
  {
    name: 'Acrylic',
    src: 'https://images.unsplash.com/photo-1690288988059-c8d77a6d6ccc?w=800',
  }
];

export default function Hero() {
  const config = getSectionConfig('hero');
  const waveColors = getWaveColors('hero');

  const currentArt = artImages[0];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-48 lg:pb-48 overflow-hidden bg-stone-50 dark:bg-stone-800 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/50 dark:bg-rose-950/30 rounded-bl-[10rem] -z-10 blur-3xl opacity-60 transform translate-x-1/4 animate-float" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-50/50 dark:bg-orange-950/30 rounded-tr-[10rem] -z-10 blur-3xl opacity-60 transform -translate-x-1/4 animate-float-delayed" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          {/* Text Content */}
          <div className="flex-1 space-y-6 md:space-y-7 lg:space-y-8 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight transition-colors">
              I build{' '}
              <span className="text-stone-900 dark:text-stone-100">cool</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                AI Products
              </span>
              .
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-in-up animation-delay-200 transition-colors">
              Hi, I'm <strong className="text-stone-800 dark:text-stone-100">Jaclyn Konzelmann</strong>. 
              Director of Product Management at{' '}
              <a
                href="https://labs.google"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 dark:text-rose-400 font-medium hover:text-rose-600 dark:hover:text-rose-300 underline decoration-rose-200 dark:decoration-rose-800 hover:decoration-rose-600 dark:hover:decoration-rose-400 transition-all"
              >
                Google Labs
              </a>
              . I'm passionate about taking ideas from zero to one and building the next 
              generation of products.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4 md:pt-6 animate-fade-in-up animation-delay-400">
              <a
                href="#blog"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-medium hover:shadow-rose-200 dark:hover:shadow-rose-900/50 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group text-center whitespace-nowrap"
              >
                Read Thursday Thoughts
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jaclynkonzelmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 border-2 border-transparent hover:border-stone-300 dark:hover:border-stone-600 rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2 text-center whitespace-nowrap"
              >
                <Linkedin size={18} className="text-[#0077b5] dark:text-[#4da3ff]" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Stacked Photo Cards */}
          <div className="flex-1 relative w-full md:w-auto animate-fade-in-scale animation-delay-200">
            <div className="relative w-full max-w-[202px] md:max-w-[246px] lg:max-w-[275px] mx-auto aspect-[3/4] group perspective-1000">
              {/* Stacked Cards - Portrait Orientation */}
              <div className="relative w-full h-full">
                {artImages.map((art, index) => {
                  // Cards fan out from bottom-left corner in both directions
                  // Cards 0 & 1 rotate counter-clockwise (left), Cards 2 & 3 rotate clockwise (right)
                  const direction = index < 2 ? -1 : 1;
                  const baseRotation = direction * (Math.abs(index - 1.5) + 0.5) * 3; // ±3, ±4.5 degrees
                  const hoverRotation = direction * (Math.abs(index - 1.5) + 0.5) * 5; // ±5, ±7.5 degrees
                  const zIndex = index; // Cards stack from bottom to top
                  
                  return (
                    <div
                      key={art.name}
                      className="absolute inset-0 transition-all duration-500 ease-out origin-bottom-left"
                      style={{
                        transform: `rotate(${baseRotation}deg) translateY(${index * -2}px)`,
                        zIndex: zIndex,
                        transformOrigin: 'bottom left',
                      }}
                    >
                      <div 
                        className="w-full h-full bg-white dark:bg-stone-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl dark:shadow-black/50 border-8 border-white transition-all duration-500"
                        style={{
                          transform: 'translateZ(0)', // Enable 3D transform
                        }}
                      >
                        <img
                          src={art.src}
                          alt={`Jaclyn Konzelmann - ${art.name}`}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover target overlay to trigger fan effect */}
              <div 
                className="absolute inset-0 z-50 cursor-pointer"
                onMouseEnter={(e) => {
                  const cards = e.currentTarget.previousElementSibling?.children;
                  if (cards) {
                    Array.from(cards).forEach((card, index) => {
                      const hoverRotation = (index < 2 ? -1 : 1) * (Math.abs(index - 1.5) + 0.5) * 5;
                      (card as HTMLElement).style.transform = `rotate(${hoverRotation}deg) translateY(${index * -4}px)`;
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  const cards = e.currentTarget.previousElementSibling?.children;
                  if (cards) {
                    Array.from(cards).forEach((card, index) => {
                      const baseRotation = (index < 2 ? -1 : 1) * (Math.abs(index - 1.5) + 0.5) * 3;
                      (card as HTMLElement).style.transform = `rotate(${baseRotation}deg) translateY(${index * -2}px)`;
                    });
                  }
                }}
              />

              {/* Decorative Blobs */}
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-rose-200 dark:bg-rose-900/50 rounded-full blur-xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100 dark:bg-orange-900/50 rounded-full blur-xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow animation-delay-1000 -z-10" />
            </div>
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