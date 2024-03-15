import Link from 'next/link';
import styles from './css/MenuItem.module.css';

type MenuItemProps = {
  href: string;
  tab: string;
};

export default function MenuItem({ href, tab }: MenuItemProps) {
  return (
    <li key={tab} className={styles.item}>
      <Link className={styles['link']} href={href} aria-label={tab}>
        {tab}
      </Link>
    </li>
  );
}
