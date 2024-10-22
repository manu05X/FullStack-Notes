import React, { useContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

import { ParkContext } from "./ParkContext";

function Parent1() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context
  return (
    <div className="parent">
      <h1>Parent1</h1>
      {parkInfo.waterSlide} - {parkInfo.rollerCoaster}
      <Child1 />
      <Child2 />
    </div>
  );
}

export default Parent1;

/*
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent1({ parkInfo }) {
  return (
    <div className="parent">
      <h1>Parent1</h1>
      {parkInfo.waterSlide} - {parkInfo.rollerCoaster}
      <Child1 ticketFn={parkInfo.ticketforWaterSlide} />
      <Child2 ticketFn={parkInfo.ticketForRollerCoaster} />
    </div>
  );
}

export default Parent1;



*/
