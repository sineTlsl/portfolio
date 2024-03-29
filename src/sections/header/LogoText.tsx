import Link from 'next/link';
import styles from './css/LogoText.module.css';

export default function LogoText() {
  return (
    <>
      <Link href="/" className={styles['logo-link']}>
        {`Sieun's Portfolio`}
      </Link>
    </>
  );
}
