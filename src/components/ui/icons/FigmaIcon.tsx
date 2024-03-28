import Image from 'next/image';

export default function FigmaIcon() {
  return (
    <Image
      src="/assets/images/skill/figma.png"
      alt="figma"
      style={{ filter: 'grayscale(100%)' }}
      width={30}
      height={30}
      priority
    />
  );
}
