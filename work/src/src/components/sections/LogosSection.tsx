import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

// SVG Logo Components
const GoogleLogo = () => (
  <svg viewBox="0 0 272 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="currentColor"/>
    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="currentColor"/>
    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="currentColor"/>
    <path d="M225 3v65h-9.5V3h9.5z" fill="currentColor"/>
    <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="currentColor"/>
    <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="currentColor"/>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 272 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M43.5 0h-43v43h43V0zm0 49h-43v43h43V49zm49-49h-43v43h43V0zm0 49h-43v43h43V49z" transform="translate(0 3)"/>
    <text x="110" y="60" fontFamily="Segoe UI, Arial, sans-serif" fontSize="42" fontWeight="600" fill="currentColor">Microsoft</text>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 200 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M23 23a11.5 11.5 0 0 1 11.5-11.5H46a11.5 11.5 0 0 1 0 23H34.5A11.5 11.5 0 0 1 23 23z" transform="translate(0 23)"/>
    <path d="M23 46a11.5 11.5 0 0 1 11.5-11.5H46a11.5 11.5 0 0 1 0 23H34.5A11.5 11.5 0 0 1 23 46z" transform="translate(0 23)"/>
    <circle cx="46" cy="46" r="11.5" transform="translate(0 23)"/>
    <path d="M23 69a11.5 11.5 0 0 0 11.5 11.5A11.5 11.5 0 0 0 46 69v-11.5H34.5A11.5 11.5 0 0 0 23 69z" transform="translate(0 23)"/>
    <circle cx="57.5" cy="34.5" r="11.5" transform="translate(0 23)"/>
    <text x="85" y="60" fontFamily="Inter, Arial, sans-serif" fontSize="42" fontWeight="600" fill="currentColor">Figma</text>
  </svg>
);

const IBMLogo = () => (
  <svg viewBox="0 0 200 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M0 20h40v8H0v-8zm0 12h40v8H0v-8zm0 12h40v8H0v-8zm0 12h40v8H0v-8zm0 12h40v8H0v-8z" transform="translate(10 16)"/>
    <path d="M50 20h30v8H50v-8zm0 12h30v8H50v-8zm0 12h30v8H50v-8zm0 12h30v8H50v-8zm0 12h30v8H50v-8z" transform="translate(10 16)"/>
    <path d="M90 20h40v8.5L120 32l10 3.5v8.5l-10 3.5 10 3.5v8.5l-10 3.5 10 3.5V72H90v-8.5l10-3.5-10-3.5v-8.5l10-3.5-10-3.5v-8.5l10-3.5-10-3.5V20z" transform="translate(10 16)"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 200 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M57.5 46c0-12.4-10.1-22.5-22.5-22.5S12.5 33.6 12.5 46 22.6 68.5 35 68.5 57.5 58.4 57.5 46zm-37.5 0c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15z"/>
    <text x="70" y="60" fontFamily="Inter, Arial, sans-serif" fontSize="42" fontWeight="700" fill="currentColor">Meta</text>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 240 92" className="h-8 md:h-10" fill="currentColor">
    <text x="10" y="60" fontFamily="'Amazon Ember', Arial, sans-serif" fontSize="48" fontWeight="700" fill="currentColor">amazon</text>
    <path d="M180 65c-20 14-49 22-74 22-35 0-66-13-90-34-2-2 0-4 2-3 26 15 59 24 92 24 23 0 48-5 71-15 3-1 6 2 3 4l-4 2z" transform="translate(0 -5)"/>
    <path d="M193 58c-3-3-17-2-24-1-2 0-2-2 0-3 12-8 31-6 33-3s-1 21-11 30c-2 1-3 1-2-1 2-6 8-20 4-22z" transform="translate(0 -5)"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 200 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M45.5 23.3c-2.5 2.9-6.6 5.2-10.6 4.9-.5-4 1.2-8.3 3.5-11 2.4-2.8 6.6-5 10-5.1.4 4.1-1.1 8.1-2.9 11.2zm2.8 4.5c-5.9-.3-10.9 3.3-13.7 3.3-2.8 0-7.1-3.1-11.7-3-6 .1-11.6 3.5-14.7 8.9-6.3 10.9-1.6 27 4.5 35.8 3 4.3 6.6 9.1 11.3 8.9 4.5-.2 6.2-2.9 11.6-2.9s6.9 2.9 11.6 2.8c4.8-.1 8-4.3 11-8.6 3.5-5 4.9-9.8 5-10.1-.1 0-9.6-3.7-9.7-14.6-.1-9.1 7.4-13.5 7.8-13.8-4.2-6.2-10.8-6.9-13.1-7.1z" transform="translate(10 8)"/>
    <text x="75" y="60" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="42" fontWeight="600" fill="currentColor">Apple</text>
  </svg>
);

const AdobeLogo = () => (
  <svg viewBox="0 0 200 92" className="h-8 md:h-10" fill="currentColor">
    <path d="M0 0l25 68h12l8-22h-12L25 20 0 0z" transform="translate(20 12)"/>
    <path d="M50 0L25 68h12l5-14h14l-3-8H42l8-24L50 0z" transform="translate(20 12)"/>
    <text x="95" y="60" fontFamily="'Adobe Clean', sans-serif" fontSize="42" fontWeight="700" fill="currentColor">Adobe</text>
  </svg>
);

const companies = [
  { name: 'Google', logo: GoogleLogo },
  { name: 'Microsoft', logo: MicrosoftLogo },
  { name: 'Figma', logo: FigmaLogo },
  { name: 'IBM', logo: IBMLogo },
  { name: 'Meta', logo: MetaLogo },
  { name: 'Amazon', logo: AmazonLogo },
  { name: 'Apple', logo: AppleLogo },
  { name: 'Adobe', logo: AdobeLogo },
];

export default function LogosSection() {
  const config = getSectionConfig('logos');
  const waveColors = getWaveColors('logos');
  
  return (
    <section id="logos" className={`py-16 md:py-20 pb-32 md:pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors">
              Teams I've Worked With
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mt-4 transition-colors">
              Collaborating with talented teams across the technology industry
            </p>
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden scroll-reveal animation-delay-200">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-white dark:from-stone-800 to-transparent pointer-events-none transition-colors" />
            <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-white dark:from-stone-800 to-transparent pointer-events-none transition-colors" />

            {/* Scrolling logos */}
            <div className="flex gap-16 animate-scroll-slow w-fit">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-300"
                  title={company.name}
                >
                  <company.logo />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition */}
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