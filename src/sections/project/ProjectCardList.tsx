import MultiCarousel from '@/components/card/MultiCarousel';
import ProjectCard from '@/components/card/ProjectCard';
import { getAllProjects } from '@/service/projects';
import styles from './css/ProjectCardList.module.css';

export default async function ProjectCardList() {
  const projects = await getAllProjects();

  return (
    <div className={styles['card-list']}>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </MultiCarousel>
    </div>
  );
}
