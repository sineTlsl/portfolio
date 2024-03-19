import Image from 'next/image';
import styles from './css/ProjectCard.module.css';
import { Project } from '@/types/project';
import CardText from './CardText';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className={styles['card-wrap']}>
      <div className={styles['preview-img']}>
        <Image
          src={`/assets/images/project/${project.image}`}
          fill
          style={{
            objectFit: 'cover',
          }}
          alt="preview"
          sizes="100%"
          priority
        />
      </div>
      <CardText project={project} />
    </div>
  );
}
