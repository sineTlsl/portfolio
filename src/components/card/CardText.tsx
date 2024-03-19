import { Project } from '@/types/project';
import styles from './css/CardText.module.css';
import SkillTags from './SkillTags';

type Props = {
  project: Project;
};

export default function CardText({ project }: Props) {
  const { name, description, isTeam, skills } = project;

  return (
    <div className={styles['card-text']}>
      <div className={styles['flex-space']}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.team}>
          {isTeam ? 'Team Project' : 'Solo Project'}
        </span>
      </div>
      <p className={styles.desc}>{description}</p>
      <SkillTags skills={skills} />
    </div>
  );
}
