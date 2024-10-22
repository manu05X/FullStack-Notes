import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child5() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context

  return (
    <div className="children">
      <h1>Child5 - {parkInfo.ticketForWaterSlide()}</h1>
    </div>
  );
}

export default Child5;

/*
import React from "react";

function Child5() {
  return (
    <div className="children">
      <h1>Child5</h1>
    </div>
  );
}

export default Child5;
*/
