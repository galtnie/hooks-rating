import React, { useState } from "react";
import Child from "./childComponent";

const Parent = () => {
  const [mark, setMark] = useState(0);
  const [input, setInput] = useState(0);

  const handleMark = () => {
    if (input === "") {
      alert("Input something first");
    } else if (input > 100 || input < 0) {
      alert("Stick to the numerical limitation");
      setMark(0);
    } else {
      setMark(input);
    }
  };

  const changeMark = percent => {
    setInput(percent);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <span>Input rating from 0 to 100.</span>
      <div>
        <input
          type="number"
          min="0"
          max="100"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        %
        <button style={{ marginLeft: "1em" }} onClick={handleMark}>
          Mark
        </button>
      </div>
      <Child mark={mark} changeMark={changeMark} />
    </div>
  );
};

export default Parent;
