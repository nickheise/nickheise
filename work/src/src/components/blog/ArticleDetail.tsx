import { useState, useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../../data/articles';
import ContentBlock from './ContentBlock';
import ArticleCard from './ArticleCard';

interface ArticleDetailProps {
  articleSlug: string;
  onNavigateBack: () => void;
  onNavigateToArticle: (slug: string) => void;
}

export default function ArticleDetail({ articleSlug, onNavigateBack, onNavigateToArticle }: ArticleDetailProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  
  const article = getArticleBySlug(articleSlug);
  const relatedArticles = article ? getRelatedArticles(article.id) : [];

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reading progress tracker
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleSlug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-stone-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Article Not Found
          </h1>
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-500 to-orange-500 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Article Header */}
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 transition-colors">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 transition-colors">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-stone-200 dark:border-stone-800 transition-colors">
              <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 transition-colors">
                <Clock size={18} />
                {article.readingTime} min read
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-sm rounded-full transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
              {article.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-stone-50 dark:bg-stone-800 py-16 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 transition-colors">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                    onClick={() => onNavigateToArticle(relatedArticle.slug)}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}