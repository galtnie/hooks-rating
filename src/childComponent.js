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
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i + 1} />);
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
