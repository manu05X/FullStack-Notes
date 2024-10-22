import React, { useContext } from "react";
import Child5 from "./Child5";
import Child6 from "./Child6";

import { ParkContext } from "./ParkContext";

function Parent3() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context
  return (
    <div className="parent">
      <h1>Parent 3</h1>
      {parkInfo.merryGoRound} - {parkInfo.rollerCoaster}
      <Child5 />
      <Child6 />
    </div>
  );
}

export default Parent3;

/*

import React from "react";
import Child5 from "./Child5";
import Child6 from "./Child6";

function Parent3({ parkInfo }) {
  return (
    <div className="parent">
      <h1>Parent3</h1>
      {parkInfo.waterSlide} - {parkInfo.rollerCoaster}
      <Child5 ticketFn={parkInfo.ticketforWaterSlide} />
      <Child6 ticketFn={parkInfo.ticketForRollerCoaster} />
    </div>
  );
}

export default Parent1;

*/
