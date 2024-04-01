import { Study } from '@/types/study';
import styles from './css/StudyItem.module.css';
import Image from 'next/image';
import ItemDesc from './ItemDesc';

type Props = {
  study: Study;
};

export default function StudyItem({ study }: Props) {
  return (
    <li className={styles['study-item']}>
      <div className={styles['item-img']}>
        <Image
          src={`/assets/images/study/${study.image}`}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="100%"
          alt="study"
          priority
        />
      </div>
      <ItemDesc study={study} />
    </li>
  );
}
