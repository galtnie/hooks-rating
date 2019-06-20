import React, { useState, useEffect } from "react";
import Star from "./starComponent";
import ChoiceOfIcons from "./choiceOfIcons";

const Child = props => {
  const [rating, setRating] = useState(null);
  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState("star");

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
          renderStarsOnHover={renderStarsOnHover}
          renderStarsOnHoverEnd={renderStarsOnHoverEnd}
          changeRatingOnClick={changeRatingOnClick}
          icon={icon}
        />
      );
    }
    return stars;
  };

  const renderStarsOnHover = value => {
    setValue(value);
    setHover(true);
  };

  const renderStarsOnHoverEnd = () => {
    setValue(rating);
    setHover(false);
  };

  const changeRatingOnClick = value => {
    setRating(value);
    props.changePercentByClickingStars(value);
  };

  const changeIcon = value => {
    console.log(value);
    setIcon(value);
  };

  return (
    <div style={{ marginTop: "1em", textAlign: "start" }}>
      <ChoiceOfIcons icon={icon} changeIcon={changeIcon} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-star"
        }}
      >
        {renderStars()}
      </div>

      {hover ? <span>{`Rating on hover ${value * 10}%`}</span> : null}
    </div>
  );
};

export default Child;
