import React, { useState, useEffect } from "react";
import Icon from "./iconComponent";

const Rating = ({ rating, handleClick, empty, half, full }) => {
  const [mark, setMark] = useState(null);
  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState("star");

  useEffect(() => {
    setMark(Math.round(rating / 10));
    setValue(Math.round(rating / 10));
  }, [rating]);

  const renderIcons = () => {
    const icons = [];

    for (let i = 2; i <= 10; i += 2) {
      icons.push(
        <Icon
          key={i}
          id={i}
          value={value}
          renderStarsOnHover={renderIconOnHover}
          renderStarsOnHoverEnd={renderIconOnHoverEnd}
          changeRatingOnClick={changeRatingOnClick}
          icon={"star" || icon}
        />
      );
    }
    return icons;
  };

  const renderIconOnHover = value => {
    setValue(value);
    setHover(true);
  };

  const renderIconOnHoverEnd = () => {
    setValue(mark);
    setHover(false);
  };

  const changeRatingOnClick = value => {
    setMark(value);
    handleClick(`${value * 10}%`);
  };

  return (
    <div>
      <div onMouseLeave={renderIconOnHoverEnd}> {renderIcons()}</div>
      {hover ? <span>{`Rating on hover ${value * 10}%`}</span> : null}
    </div>
  );
};

export default Rating;
