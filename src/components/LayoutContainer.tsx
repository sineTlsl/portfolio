type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Props = {
  height?: string;
  flexDirection?: flexDirection;
  background?: string;
  gap?: string;
  padding?: string;
  children?: React.ReactNode;
};

export default function LayoutContainer({
  height = '100%',
  flexDirection = 'column',
  background = '#fff',
  gap = '0rem',
  padding = '0rem',
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
        padding: padding,
      }}
    >
      {children}
    </section>
  );
}
