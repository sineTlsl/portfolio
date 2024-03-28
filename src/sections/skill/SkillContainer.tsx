import styles from './css/SkillContainer.module.css';

import SubText from './SubText';
import SkillContent from './SkillContent';

export default function SkillContainer() {
  return (
    <div className={styles.container}>
      <SubText />
      <SkillContent />
    </div>
  );
}
