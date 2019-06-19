import React, { useState } from "react";
import Child from "./childComponent";

const Parent = () => {
  const [mark, setMark] = useState("");
  const [input, setInput] = useState("");
  const [child, setChild] = useState(false);

  const handleMark = () => {
    if (input === "") {
      alert("Input something first");
    } else if (input > 100 || input < 0) {
      alert("Stick to the numerical limitation");
      setMark("");
    } else {
      setMark(input);
      setChild(true);
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
      {child ? <Child mark={mark} changeMark={changeMark} /> : null}
    </div>
  );
};

export default Parent;
