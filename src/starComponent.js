import React, { useState, useEffect } from "react";

const Star = props => {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    console.log(props.id);
  }, [props.id]);

  const renderStar = () => {
    if (props.id === 0) {
      return "empty";
    } else if (props.id % 2 === 1) {
      return "half";
    } else if (props.id % 2 === 0) {
      return "full";
    }
  };

  return <div style={{ marginRight: "0.2em" }}>{renderStar()}</div>;
};

export default Star;
