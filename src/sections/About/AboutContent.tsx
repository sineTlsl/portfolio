import { SUBTEXTS } from '@/data/intro';

export default function AboutContent() {
  return (
    <div
      style={{
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
      }}
    >
      {SUBTEXTS.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
}
