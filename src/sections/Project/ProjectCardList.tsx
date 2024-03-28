import ProjectCard from '@/components/card/ProjectCard';
import { getAllProjects } from '@/service/projects';

export default async function ProjectCardList() {
  const projects = await getAllProjects();

  return (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
