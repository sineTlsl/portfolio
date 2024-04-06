import Link from 'next/link';
import styles from './Footer.module.css';

import { DEFAULT_CONNENT } from '@/constants/connect';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['connent-icon']}>
        {DEFAULT_CONNENT.map(({ name, icon, href }) => (
          <Link key={name} href={href} target="_blank">
            {icon}
          </Link>
        ))}
      </div>
      <p className={styles['footer-text']}>
        © 2024. Sieun Lim. All rights reserved.
      </p>
    </footer>
  );
}
