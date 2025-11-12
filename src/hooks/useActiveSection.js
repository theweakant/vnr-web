import { useEffect, useState } from 'react';

// Hook: observe a list of section ids and return the currently visible/active one
export default function useActiveSection(sectionIds, options = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 }) {
  const [active, setActive] = useState(sectionIds?.[0] || null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observers = new Map();
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.set(id, el);
      }
    });

    return () => {
      observer.disconnect();
      observers.clear();
    };
  }, [sectionIds?.join(','), options.root, options.rootMargin, options.threshold]);

  return active;
}
