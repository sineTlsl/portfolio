'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

const inter = Inter({ subsets: ['latin'] });

const menuTabs = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/project',
    title: 'Project',
  },
  {
    href: '/study',
    title: 'Study',
  },
];

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
    <header
      className={`${styles.myHeaderWrap} ${inter.className} ${
        isHeaderActive ? `${styles.active}` : ''
      }`}
    >
      <div>
        <Link className={styles.commText} href='/'>
          <span>{`Sieun's`}</span>Portfolio
        </Link>
      </div>
      <nav>
        <ul className={styles.menuTabList}>
          {menuTabs.map(({ href, title }) => (
            <li key={title} className={styles.menuItem}>
              <Link className={styles.commText} href={href} aria-label={title}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
