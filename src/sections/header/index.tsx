'use client';

import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import styles from './css/header.module.css';

import ScrollYProgressBar from '@/components/scroll/ScrollYProgressBar';
import MenuList from './MenuList';
import LogoText from './LogoText';

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  const [prevScrollTop, setPrevScrollTop] = useState<number>(0);
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false);

  useEffect(() => {
    /* 스크롤 시 헤더 보여줬다가 숨기기 */
    const handleScroll = () => {
      const nowScrollTop = window.scrollY;

      setIsHeaderActive(nowScrollTop > prevScrollTop);
      setPrevScrollTop(nowScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollTop]);

  return (
    <header>
      <ScrollYProgressBar />
      <div
        className={`${styles['my-header']} ${inter.className} ${
          isHeaderActive ? `${styles.active}` : ''
        }`}
      >
        <LogoText />
        <MenuList />
      </div>
    </header>
  );
}
