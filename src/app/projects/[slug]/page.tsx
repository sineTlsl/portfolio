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
    <article className="md-page">
      <Content project={project} />
    </article>
  );
}
