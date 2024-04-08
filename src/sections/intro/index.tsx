import LayoutContainer from '@/components/LayoutContainer';
import ScrollDown from '@/components/scroll/ScrollDown';
import IntroContentText from './IntroContentText';

export default function Intro() {
  return (
    <LayoutContainer
      name="about"
      isFade={false}
      height="100vh"
      background="var(--bg-100)"
    >
      <IntroContentText />
      <ScrollDown />
    </LayoutContainer>
  );
}
