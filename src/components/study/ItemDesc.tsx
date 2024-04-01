import { Study } from '@/types/study';
import styles from './css/ItemDesc.module.css';
import ItemDescText from './ItemDescText';

export default function ItemDesc({ study }: { study: Study }) {
  const { name, date, description } = study;

  return (
    <div className={styles['item-desc']}>
      <h3 className={styles['item-title']}>{name}</h3>
      <p className={styles['item-date']}>{date}</p>
      <ItemDescText description={description} />
    </div>
  );
}
