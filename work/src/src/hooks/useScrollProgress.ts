import { useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return scaleX;
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function useScrollTrigger(threshold = 100) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      if (scrolled !== triggered) {
        setTriggered(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, triggered]);

  return triggered;
}
