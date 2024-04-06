import Image from 'next/image';
import styles from './css/SkillTags.module.css';
import { TEACHSTACK } from '@/constants/stack';

type Props = {
  skills: string[];
};

export default function SkillTags({ skills }: Props) {
  const findSkillImg = (skillName: string) => {
    const skill = TEACHSTACK.find((tech) => tech.icon === skillName);

    return skill ? `/assets/images/skill/${skill.image}` : '';
  };

  return (
    <div className={styles.skill}>
      {skills.map((skill: string) => (
        <div key={skill} className={styles['skill-tag']}>
          <Image src={findSkillImg(skill)} height={15} width={15} alt={skill} />
          {skill}
        </div>
      ))}
    </div>
  );
}
