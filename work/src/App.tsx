import { useState, useEffect, lazy, Suspense, startTransition } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';
import Hero from './src/components/sections/Hero';
import FeaturedWork from './src/components/sections/FeaturedWork';
import ProjectDetail from './src/components/ProjectDetail';
import ContentInventory from './src/components/ContentInventory';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { SEO } from './src/components/SEO';
import { ErrorBoundary } from './src/components/ErrorBoundary';

// Lazy load below-the-fold sections for better performance
const LogosSection = lazy(() => import('./src/components/sections/LogosSection'));
const ExperienceTimeline = lazy(() => import('./src/components/sections/ExperienceTimeline'));
const BioSection = lazy(() => import('./src/components/sections/BioSection'));
const PatentsSection = lazy(() => import('./src/components/sections/PatentsSection'));
const PersonalSection = lazy(() => import('./src/components/sections/PersonalSection'));
const ThoughtsSection = lazy(() => import('./src/components/sections/ThoughtsSection'));
const FAQ = lazy(() => import('./src/components/sections/FAQ'));
const BlogLanding = lazy(() => import('./src/components/blog/BlogLanding'));
const ArticleDetail = lazy(() => import('./src/components/blog/ArticleDetail'));
const WhereStartedSection = lazy(() => import('./src/components/sections/WhereStartedSection'));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="animate-pulse-slow w-16 h-16 rounded-full bg-rose-200 dark:bg-rose-900"></div>
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project' | 'assets' | 'blog' | 'article'>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove '#'
      
      // Start fade out
      setIsTransitioning(true);
      
      // After fade out, update content and scroll
      setTimeout(() => {
        if (hash.startsWith('project/')) {
          const projectId = hash.replace('project/', '');
          setCurrentProjectId(projectId);
          setCurrentView('project');
          setCurrentArticleSlug(null);
        } else if (hash.startsWith('blog/')) {
          const articleSlug = hash.replace('blog/', '');
          setCurrentArticleSlug(articleSlug);
          setCurrentView('article');
          setCurrentProjectId(null);
        } else if (hash === 'blog') {
          setCurrentView('blog');
          setCurrentProjectId(null);
          setCurrentArticleSlug(null);
        } else if (hash === 'assets') {
          setCurrentView('assets');
          setCurrentProjectId(null);
          setCurrentArticleSlug(null);
        } else {
          setCurrentView('home');
          setCurrentProjectId(null);
          setCurrentArticleSlug(null);
        }
        
        // Scroll to top instantly
        window.scrollTo(0, 0);
        
        // Start fade in
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 250);
    };

    // Handle initial load without transition
    const initialHash = window.location.hash.slice(1);
    if (initialHash.startsWith('project/')) {
      const projectId = initialHash.replace('project/', '');
      setCurrentProjectId(projectId);
      setCurrentView('project');
      setCurrentArticleSlug(null);
    } else if (initialHash.startsWith('blog/')) {
      const articleSlug = initialHash.replace('blog/', '');
      setCurrentArticleSlug(articleSlug);
      setCurrentView('article');
      setCurrentProjectId(null);
    } else if (initialHash === 'blog') {
      setCurrentView('blog');
      setCurrentProjectId(null);
      setCurrentArticleSlug(null);
    } else if (initialHash === 'assets') {
      setCurrentView('assets');
      setCurrentProjectId(null);
      setCurrentArticleSlug(null);
    }
    window.scrollTo(0, 0);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigateBack = () => {
    window.location.hash = '';
  };

  const handleNavigateToProject = (projectId: string) => {
    window.location.hash = `project/${projectId}`;
  };
  
  const handleNavigateToAssets = () => {
    window.location.hash = 'assets';
  };

  const handleNavigateToBlog = () => {
    window.location.hash = 'blog';
  };

  const handleNavigateToArticle = (articleSlug: string) => {
    window.location.hash = `blog/${articleSlug}`;
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <SEO />
          <div className="bg-stone-50 dark:bg-stone-900 min-h-screen font-sans selection:bg-rose-200 selection:text-rose-900 dark:selection:bg-rose-800 dark:selection:text-rose-100 transition-colors duration-300">
            <div className={isTransitioning ? 'page-transition-out' : 'page-transition-in'}>
              {currentView === 'home' ? (
                <>
                  <Header onNavigateToAssets={handleNavigateToAssets} currentView={currentView} />
                  <main>
                    <Hero />
                    <Suspense fallback={<SectionLoader />}>
                      <LogosSection />
                    </Suspense>
                    <FeaturedWork />
                    <Suspense fallback={<SectionLoader />}>
                      <ExperienceTimeline />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <BioSection />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <PatentsSection />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <WhereStartedSection />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <ThoughtsSection />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <PersonalSection />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                      <FAQ />
                    </Suspense>
                  </main>
                  <Footer />
                </>
              ) : currentView === 'assets' ? (
                <ContentInventory onNavigateBack={handleNavigateBack} />
              ) : currentView === 'blog' ? (
                <>
                  <Header currentView={currentView} onNavigateBack={handleNavigateBack} />
                  <Suspense fallback={<SectionLoader />}>
                    <BlogLanding onNavigateBack={handleNavigateBack} onNavigateToArticle={handleNavigateToArticle} />
                  </Suspense>
                </>
              ) : currentView === 'article' ? (
                currentArticleSlug && (
                  <>
                    <Header currentView={currentView} onNavigateBack={() => window.location.hash = 'blog'} />
                    <Suspense fallback={<SectionLoader />}>
                      <ArticleDetail
                        articleSlug={currentArticleSlug}
                        onNavigateBack={handleNavigateBack}
                        onNavigateToArticle={handleNavigateToArticle}
                      />
                    </Suspense>
                  </>
                )
              ) : (
                currentProjectId && (
                  <ProjectDetail
                    projectId={currentProjectId}
                    onNavigateBack={handleNavigateBack}
                    onNavigateToProject={handleNavigateToProject}
                  />
                )
              )}
            </div>
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}