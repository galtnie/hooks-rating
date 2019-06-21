import React from "react";
import ReactDOM from "react-dom";
import Parent from "./parentComponent";
import Rating from "./rating";

import "./styles.css";

function App() {
  const rating = 35;
  const onClick = value => {
    console.log(value);
  };
  // const full = () => {
  //   return <i class="fa fa-battery-full fa-5x" />;
  // };
  // const half = () => {
  //   return <i class="fa fa-battery-half fa-5x" />;
  // };
  // const empty = () => {
  //   return <i class="fa fa-battery-empty fa-5x" />;
  // };

  return (
    <div className="App">
      {/* <Parent /> */}
      <Rating
        rating={rating}
        handleClick={onClick}
        // empty={empty}
        // half={half}
        // full={full}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
