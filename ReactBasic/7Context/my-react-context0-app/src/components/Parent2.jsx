import React from "react";
import Child4 from "./Child4";
import Child3 from "./Child3";

function Parent2({ parkInfo }) {
  return (
    <div className="parent">
      <h1>Parent2</h1>
      <Child3 />
      <Child4 />
    </div>
  );
}

export default Parent2;
