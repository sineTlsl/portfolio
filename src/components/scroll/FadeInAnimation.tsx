'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './css/FadeInAnimation.module.css';

type Props = {
  children: ReactNode;
};

export default function FadeInAnimation({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTarget = scrollRef.current;
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

  return (
    <div
      ref={scrollRef}
      className={`${styles['fade-wrap']} ${isVisible && styles['fade-in']}`}
    >
      {children}
    </div>
  );
}