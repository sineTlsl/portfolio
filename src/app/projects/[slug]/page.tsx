import Content from '@/components/project/Content';
import { getFindProject } from '@/service/projects';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getFindProject(slug);

  return (
    <article
      style={{
        margin: '130px 0',
        padding: '0 20px',
      }}
    >
      <Content project={project} />
    </article>
  );
}
