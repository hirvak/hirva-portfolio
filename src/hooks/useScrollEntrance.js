import { useState, useEffect, useRef } from 'react';

/**
 * Reusable React Hook for Scroll-Triggered Entrance Animations
 * Uses IntersectionObserver with prefers-reduced-motion support.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Viewport intersection threshold (default: 0.12)
 * @param {boolean} options.triggerOnce - Whether animation plays once per page load (default: true)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollEntrance({ threshold = 0.12, triggerOnce = true } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Accessibility check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}

export default useScrollEntrance;
