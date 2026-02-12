import styles from "./rating-button.module.css";
import React from "react";

interface RatingButtonProps {
  ratingNumber: string;
  style: React.CSSProperties;
  onClick: () => void;
}

const RatingButton: React.FC<RatingButtonProps> = ({
  ratingNumber,
  onClick,
  style,
}) => {
  return (
    <button style={style} onClick={onClick} className={styles.ratingStyle}>
      {ratingNumber}
    </button>
  );
};

export default RatingButton;
