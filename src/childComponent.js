import React, { useState, useEffect } from "react";
import Star from "./starComponent";

const Child = props => {
  const [rating, setRating] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    let mark = Math.round(props.percent / 10);
    setRating(mark);
    setValue(mark);
  }, [props.percent]);

  const renderStars = () => {
    const stars = [];
    let starValue;
    for (let i = 2; i <= 10; i += 2) {
      if (value < i - 1) {
        starValue = 0;
      } else if (value === i - 1 || value === i) {
        starValue = rating;
      } else if (value > i) {
        starValue = i;
      }
      stars.push(
        <Star
          key={i}
          id={i}
          value={starValue}
          rating={rating}
          renderStarsOnHover={renderStarsOnHover}
          renderStarsOnHoverEnd={renderStarsOnHoverEnd}
          changeRatingOnClick={changeRatingOnClick}
        />
      );
    }
    return stars;
  };

  const renderStarsOnHover = value => {
    setValue(value);
  };

  const renderStarsOnHoverEnd = () => {
    setValue(rating);
  };

  const changeRatingOnClick = value => {
    setRating(value);
    props.changePercentByClickingStars(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-star",
        marginTop: "1em",
        textAlign: "start"
      }}
    >
      {renderStars()}
    </div>
  );
};

export default Child;
