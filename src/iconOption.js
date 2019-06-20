import React from "react";

const IconOption = props => {
  return (
    <label style={{ marginRight: "1em" }}>
      {props.name}
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => {
          props.changeIcon(props.name);
        }}
      />
    </label>
  );
};

export default IconOption;
