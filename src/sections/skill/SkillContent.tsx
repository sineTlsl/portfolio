import { SKILLICON } from '@/data/skill';
import ToolTipIcon from '@/components/icon/ToolTipIcon';
import SkillIconBtn from '@/components/button/SkillIconBtn';
import styles from './css/SkillContent.module.css';

export default function SkillContent() {
  return (
    <div className={styles.content}>
      <h3 style={{ fontSize: '26px', fontWeight: '600' }}>Skill</h3>
      <div className={styles['skill-text']}>
        {SKILLICON.map(({ name, icon }) => (
          <ToolTipIcon key={name} name={name}>
            <SkillIconBtn name={name} icon={icon} />
          </ToolTipIcon>
        ))}
      </div>
    </div>
  );
}
