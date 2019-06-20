import React, { useState, useEffect, useCallback } from "react";

const Star = props => {
  const [value, setValue] = useState(0);
  const [starX, setStarX] = useState(null);
  const [width, setWidth] = useState(null);

  const starEl = useCallback(node => {
    if (node !== null) {
      setStarX(node.getBoundingClientRect().x);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onCursorMove = e => {
    const cursorCoords = e.clientX - starX;
    if (width / 2 <= cursorCoords) {
      setValue(12);
    } else if (width / 2 > cursorCoords) {
      setValue(11);
    }
  };

  const onCursorLeave = e => {
    setValue(props.value);
  };

  const renderStar = () => {
    if (value === 0) {
      return (
        <i
          className="fa fa-star-o fa-5x"
          ref={starEl}
          onMouseMove={onCursorMove}
          onMouseLeave={onCursorLeave}
        />
      );
    } else if (value % 2 === 1) {
      return (
        <i
          className="fa fa-star-half-o fa-5x"
          aria-hidden="true"
          ref={starEl}
          onMouseMove={onCursorMove}
          onMouseLeave={onCursorLeave}
        />
      );
    } else if (value % 2 === 0) {
      return (
        <i
          className="fa fa-star fa-5x"
          aria-hidden="true"
          ref={starEl}
          onMouseMove={onCursorMove}
          onMouseLeave={onCursorLeave}
        />
      );
    }
  };

  const alterRating = e => {
    console.log("works");
    console.log(e.clientX);
    console.log(e.getBoundingClientRect());
  };

  return (
    <div style={{ marginRight: "0.2em" }} onClick={alterRating}>
      {renderStar()}
    </div>
  );
};

export default Star;
