import { ReactNode } from 'react';
import FadeInAnimation from './scroll/FadeInAnimation';

type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Props = {
  name?: string;
  isFade?: boolean;
  height?: string;
  flexDirection?: flexDirection;
  background?: string;
  gap?: string;
  padding?: string;
  children?: ReactNode;
};

export default function LayoutContainer({
  name,
  isFade = true,
  height = '100%',
  flexDirection = 'column',
  background = '#fff',
  gap = '0rem',
  padding = '0rem',
  children,
}: Props) {
  const content = (
    <section
      style={{
        width: '100%',
        height: height,
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: 'center',
        alignItems: 'center',
        background: background,
        gap: gap,
        padding: padding,
      }}
    >
      {children}
    </section>
  );
  return isFade ? (
    <FadeInAnimation name={name}>{content}</FadeInAnimation>
  ) : (
    content
  );
}
