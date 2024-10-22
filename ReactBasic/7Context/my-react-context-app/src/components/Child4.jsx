import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child4() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context

  return (
    <div className="children">
      <h1>Child 4 - {parkInfo.ticketForMerryGoRound()}</h1>
    </div>
  );
}

export default Child4;

/*
import React from "react";

function Child4() {
  return (
    <div className="children">
      <h1>Child4</h1>
    </div>
  );
}

export default Child4;
*/
