import styles from './SectionTitle.module.css';

type Props = {
  title: string;
  marginBottom?: string;
};

export default function SectionTitle({ title, marginBottom = '4rem' }: Props) {
  return (
    <h2
      className={styles['title-style']}
      style={{
        marginBottom: marginBottom,
      }}
    >
      {title}
    </h2>
  );
}
