import { Linkedin, Newspaper } from 'lucide-react';
import { getSectionConfig } from '../../utils/sectionConfig';

// Official X (Twitter) Logo Component
const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    viewBox="0 0 1200 1227" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true" 
    role="none"
    width={size}
    height={size}
    className="fill-stone-600 dark:fill-stone-300 transition-colors group-hover:fill-rose-600 dark:group-hover:fill-rose-400"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
  </svg>
);

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaclynkonzelmann',
    icon: Linkedin,
    external: true
  },
  {
    label: 'X (formerly Twitter)',
    href: 'https://x.com/jacalulu',
    icon: XIcon,
    external: true
  },
  {
    label: 'Blog',
    href: '#blog',
    icon: Newspaper,
    external: false
  }
];

export default function Footer() {
  const config = getSectionConfig('connect');

  return (
    <footer id="connect" className={`${config.bgClass} py-20 transition-colors duration-300`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 transition-colors">
          Let's Connect
        </h2>
        <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto mb-10 transition-colors">
          I write about AI and product strategy. Subscribe to my newsletter or follow me on
          social media for updates.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-stone-700 rounded-full text-stone-600 dark:text-stone-300 hover:bg-rose-100 dark:hover:bg-rose-900/50 hover:text-rose-600 dark:hover:text-rose-400 transition-all hover:scale-110 shadow-sm hover:shadow"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        <div className="text-stone-400 dark:text-stone-500 text-sm transition-colors">
          © {new Date().getFullYear()} Jaclyn Konzelmann. All rights reserved.
        </div>
      </div>
    </footer>
  );
}