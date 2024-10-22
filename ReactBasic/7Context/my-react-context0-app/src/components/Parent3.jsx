import React from "react";
import Child5 from "./Child5";
import Child6 from "./Child6";

function Parent3({ parkInfo }) {
  return (
    <div className="parent">
      <h1>Parent3</h1>
      <Child5 />
      <Child6 />
    </div>
  );
}

export default Parent3;
