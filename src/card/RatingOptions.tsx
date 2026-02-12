import React from "react";
import styles from "./card.module.css";
import RatingButton from "./rating-button/RatingButton";

interface RatingOptionsProps {
  ratings: string[];
  checkId: any;
  onHandleSelectedRatingNumber: (rating: string) => void;
  onHandleSelectedId: (index: any) => void;
}

const RatingOptions: React.FC<RatingOptionsProps> = ({
  ratings,
  checkId,
  onHandleSelectedRatingNumber,
  onHandleSelectedId,
}) => {
  return (
    <div className={styles.ratingButtonsStyle}>
      {ratings.map((rating, index) => {
        return (
          <RatingButton
            key={index}
            style={{
              backgroundColor:
                checkId === index ? "hsl(25, 97%, 53%)" : "#384656",
              borderRadius: "25px",
              padding: "14px 20px",
              color: checkId === index ? "white" : "hsl(217, 12%, 63%)",
              border: "transparent",
              fontFamily: "'Overpass', sans-serif",
              fontWeight: "700",
            }}
            ratingNumber={rating}
            onClick={() => {
              onHandleSelectedRatingNumber(rating);
              onHandleSelectedId(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default RatingOptions;
