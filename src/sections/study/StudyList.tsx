import styles from './css/StudyList.module.css';
import { getAllStudys } from '@/service/studys';
import StudyItem from '@/components/study/StudyItem';

export default async function StudyList() {
  const studys = await getAllStudys();

  return (
    <div className={styles['study-list-wrap']}>
      <div className={styles['hr-wrap']}>
        <p className={styles.hr} />
      </div>
      <ul className={styles['study-list-ul']}>
        {studys.map((study, idx) => (
          <StudyItem key={idx} study={study} />
        ))}
      </ul>
    </div>
  );
}
