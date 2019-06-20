import React, { useState, useEffect, useCallback } from "react";

const Star = props => {
  const [value, setValue] = useState(0);
  const [starX, setStarX] = useState(null);
  const [width, setWidth] = useState(null);

  const starEl = useCallback(
    node => {
      if (node !== null) {
        setStarX(node.getBoundingClientRect().x);
        setWidth(node.getBoundingClientRect().width);
      }
    },
    [props.icon]
  );

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onCursorMove = e => {
    const cursorCoords = e.clientX - starX;
    if (width / 2 <= cursorCoords) {
      setValue(props.id);
      props.renderStarsOnHover(props.id);
    } else if (width / 2 > cursorCoords) {
      setValue(props.id - 1);
      props.renderStarsOnHover(props.id - 1);
    }
  };

  const onCursorLeave = e => {
    setValue(props.value);
    props.renderStarsOnHoverEnd();
  };

  const renderStar = () => {
    let iconClass;
    if (value === 0 && props.icon === "star") {
      iconClass = "star-o";
    } else if (value === 0 && props.icon === "battery") {
      iconClass = "battery-empty";
    } else if (value === 0 && props.icon === "thermometer") {
      iconClass = "thermometer-empty";
    } else if (value % 2 === 1 && props.icon === "star") {
      iconClass = "star-half-o";
    } else if (value % 2 === 1 && props.icon === "battery") {
      iconClass = "battery-half";
    } else if (value % 2 === 1 && props.icon === "thermometer") {
      iconClass = "thermometer-half";
    } else if (value % 2 === 0 && props.icon === "star") {
      iconClass = "star";
    } else if (value % 2 === 0 && props.icon === "battery") {
      iconClass = "battery-full";
    } else if (value % 2 === 0 && props.icon === "thermometer") {
      iconClass = "thermometer-full";
    }

    return (
      <i
        className={`fa fa-${iconClass} fa-5x`}
        aria-hidden="true"
        ref={starEl}
      />
    );
  };

  const onCursorClick = () => {
    props.changeRatingOnClick(value);
  };

  return (
    <div
      onMouseMove={onCursorMove}
      onMouseLeave={onCursorLeave}
      onClick={onCursorClick}
    >
      {renderStar()}
    </div>
  );
};

export default Star;
