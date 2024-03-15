'use client';

import { TITLETEXT } from '@/data/intro';
import styles from './css/IntroTitleText.module.css';
import { Playfair_Display } from 'next/font/google';

const playFiar = Playfair_Display({
  weight: '600',
  subsets: ['latin'],
});

export default function IntroTitleText() {
  return (
    <div className={`${styles.waviy} ${playFiar.className}`}>
      {TITLETEXT.split('').map((s, idx) => (
        <span
          key={idx}
          style={
            {
              '--i': idx + 1,
              marginLeft: s === s.toUpperCase() && idx !== 0 && '10px',
            } as React.CSSProperties
          }
        >
          {s}
        </span>
      ))}
    </div>
  );
}
