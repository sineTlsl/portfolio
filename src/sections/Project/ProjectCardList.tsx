import MultiCarousel from '@/components/card/MultiCarousel';
import ProjectCard from '@/components/card/ProjectCard';
import { getAllProjects } from '@/service/projects';

export default async function ProjectCardList() {
  const projects = await getAllProjects();

  return (
    <div style={{ width: '100%', maxWidth: '1100px', margin: '0 1rem' }}>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </MultiCarousel>
    </div>
  );
}
