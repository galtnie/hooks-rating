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
    if (value === 0) {
      switch (props.icon) {
        case "star":
          return <i className="fa fa-star-o fa-5x" ref={starEl} />;
        case "battery":
          return (
            <i
              className="fa fa-battery-empty fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        case "thermometer":
          return (
            <i
              className="fa fa-thermometer-empty fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        default:
          return null;
      }
    } else if (value % 2 === 1) {
      switch (props.icon) {
        case "star":
          return (
            <i
              className="fa fa-star-half-o fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        case "battery":
          return (
            <i
              className="fa fa-battery-half fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        case "thermometer":
          return (
            <i
              className="fa fa-thermometer-half fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        default:
          return null;
      }
    } else if (value % 2 === 0) {
      switch (props.icon) {
        case "star":
          return (
            <i className="fa fa-star fa-5x" aria-hidden="true" ref={starEl} />
          );
        case "battery":
          return (
            <i
              className="fa fa-battery-full fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        case "thermometer":
          return (
            <i
              className="fa fa-thermometer-full fa-5x"
              aria-hidden="true"
              ref={starEl}
            />
          );
        default:
          return null;
      }
    }
  };

  const onCursorClick = () => {
    props.changeRatingOnClick(value);
  };

  return (
    <div
      style={{ marginRight: "0.2em" }}
      onMouseMove={onCursorMove}
      onMouseLeave={onCursorLeave}
      onClick={onCursorClick}
    >
      {renderStar()}
    </div>
  );
};

export default Star;
