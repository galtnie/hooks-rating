import React, { useState, useEffect } from "react";

const Child = props => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(props.mark);
  }, [props.mark]);

  return <div>{rating}</div>;
};

export default Child;
