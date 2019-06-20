import React, { useState, useEffect } from "react";

const Star = () => {
  const [rate, setRate] = useState(0);

  const renderStar = () => {
    switch (rate) {
      case 0:
        return "empty";
      case 1:
        return "half";
      case 3:
        return "full";
      default:
        return null;
    }
  };

  return <div style={{ marginRight: "0.2em" }}>{renderStar()}</div>;
};

export default Star;
