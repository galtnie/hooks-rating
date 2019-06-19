import React, { useState } from "react";

const Parent = () => {
  const [mark, setMark] = useState("");
  const [child, setChild] = useState(false);

  const handleMark = () => {
    if (mark === "") {
      alert("Input something first");
    } else if (mark > 100 || mark < 0) {
      alert("Stick to the numerical limitation");
      setMark("");
    } else {
      setChild(true);
    }
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
          value={mark}
          onChange={e => setMark(e.target.value)}
        />
        <button onClick={handleMark}>Mark</button>
      </div>
      {child ? `child ${mark}` : null}
    </div>
  );
};

export default Parent;
