import Image from 'next/image';
import styles from './css/ProjectCard.module.css';
import { Project } from '@/types/project';
import CardText from './CardText';
import Link from 'next/link';
import { isGif } from '@/utils/image';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`projects/${project.path}`}>
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
            unoptimized={isGif(project.image)}
            priority={isGif(project.image)}
          />
        </div>
        <CardText project={project} />
      </div>
    </Link>
  );
}
