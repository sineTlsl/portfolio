'use client';

import IntroTitleText from './IntroTitleText';
import RainbowImage from './RainbowImage';

export default function IntroContentText() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IntroTitleText />
      <RainbowImage />
    </div>
  );
}
