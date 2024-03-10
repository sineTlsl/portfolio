'use client';

import { Playfair_Display } from 'next/font/google';
import styles from './Intro.module.css';

const playFiar = Playfair_Display({
  weight: '600',
  subsets: ['latin'],
});

export default function Intro() {
  return (
    <section
      style={{ width: '100%', height: '100vh' }}
      className={playFiar.className}
    >
      <div className={styles.contentTextWrap}>
        <p>FrontEnd Developer</p>
        <p>Portfolio</p>
      </div>
    </section>
  );
}
