'use client';

import Connect from './Connect';
import IntroTitleText from './IntroTitleText';
import Profile from './Profile';
import RainbowImage from './RainbowImage';
import styles from './css/IntroContentText.module.css';

export default function IntroContentText() {
  return (
    <div className={styles['content-wrap']}>
      <div className={styles['flex-row']}>
        <IntroTitleText />
        <div className={styles.about}>
          <Profile />
          <Connect />
        </div>
      </div>
      <RainbowImage />
    </div>
  );
}
