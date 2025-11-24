import { useState, useMemo } from 'react';
import { ArrowLeft, Search, Clock, ArrowRight } from 'lucide-react';
import { articles, getFeaturedArticle, categories, type Category } from '../../data/articles';
import ArticleCard from './ArticleCard';

interface BlogLandingProps {
  onNavigateBack: () => void;
  onNavigateToArticle: (slug: string) => void;
}

const ARTICLES_PER_PAGE = 6;

export default function BlogLanding({ onNavigateBack, onNavigateToArticle }: BlogLandingProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedCount, setDisplayedCount] = useState(ARTICLES_PER_PAGE);

  const featuredArticle = getFeaturedArticle();

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let filtered = articles.filter(article => !article.featured);

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, displayedCount);
  const hasMore = displayedCount < filteredArticles.length;

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + ARTICLES_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Featured Article Hero */}
      {featuredArticle && (
        <section className="bg-gradient-to-br from-stone-50 to-rose-50 dark:from-stone-800 dark:to-stone-900 py-16 pt-24 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Featured
              </span>
              <div className={`grid ${featuredArticle.featuredImage ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-12 items-center`}>
                <div>
                  <span className="inline-block px-3 py-1 bg-white dark:bg-stone-700 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 transition-colors">
                    {featuredArticle.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-stone-600 dark:text-stone-300 text-lg mb-6 transition-colors">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-xs transition-colors">
                      <Clock size={14} strokeWidth={1.5} />
                      {featuredArticle.readingTime} min read
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigateToArticle(featuredArticle.slug)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all hover:scale-105 group"
                  >
                    Read Article
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {featuredArticle.featuredImage && (
                  <div className="relative">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                      loading="eager"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="bg-white dark:bg-stone-900 py-12 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-stone-50 dark:bg-stone-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-600 dark:text-stone-400 text-lg">
                  No articles found. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {displayedArticles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={() => onNavigateToArticle(article.slug)}
                      delay={index * 100}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center">
                    <button
                      onClick={handleLoadMore}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all hover:scale-105"
                    >
                      Load More Articles
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* Results Count */}
                <div className="text-center mt-8 text-stone-500 dark:text-stone-400 text-sm">
                  Showing {displayedArticles.length} of {filteredArticles.length} articles
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}