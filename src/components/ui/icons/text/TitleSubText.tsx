import { ReactNode } from 'react';
import styles from './css/TitleSubText.module.css';

type Props = {
  marginBottom?: string;
  children: ReactNode;
};
export default function TitleSubText({
  marginBottom = '3rem',
  children,
}: Props) {
  return (
    <p className={styles['title-sub-text']} style={{ marginBottom }}>
      {children}
    </p>
  );
}
