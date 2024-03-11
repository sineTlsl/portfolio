'use client';

import styles from './ScrollDown.module.css';
import { Annie_Use_Your_Telescope } from 'next/font/google';
import { useEffect, useState } from 'react';

const Annie = Annie_Use_Your_Telescope({ weight: '400', subsets: ['latin'] });

export default function ScrollDown() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={`${Annie.className} ${isVisible ? '' : styles.hidden}`}>
      <div className={styles.scroll}>
        scroll<span></span>
      </div>
    </div>
  );
}
