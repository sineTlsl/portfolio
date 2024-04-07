'use client';

import { ReactNode } from 'react';
import styles from './css/FadeInAnimation.module.css';
import useScrollAnimation from '@/hooks/useScrollAnimation';

type Props = {
  name?: string;
  children: ReactNode;
};

export default function FadeInAnimation({ name, children }: Props) {
  const { isVisible, animationRef } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      id={name}
      ref={animationRef}
      className={`${styles['fade-wrap']} ${isVisible && styles['fade-in']}`}
    >
      {children}
    </div>
  );
}
