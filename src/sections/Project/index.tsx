import LayoutContainer from '@/components/LayoutContainer';
import SectionTitle from '@/components/SectionTItle';
import ProjectCardList from './ProjectCardList';

export default function Project() {
  return (
    <LayoutContainer height="100vh" background="#f8f8f8">
      <SectionTitle title="Project" marginBottom="0.5rem" />
      <p style={{ marginBottom: '3rem', fontSize: '14px', fontWeight: '300' }}>
        프로젝트를 클릭하면 더 자세히 볼 수 있어요!
      </p>
      <ProjectCardList />
    </LayoutContainer>
  );
}
