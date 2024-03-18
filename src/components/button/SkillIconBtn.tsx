import Image from 'next/image';
import { SkillIcon } from '@/types/icon';

export default function SkillIconBtn({ name, icon }: SkillIcon) {
  return (
    <div
      style={{
        position: 'relative',
        width: '65px',
        height: '65px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src={`/assets/images/skill/${icon}`}
        width={45}
        height={45}
        alt={name}
        priority
      />
    </div>
  );
}
