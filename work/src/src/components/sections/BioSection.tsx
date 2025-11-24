import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';

export default function BioSection() {
  const [showLongBio, setShowLongBio] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedLong, setCopiedLong] = useState(false);
  const config = getSectionConfig('bio');
  const waveColors = getWaveColors('bio');

  const shortBio = "Jaclyn Konzelmann is a Director of Product Management at Google Labs, where she leads teams building the next generation of AI-first products.";
  
  const longBio = "Jaclyn Konzelmann is a Director of Product Management at Google Labs, where she leads teams building the next generation of AI-first products. With over a decade of experience in product leadership, she has driven innovation across multiple domains including artificial intelligence, user experience design, and enterprise solutions. Jaclyn holds several patents in AI and human-computer interaction, and is passionate about creating technology that empowers users and solves real-world problems. Prior to Google, she led product initiatives at leading tech companies, consistently delivering products that balance cutting-edge technology with user-centered design principles.";

  const copyToClipboard = async (text: string, type: 'short' | 'long') => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      if (type === 'short') {
        setCopiedShort(true);
        setTimeout(() => setCopiedShort(false), 2000);
      } else {
        setCopiedLong(true);
        setTimeout(() => setCopiedLong(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="bio" className={`py-20 pb-48 ${config.bgClass} relative transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 text-center transition-colors">
            Professional Bio
          </h2>
          <p className="text-center text-stone-600 dark:text-stone-400 max-w-2xl mx-auto -mt-4 mb-8 transition-colors">
            Ready-to-use bio snippets for media, speaking engagements, and press
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowLongBio(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !showLongBio
                  ? 'bg-rose-500 dark:bg-rose-600 text-white shadow-sm'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
            >
              Short
            </button>
            <button
              onClick={() => setShowLongBio(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                showLongBio
                  ? 'bg-rose-500 dark:bg-rose-600 text-white shadow-sm'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
            >
              Long
            </button>
          </div>

          {/* Bio Content */}
          <div className="relative">
            {/* Short Bio */}
            {!showLongBio && (
              <div className="bg-white dark:bg-stone-700 rounded-lg p-8 shadow-sm border border-stone-200 dark:border-stone-600 relative transition-colors animate-bio-fade-in">
                <button
                  onClick={() => copyToClipboard(shortBio, 'short')}
                  className="absolute top-4 right-4 p-2 text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-600 rounded-lg transition-all cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copiedShort ? (
                    <Check size={18} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-left pr-12 transition-colors">
                  {shortBio}
                </p>
              </div>
            )}

            {/* Long Bio */}
            {showLongBio && (
              <div className="bg-white dark:bg-stone-700 rounded-lg p-8 shadow-sm border border-stone-200 dark:border-stone-600 relative transition-colors animate-bio-fade-in">
                <button
                  onClick={() => copyToClipboard(longBio, 'long')}
                  className="absolute top-4 right-4 p-2 text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-600 rounded-lg transition-all cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copiedLong ? (
                    <Check size={18} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-left pr-12 transition-colors">
                  {longBio}
                </p>
              </div>
            )}
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
