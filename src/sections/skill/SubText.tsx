'use client';

import React from 'react';
import { SUBTEXTS } from '@/constants/intro';
import styles from './css/SubText.module.css';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const pointText = ['원활한 소통', '긍정적인 사고방식', '성공적인 결과'];

function highlightText(text: string, isVisible: boolean) {
  const regex = new RegExp(`(${pointText.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    pointText.includes(part) ? (
      <span
        key={idx}
        className={`${styles.bold} ${isVisible ? styles.highlight : ''}`}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function SubText() {
  const { isVisible, animationRef } = useScrollAnimation<HTMLUListElement>();

  return (
    <ul className={styles['flex-style']} ref={animationRef}>
      {SUBTEXTS.map((text, textIdx) => (
        <li key={textIdx} className={styles.text}>
          {text.split(',').map((s, idx) => (
            <p key={idx}>{highlightText(s, isVisible)}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}
