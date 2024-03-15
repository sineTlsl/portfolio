type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Props = {
  height?: string;
  flexDirection?: flexDirection;
  background: string;
  gap?: string;
  children?: React.ReactNode;
};

export default function LayoutContainer({
  height = '100vh',
  flexDirection = 'column',
  background,
  gap = '0rem',
  children,
}: Props) {
  return (
    <section
      style={{
        width: '100%',
        height: height,
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: 'center',
        alignItems: 'center',
        background: background,
        gap: gap,
      }}
    >
      {children}
    </section>
  );
}
