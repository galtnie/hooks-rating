import React, { useState, useEffect } from "react";
import Star from "./starComponent";

const Child = props => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    let mark = Math.round(props.percent / 10);
    setRating(mark);
  }, [props.percent]);

  const renderStars = () => {
    const stars = [];

    let id;
    for (let i = 2; i <= 10; i += 2) {
      if (rating < i - 1) {
        id = 0;
      } else if (rating === i - 1 || rating === i) {
        id = rating;
      } else if (rating > i) {
        id = i;
      }

      stars.push(<Star key={i} id={id} />);
    }
    return stars;
  };

  return (
    <div style={{ textAlign: "start", marginTop: "1em" }}>
      <span>{rating}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-star",
          marginTop: "1em"
        }}
      >
        {renderStars()}
      </div>
    </div>
  );
};

export default Child;
