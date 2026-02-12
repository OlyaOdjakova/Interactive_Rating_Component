import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber, onClick, style }) {

  return (
    <button
      style={style}
      onClick={onClick}
      className={styles.ratingStyle}
    >
      {ratingNumber}
    </button>
  );
}
