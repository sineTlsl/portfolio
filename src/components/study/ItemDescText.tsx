import styles from './css/ItemDescText.module.css';

type Props = {
  description: string[];
};

export default function ItemDescText({ description }: Props) {
  return (
    <ul className={styles['item-desc-text']}>
      {description.map((desc, idx) => (
        <li key={idx}>
          <span className={styles.circle} />
          {desc}
        </li>
      ))}
    </ul>
  );
}
