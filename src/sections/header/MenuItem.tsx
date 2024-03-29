import Link from 'next/link';
import styles from './css/MenuItem.module.css';
import { Menu } from '@/constants/menu';

export default function MenuItem({ tab }: Menu) {
  return (
    <li key={tab} className={styles.item}>
      <Link className={styles['link']} href={`/#${tab}`} aria-label={tab}>
        {tab}
      </Link>
    </li>
  );
}
