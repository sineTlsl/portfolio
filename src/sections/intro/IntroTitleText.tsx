'use client';

import { TITLETEXT } from '@/constants/intro';
import styles from './css/IntroTitleText.module.css';
import { Hahmlet } from 'next/font/google';

const hahmlet = Hahmlet({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function IntroTitleText() {
  return (
    <div className={`${styles['intro-text']} ${hahmlet.className}`}>
      <ul>
        {TITLETEXT.map((text, idx) => (
          <li key={idx}>
            {text === '임시은' ? (
              <>
                <span className={styles.bold}>{text}</span>
                입니다.
              </>
            ) : (
              text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
