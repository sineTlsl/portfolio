import Image from 'next/image';
import styles from './css/RainbowImage.module.css';

export default function RainbowImage() {
  return (
    <div className={styles['rainbow-wrap']}>
      <Image
        className={styles.rainbow}
        src='/assets/images/rainbow.png'
        width={125}
        height={100}
        alt='무지개'
      />
    </div>
  )
}