import LayoutContainer from '@/components/LayoutContainer';
import SectionTitle from '@/components/SectionTItle';
import ProjectCardList from './ProjectCardList';
import TitleSubText from '@/components/ui/icons/text/TitleSubText';

export default function Project() {
  return (
    <LayoutContainer
      name="project"
      height="100vh"
      background="#f8f8f8"
      padding=" 0 0 2rem 0"
    >
      <SectionTitle title="Project" marginBottom="0.5rem" />
      <TitleSubText>프로젝트를 클릭하면 더 자세히 볼 수 있어요!</TitleSubText>
      <ProjectCardList />
    </LayoutContainer>
  );
}
