import LayoutContainer from '@/components/LayoutContainer';
import SectionTitle from '@/components/SectionTItle';
import StudyList from './StudyList';
import TitleSubText from '@/components/ui/icons/text/TitleSubText';

export default function Study() {
  return (
    <LayoutContainer name="study" padding="7rem 0 0 0">
      <SectionTitle title="Study" marginBottom="0.5rem" />
      <TitleSubText marginBottom="1.5rem">
        저는 이러한 스터디를 진행했어요!
      </TitleSubText>
      <StudyList />
    </LayoutContainer>
  );
}
