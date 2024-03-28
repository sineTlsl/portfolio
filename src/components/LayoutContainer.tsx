import { ReactNode } from 'react';
import FadeInAnimation from './scroll/FadeInAnimation';
import styles from './LayoutContainer.module.css';

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
      className={styles.container}
      style={{
        height: height,
        flexDirection: flexDirection,
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
