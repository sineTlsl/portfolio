import LayoutContainer from '@/components/LayoutContainer';
import SubText from './SubText';
import SkillContent from './SkillContent';

export default function Skill() {
  return (
    <LayoutContainer gap="7.5rem" flexDirection="row" padding="5.5rem 0">
      <SubText />
      <SkillContent />
    </LayoutContainer>
  );
}
