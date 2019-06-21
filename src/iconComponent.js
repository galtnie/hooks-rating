import React, { useState, useEffect, useCallback } from "react";

const Icon = ({
  value,
  icon,
  id,
  renderStarsOnHoverEnd,
  renderStarsOnHover,
  changeRatingOnClick
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [iconX, setIconX] = useState(null);
  const [width, setWidth] = useState(null);

  const starEl = useCallback(
    symbol => {
      if (symbol !== null) {
        setIconX(symbol.getBoundingClientRect().x);
        setWidth(symbol.getBoundingClientRect().width);
      }
    },
    [icon]
  );

  useEffect(() => {
    setCurrentValue(value);
  }, [id, value]);

  const onCursorMove = e => {
    const cursorCoords = e.clientX - iconX;
    if (width / 2 <= cursorCoords) {
      renderStarsOnHover(id);
    } else if (width / 2 > cursorCoords) {
      renderStarsOnHover(id - 1);
    }
  };

  const onCursorLeave = e => {
    setCurrentValue(value);
    renderStarsOnHoverEnd();
  };

  const renderStar = () => {
    let iconClass;
    if (currentValue <= id - 2 && icon === "star") {
      iconClass = "star-o";
    } else if (currentValue <= id - 2 && icon === "battery") {
      iconClass = "battery-empty";
    } else if (currentValue <= id - 2 && icon === "thermometer") {
      iconClass = "thermometer-empty";
    } else if (currentValue === id - 1 && icon === "star") {
      iconClass = "star-half-o";
    } else if (currentValue === id - 1 && icon === "battery") {
      iconClass = "battery-half";
    } else if (currentValue === id - 1 && icon === "thermometer") {
      iconClass = "thermometer-half";
    } else if (currentValue >= id && icon === "star") {
      iconClass = "star";
    } else if (currentValue >= id && icon === "battery") {
      iconClass = "battery-full";
    } else if (currentValue >= id && icon === "thermometer") {
      iconClass = "thermometer-full";
    } else if (icon === null) {
      return null;
    }

    return (
      <i
        style={{ width: "100% !important" }}
        className={`fa fa-${iconClass} fa-5x`}
        aria-hidden="true"
        ref={starEl}
        onMouseMove={onCursorMove}
        onMouseLeave={onCursorLeave}
        onClick={onCursorClick}
      />
    );
  };

  const onCursorClick = () => {
    changeRatingOnClick(value);
  };

  return renderStar();
};

export default Icon;
