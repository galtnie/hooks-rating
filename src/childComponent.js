import React, { useState, useEffect } from "react";
import Star from "./starComponent";

const Child = props => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(props.mark);
  }, [props.mark]);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i + 1} />);
    }
    return stars;
  };

  return (
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
  );
};

export default Child;
