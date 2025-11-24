import { useEffect } from 'react';

/**
 * Custom hook to initialize scroll reveal animations using IntersectionObserver
 * This adds the 'revealed' class to elements with 'scroll-reveal' class when they enter viewport
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: unobserve after revealing for better performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    );

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
