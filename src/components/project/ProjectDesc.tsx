import MarkdownViewer from '@/components/markdown/MarkdownViewer';
import { ProjectData } from '@/types/project';

export default function ProjectDesc({ project }: { project: ProjectData }) {
  return (
    <section
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <MarkdownViewer content={project.content} />
    </section>
  );
}
