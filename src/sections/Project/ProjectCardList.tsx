import ProjectCard from '@/components/card/ProjectCard';
import { PROJECTS } from '@/constants/project';

export default function ProjectCardList() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
