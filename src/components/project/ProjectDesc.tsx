import MarkdownViewer from '@/components/project/MarkdownViewer';
import { ProjectData } from '@/types/project';
import styles from './css/ProjectDesc.module.css';

export default function ProjectDesc({ project }: { project: ProjectData }) {
  return (
    <section
      className={styles['no-global-styles']}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <MarkdownViewer content={project.content} />
    </section>
  );
}
