import styles from "../Typography/typography.module.css";

export default function Typography({ title, content }) {
  return (
    <div>
      <h2 className={styles.headerStyle}>{title}</h2>
      <p className={styles.paragraphStyle}>{content}</p>
    </div>
  );
}
