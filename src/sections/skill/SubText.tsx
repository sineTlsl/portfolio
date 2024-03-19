import React from 'react';
import { SUBTEXTS } from '@/constants/intro';
import styles from './css/SubText.module.css';

const pointText = ['원활한 소통', '긍정적인 사고방식', '성공적인 결과'];

function highlightText(text: string) {
  const regex = new RegExp(`(${pointText.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    pointText.includes(part) ? (
      <span key={idx} className={styles.bold}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function SubText() {
  return (
    <ul className={styles['flex-style']}>
      {SUBTEXTS.map((text, textIdx) => (
        <li key={textIdx} className={styles.text}>
          {text.split(',').map((s, idx) => (
            <p key={idx}>{highlightText(s)}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}
