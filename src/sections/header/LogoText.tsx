import Link from 'next/link';

export default function LogoText() {
  return (
    <>
      <Link
        href='/'
        style={{
          textDecoration: 'none',
          textTransform: 'uppercase',
          color: '#000',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        <span style={{ marginRight: '8px' }}>{`Sieun's`}</span>Portfolio
      </Link>
    </>
  );
}
