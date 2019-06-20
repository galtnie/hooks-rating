import React from "react";
import IconOption from "./iconOption";

const ChoiceOfIcons = props => {
  const renderOptions = () => {
    const options = [];
    let name;
    let checked;
    for (let i = 0; i < 3; i++) {
      switch (i) {
        case 0:
          name = "star";
          checked = name === props.icon ? true : false;
          break;
        case 1:
          name = "battery";
          checked = name === props.icon ? true : false;
          break;
        case 2:
          name = "thermometer";
          checked = name === props.icon ? true : false;
          break;
        default:
          break;
      }

      options.push(
        <IconOption
          key={i}
          name={name}
          checked={checked}
          changeIcon={props.changeIcon}
        />
      );
    }
    return options;
  };

  return (
    <div style={{ marginBottom: "1em", marginTop: "1em" }}>
      {renderOptions()}
    </div>
  );
};

export default ChoiceOfIcons;
