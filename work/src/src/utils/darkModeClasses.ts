/**
 * Centralized dark mode class utilities
 * Use these to ensure consistent dark mode styling across all sections
 */

export const darkMode = {
  // Backgrounds
  bg: {
    white: 'bg-white dark:bg-stone-900',
    stone: 'bg-stone-50 dark:bg-stone-800',
    rose: 'bg-rose-50 dark:bg-rose-950',
    amber: 'bg-amber-50 dark:bg-amber-950',
    card: 'bg-white dark:bg-stone-800',
    cardAlt: 'bg-[#FDF8F5] dark:bg-stone-800/50',
  },
  
  // Text colors
  text: {
    primary: 'text-stone-900 dark:text-stone-100',
    secondary: 'text-stone-600 dark:text-stone-300',
    muted: 'text-stone-500 dark:text-stone-400',
    heading: 'text-stone-900 dark:text-white',
  },
  
  // Borders
  border: {
    default: 'border-stone-200 dark:border-stone-700',
    light: 'border-stone-100 dark:border-stone-800',
    hover: 'hover:border-rose-300 dark:hover:border-rose-700',
  },
  
  // Hover states
  hover: {
    card: 'hover:shadow-xl hover:border-rose-100 dark:hover:border-rose-900',
    text: 'hover:text-rose-500 dark:hover:text-rose-400',
    bg: 'hover:bg-stone-100 dark:hover:bg-stone-700',
  },
  
  // Tags/badges
  tag: {
    bg: 'bg-white dark:bg-stone-700',
    text: 'text-stone-700 dark:text-stone-200',
    border: 'border-stone-200 dark:border-stone-600',
  },
  
  // Wave divider colors
  wave: {
    white: '#ffffff',
    whiteDark: '#1c1917', // stone-900
    stone: '#fafaf9',
    stoneDark: '#292524', // stone-800
  }
};
