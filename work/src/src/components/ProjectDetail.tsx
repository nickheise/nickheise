import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Moon, Sun } from 'lucide-react';
import { projectsData } from '../data/projects';
import Footer from './layout/Footer';
import WaveDivider from './WaveDivider';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectDetailProps {
  projectId: string;
  onNavigateBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export default function ProjectDetail({ projectId, onNavigateBack, onNavigateToProject }: ProjectDetailProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  const project = projectsData.find(p => p.id === projectId);
  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = featuredProjects.filter(p => p.id !== projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [projectId]);

  if (!project || !project.detailContent) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-100 mb-4">Project not found</h2>
          <button
            onClick={onNavigateBack}
            className="text-rose-500 hover:text-rose-600 transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const { detailContent } = project;

  return (
    <div className={`min-h-screen bg-stone-50 dark:bg-stone-900 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 backdrop-blur-md shadow-sm border-b border-stone-200 dark:border-stone-800 transition-all duration-300 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
          {/* Left: Logo/Name */}
          <button
            onClick={onNavigateBack}
            className="text-xl md:text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight hover:text-rose-400 dark:hover:text-rose-400 transition-colors whitespace-nowrap"
          >
            Jaclyn Konzelmann
          </button>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateBack}
              className="hidden md:flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            
            {project.productLink && (
              <a
                href={project.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-medium text-sm hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white hover:scale-105 transition-all transform duration-200"
              >
                <span>View Live</span>
                <ExternalLink size={14} />
              </a>
            )}
            
            <button
              className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile back button */}
            <button
              onClick={onNavigateBack}
              className="md:hidden p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Image - moved to top */}
      <section className="pt-20 md:pt-24 bg-white dark:bg-stone-900 transition-colors">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-700">
              <img
                src={detailContent.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="relative pt-4 pb-12 md:pt-6 md:pb-16 bg-white dark:bg-stone-900 transition-colors overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500 mb-3 transition-colors">
              <button onClick={onNavigateBack} className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                Work
              </button>
              <span>/</span>
              <span className="text-stone-500 dark:text-stone-400">{project.title}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 transition-colors">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-full text-sm font-medium text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 leading-relaxed mb-8 transition-colors">
              {detailContent.overview}
            </p>

            {/* Metrics */}
            {detailContent.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 p-5 md:p-6 bg-stone-50/50 dark:bg-stone-800/30 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 transition-colors">
                {detailContent.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg md:text-xl font-bold text-stone-800 dark:text-stone-200 mb-1.5 transition-colors">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-stone-400 dark:text-stone-500 uppercase tracking-wider transition-colors">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-10 pb-48 bg-white dark:bg-stone-900 relative transition-colors">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 transition-colors">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailContent.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-rose-200 dark:hover:border-rose-800 transition-all hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-stone-700 dark:text-stone-200 leading-relaxed pt-1 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <WaveDivider 
          position="bottom" 
          fromColor="#ffffff"
          toColor="#fafaf9"
          fromColorDark="#1c1917"
          toColorDark="#292524"
          variant={2}
        />
      </section>

      {/* Detailed Story Section */}
      <section className="py-14 pb-48 bg-stone-50 dark:bg-stone-800 relative transition-colors">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 transition-colors">
              The Story
            </h2>
            <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
              {detailContent.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-stone-700 dark:text-stone-300 leading-relaxed mb-5 text-lg transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <WaveDivider 
          position="bottom" 
          fromColor="#fafaf9"
          toColor="#ffffff"
          fromColorDark="#292524"
          toColorDark="#1c1917"
          variant={3}
        />
      </section>

      {/* Additional Images Gallery */}
      {detailContent.images && detailContent.images.length > 0 && (
        <section className="py-14 pb-48 bg-white dark:bg-stone-900 relative transition-colors">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-10 text-center transition-colors">
                Product Showcase
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {detailContent.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-700 hover:shadow-2xl transition-shadow"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <WaveDivider 
            position="bottom" 
            fromColor="#ffffff"
            toColor="#fafaf9"
            fromColorDark="#1c1917"
            toColorDark="#292524"
            variant={1}
          />
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-14 pb-48 bg-stone-50 dark:bg-stone-800 relative transition-colors">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 text-center transition-colors">
              Explore More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((otherProject) => (
                <button
                  key={otherProject.id}
                  onClick={() => onNavigateToProject(otherProject.id)}
                  className="group text-left bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-xl transition-all overflow-hidden"
                >
                  {otherProject.image && (
                    <div className="aspect-video overflow-hidden bg-stone-200 dark:bg-stone-700">
                      <img
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {otherProject.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full text-xs font-medium text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                      {otherProject.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-300 line-clamp-2 mb-6">
                      {otherProject.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors pt-4 border-t border-stone-200/50 dark:border-stone-700/50">
                      View Project <ArrowRight size={14} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <WaveDivider 
          position="bottom" 
          fromColor="#fafaf9"
          toColor="#ffffff"
          fromColorDark="#292524"
          toColorDark="#1c1917"
          variant={5}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}