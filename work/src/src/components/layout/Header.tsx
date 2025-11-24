import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileText, Download, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

// Navigation configuration - centralized for easy maintenance
const NAV_CONFIG = {
  mainItems: [
    { name: 'Work', href: '#work', ariaLabel: 'Navigate to work section' },
    { name: 'Experience', href: '#experience', ariaLabel: 'Navigate to experience section' },
    { name: 'Personal', href: '#personal', ariaLabel: 'Navigate to personal section' }
  ],
  actions: {
    blog: { 
      label: 'Blog', 
      href: '#blog',
      ariaLabel: 'Read blog posts'
    },
    resume: { 
      label: 'Resume', 
      href: '/resume.pdf',
      ariaLabel: 'Download resume PDF',
      icon: Download
    }
  }
} as const;

interface HeaderProps {
  onNavigateToAssets?: () => void;
  currentView?: 'home' | 'project' | 'assets' | 'blog' | 'article';
  onNavigateBack?: () => void;
}

export default function Header({ onNavigateToAssets, currentView = 'home', onNavigateBack }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Scroll detection with performance optimization
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll navigation with accessibility
  const handleNavClick = (href: string, event?: React.MouseEvent) => {
    event?.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update focus for keyboard navigation
        (element as HTMLElement).focus({ preventScroll: true });
      }, 300);
    }
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  // Blog/Article view - simplified navigation
  if (currentView === 'blog' || currentView === 'article') {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 backdrop-blur-md shadow-sm border-b border-stone-200 dark:border-stone-800 transition-all duration-300 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
          {/* Logo/Name */}
          <button
            onClick={onNavigateBack}
            className="text-xl md:text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight hover:text-rose-400 dark:hover:text-rose-400 transition-colors whitespace-nowrap cursor-pointer"
            aria-label="Return to home page"
          >
            Jaclyn Konzelmann
          </button>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {currentView === 'article' && (
              <button
                onClick={() => window.location.hash = 'blog'}
                className="hidden md:flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer"
                aria-label="Back to blog"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>
            )}
            
            {currentView === 'blog' && onNavigateBack && (
              <button
                onClick={onNavigateBack}
                className="hidden md:flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer"
                aria-label="Back to home"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>
            )}
            
            <a
              href="#blog"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-900 text-white dark:text-white rounded-full font-medium text-sm hover:bg-rose-500 dark:hover:bg-rose-500 hover:scale-105 transition-all transform duration-200 cursor-pointer"
              aria-label={NAV_CONFIG.actions.blog.ariaLabel}
            >
              <span>{NAV_CONFIG.actions.blog.label}</span>
            </a>
            
            <button
              className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile back button */}
            <button
              onClick={currentView === 'article' ? () => window.location.hash = 'blog' : onNavigateBack}
              className="md:hidden p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  // Default home view navigation
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && !mobileMenuOpen
          ? 'bg-white dark:bg-stone-900 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl md:text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight hover:text-rose-400 dark:hover:text-rose-400 transition-colors whitespace-nowrap cursor-pointer"
          aria-label="Jaclyn Konzelmann - Portfolio home"
        >
          Jaclyn Konzelmann
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2" role="navigation" aria-label="Main navigation">
          {/* Main nav items */}
          {NAV_CONFIG.mainItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => handleNavClick(item.href, e)}
              className="nav-item-hover relative text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-stone-100 dark:hover:bg-stone-700 font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer px-3 py-2 rounded-lg"
              aria-label={item.ariaLabel}
            >
              {item.name}
            </button>
          ))}
          
          {/* Content Inventory (Temporary) */}
          {onNavigateToAssets && (
            <button
              onClick={onNavigateToAssets}
              className="nav-item-hover relative flex items-center gap-1.5 text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-stone-100 dark:hover:bg-stone-700 font-medium transition-colors text-xs uppercase tracking-wider cursor-pointer px-2 py-2 rounded-lg"
              title="Content Inventory (Temporary)"
              aria-label="View content inventory"
            >
              <FileText size={14} />
              <span>Content</span>
            </button>
          )}
          
          {/* Resume Download - Icon only */}
          <a
            href={NAV_CONFIG.actions.resume.href}
            download
            className="nav-item-hover relative flex items-center gap-1.5 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-stone-100 dark:hover:bg-stone-700 font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer px-3 py-2 rounded-lg"
            aria-label={NAV_CONFIG.actions.resume.ariaLabel}
            title={NAV_CONFIG.actions.resume.ariaLabel}
          >
            <Download size={14} />
            <span>Resume</span>
          </a>
          
          {/* Blog Button - Always filled */}
          <a
            href={NAV_CONFIG.actions.blog.href}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-900 text-white dark:text-white rounded-full font-medium text-sm hover:bg-rose-500 dark:hover:bg-rose-500 hover:scale-105 transition-all transform duration-200 cursor-pointer"
            aria-label={NAV_CONFIG.actions.blog.ariaLabel}
          >
            {NAV_CONFIG.actions.blog.label}
          </a>
          
          {/* Theme Toggle */}
          <button
            className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Header Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-stone-50 dark:bg-stone-900 z-40 transition-all duration-500 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center pt-20 pb-12">
          <nav 
            className={`flex flex-col items-center space-y-6 w-full transition-all duration-700 ease-out ${
              mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            aria-label="Mobile main navigation"
          >
            {/* Main nav items */}
            {NAV_CONFIG.mainItems.map((item, index) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 cursor-pointer ${
                  mobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                aria-label={item.ariaLabel}
              >
                {item.name}
              </button>
            ))}
            
            {/* Blog Button - Filled in mobile */}
            <a
              href={NAV_CONFIG.actions.blog.href}
              onClick={handleCloseMenu}
              className={`px-8 py-3 mt-4 bg-stone-900 dark:bg-stone-900 text-white dark:text-white rounded-full font-medium text-xl hover:bg-rose-500 dark:hover:bg-rose-500 hover:scale-105 transition-all duration-300 cursor-pointer ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${NAV_CONFIG.mainItems.length * 50}ms` : '0ms'
              }}
              aria-label={NAV_CONFIG.actions.blog.ariaLabel}
            >
              {NAV_CONFIG.actions.blog.label}
            </a>
            
            {/* Resume Download - Icon only */}
            <a
              href={NAV_CONFIG.actions.resume.href}
              download
              className={`flex items-center gap-2 text-xl font-medium text-stone-500 dark:text-stone-400 hover:text-rose-500 dark:hover:text-rose-400 px-8 py-3 border border-stone-200 dark:border-stone-700 rounded-full hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300 cursor-pointer ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${(NAV_CONFIG.mainItems.length + 1) * 50}ms` : '0ms'
              }}
              aria-label={NAV_CONFIG.actions.resume.ariaLabel}
            >
              <Download size={18} />
              Resume
            </a>
            
            {/* Close Button */}
            <button
              onClick={handleCloseMenu}
              className={`mt-8 p-3 text-stone-800 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-all duration-300 cursor-pointer ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${(NAV_CONFIG.mainItems.length + 2) * 50}ms` : '0ms'
              }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}