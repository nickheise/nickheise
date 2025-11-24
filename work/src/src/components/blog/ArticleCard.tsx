import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../../data/articles';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  delay?: number;
}

export default function ArticleCard({ article, onClick, delay = 0 }: ArticleCardProps) {
  return (
    <article
      className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group scroll-reveal flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Featured Image - Only render if image exists */}
      {article.featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 transition-colors self-start">
          {article.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3 transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-stone-600 dark:text-stone-300 mb-4 flex-grow transition-colors">
          {article.excerpt}
        </p>

        {/* Reading Time */}
        <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-xs mb-4 transition-colors">
          <Clock size={14} strokeWidth={1.5} />
          {article.readingTime} min read
        </div>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-rose-500 dark:text-rose-400 font-medium hover:text-rose-600 dark:hover:text-rose-300 transition-colors group-hover:gap-3">
          Read Article
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
}