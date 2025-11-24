import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do you describe your role now — designer or product manager?',
    answer: 'I sit in the overlap. My background is in design, but I\'m most effective when I can own the full product arc: framing the problem, shaping strategy, designing solutions, and helping ship and iterate.'
  },
  {
    question: 'Do you code?',
    answer: 'Yes. I\'m not trying to replace engineers, but I use AI coding tools to build prototypes, internal tools, and sometimes full features. It helps close the gap between idea and implementation.'
  },
  {
    question: 'What kinds of products do you work best on?',
    answer: 'Data-dense, workflow-heavy products: analytics tools, B2B SaaS, marketplaces, and platforms where multiple roles need to work together.'
  },
  {
    question: 'How do you measure the impact of your work?',
    answer: 'I try to look at things like adoption, task success, time-to-value, and qualitative feedback from users and stakeholders. Design without measurement is just decoration.'
  },
  {
    question: 'How do you prefer to collaborate?',
    answer: 'In cross-functional squads where design, product, and engineering share the same goals. I value clear communication, written thinking, and regular feedback loops.'
  }
];

function FAQAccordionItem({ faq, index, isOpen, onToggle }: { 
  faq: FAQItem; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div 
      className="bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 overflow-hidden transition-all duration-500 hover:shadow-lg animate-fade-in-up"
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left transition-all duration-300 hover:bg-stone-50 dark:hover:bg-stone-700/50 cursor-pointer"
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium text-stone-900 dark:text-stone-100 transition-colors flex-1">
          {faq.question}
        </span>
        <ChevronDown 
          size={24} 
          className="text-rose-500 dark:text-rose-400 flex-shrink-0 transition-all duration-500"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </button>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{ 
          maxHeight: isOpen ? `${height}px` : '0px',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
          <p 
            className="text-stone-600 dark:text-stone-300 leading-relaxed transition-opacity duration-500"
            style={{ 
              opacity: isOpen ? 1 : 0,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: isOpen ? '100ms' : '0ms'
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const config = getSectionConfig('faq');
  const waveColors = getWaveColors('faq');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className={`relative py-12 md:py-20 pb-32 ${config.bgClass} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 transition-colors">
              FAQ
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 transition-colors">
              Questions hiring managers often ask.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
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