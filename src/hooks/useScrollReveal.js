import { useEffect, useRef } from 'react';

export const useScrollReveal = (className = 'reveal', threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export const useScrollRevealAll = (selector = '.reveal', threshold = 0.12) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
