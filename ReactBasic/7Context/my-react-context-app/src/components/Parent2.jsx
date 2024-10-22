import React, { useContext } from "react";
import Child4 from "./Child4";
import Child3 from "./Child3";

import { ParkContext } from "./ParkContext";

function Parent2() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context
  return (
    <div className="parent">
      <h1>Parent 2</h1>
      {parkInfo.merryGoRound} - {parkInfo.rollerCoaster}
      <Child3 />
      <Child4 />
    </div>
  );
}

export default Parent2;
