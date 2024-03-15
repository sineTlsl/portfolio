'use client';

import LayoutContainer from '@/components/LayoutContainer';
import ScrollDown from '@/components/scroll/ScrollDown';
import IntroContentText from './IntroContentText';

export default function Intro() {
  return (
    <LayoutContainer background="#f2f2f2">
      <IntroContentText />
      <ScrollDown />
    </LayoutContainer>
  );
}
