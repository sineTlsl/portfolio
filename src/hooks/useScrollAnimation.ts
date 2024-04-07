import { useEffect, useState, useRef } from 'react';

export default function useScrollAnimation<
  T extends HTMLElement = HTMLElement
>() {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<T>(null);

  useEffect(() => {
    const currentTarget = animationRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return { isVisible, animationRef };
}
