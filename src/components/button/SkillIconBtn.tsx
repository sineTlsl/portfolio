import Image from 'next/image';
import { SkillIcon } from '@/types/icon';
import styles from './css/SkillIconBtn.module.css';

export default function SkillIconBtn({ name, icon }: SkillIcon) {
  return (
    <div className={styles['skill-icon']}>
      <Image
        src={`/assets/images/skill/${icon}`}
        width={45}
        height={45}
        alt={name}
        priority
      />
    </div>
  );
}
