import { useState } from "react";
import styles from "./card.module.css";
import starImage from "../images/icon-star.svg";
import thankYouImage from "../images/illustration-thank-you.svg";
import CardContent from "../typography/CardContent";
import RatingOptions from "../RatingOptions";

const Card = () => {
  const [selectedRatingNumber, setSelectedRatingNumber] = useState("0");
  const [checkId, setCheckId] = useState();
  const [isSubmittedRating, setIsSubmittedRating] = useState(false);
  const ratings: string[] = ["1", "2", "3", "4", "5"];

  const onHandleSelectedRatingNumber = (rating: string) => {
    setSelectedRatingNumber(rating);
  };

  const onHandleSelectedId = (index: any) => {
    setCheckId(index);
  };

  function onSubmitRating() {
    setIsSubmittedRating(!isSubmittedRating);
  }

  return (
    <>
      <div className={styles.cardStyle}>
        {!isSubmittedRating ? (
          <div className={styles.ratingCard}>
            <div className={styles.starStyle}>
              <img src={starImage} alt="star" />
            </div>
            <CardContent
              title="How did we do?"
              content="Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!"
            />
            <RatingOptions
              ratings={ratings}
              checkId={checkId}
              onHandleSelectedRatingNumber={onHandleSelectedRatingNumber}
              onHandleSelectedId={onHandleSelectedId}
            />
            <button onClick={onSubmitRating} className={styles.buttonStyle}>
              SUBMIT
            </button>
          </div>
        ) : (
          <div className={styles.thankYouCard}>
            <img src={thankYouImage} alt="phone" />
            <div className={styles.selection}>
              You selected <span>{selectedRatingNumber}</span> out of 5
            </div>
            <CardContent
              title="Thank you!"
              content="We appreciate you taking the time to give a rating. If you ever need
              more support, don't hesitate to get in touch!"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
