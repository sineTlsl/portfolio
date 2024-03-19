type Props = {
  title: string;
  marginBottom?: string;
};

export default function SectionTitle({ title, marginBottom = '4rem' }: Props) {
  return (
    <h2
      style={{
        fontSize: '30px',
        fontWeight: '600',
        marginBottom: marginBottom,
        textTransform: 'uppercase',
      }}
    >
      {title}
    </h2>
  );
}
