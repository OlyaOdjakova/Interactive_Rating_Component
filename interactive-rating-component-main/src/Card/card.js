import {useState} from "react";
import Typography from "../Typography/typography";
import RatingButton from "../rating-button/rating-button";
import styles from "../Card/card.module.css";
import starImage from "../Images/icon-star.svg";
import thankYouImage from "../Images/illustration-thank-you.svg";

export default function Card() {
    //handleClick shows and hides the first and second card
    const [hideRating, setHideRating] = useState(true);

    function handleClick() {
        setHideRating(!hideRating);
    }

    //setRatingNumber shows which rating button was clicked
    const [ratingNumber, setRatingNumber] = useState("0");

    const [checkId, setCheckId] = useState(null);

    let ratings = ["1", "2", "3", "4", "5"];

    let ratingComponents;

    {
        ratingComponents = ratings.map((rating, index) => {
            return (
                <RatingButton
                    style={{
                        backgroundColor: checkId === index ? "hsl(25, 97%, 53%)" : "#384656",
                        borderRadius: "25px",
                        padding: "14px 20px",
                        color: checkId === index ? "white" : "hsl(217, 12%, 63%)",
                        border: "transparent",
                        fontFamily: "'Overpass', sans-serif",
                        fontWeight: "700",
                    }}
                    ratingNumber={rating}
                    onClick={() => {
                        setRatingNumber(rating);
                        setCheckId(index);
                    }}
                />
            )
        })
    }

    return (
        <>
            <div className={styles.cardStyle}>
                {hideRating ? (
                    <div className={styles.ratingCard}>
                        <div className={styles.starStyle}>
                            <img src={starImage} alt="star image"/>
                        </div>

                        <Typography
                            title="How did we do?"
                            content="Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!"
                        />

                        <div className={styles.ratingButtonsStyle}>
                            {ratingComponents}

                        </div>

                        <button onClick={handleClick} className={styles.buttonStyle}>
                            SUBMIT
                        </button>
                    </div>
                ) : (
                    <div className={styles.thankYouCard}>
                        <img src={thankYouImage} alt="phone image"/>

                        <div className={styles.selection}>
                            You selected <span>{ratingNumber}</span> out of 5
                        </div>

                        <Typography
                            title="Thank you!"
                            content="We appreciate you taking the time to give a rating. If you ever need
              more support, don't hesitate to get in touch!"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
