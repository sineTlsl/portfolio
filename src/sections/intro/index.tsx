import LayoutContainer from '@/components/LayoutContainer';
import ScrollDown from '@/components/scroll/ScrollDown';
import IntroContentText from './IntroContentText';

export default function Intro() {
  return (
    <LayoutContainer
      name="about"
      isFade={false}
      background="#eaeaea"
      height="100vh"
    >
      <IntroContentText />
      <ScrollDown />
    </LayoutContainer>
  );
}
