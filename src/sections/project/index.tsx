import LayoutContainer from '@/components/LayoutContainer';
import SectionTitle from '@/components/SectionTItle';
import ProjectCardList from './ProjectCardList';
import TitleSubText from '@/components/ui/icons/text/TitleSubText';

export default function Project() {
  return (
    <LayoutContainer name="project" padding="7rem 0" background="var(--bg-50)">
      <SectionTitle title="Project" marginBottom="0.5rem" />
      <TitleSubText>프로젝트를 클릭하면 더 자세히 볼 수 있어요!</TitleSubText>
      <ProjectCardList />
    </LayoutContainer>
  );
}
