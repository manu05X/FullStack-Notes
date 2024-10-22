import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child6() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context

  return (
    <div className="children">
      <h1>Child 6 - {parkInfo.ticketForMerryGoRound()}</h1>
    </div>
  );
}

export default Child6;

/*
import React from "react";

function Child6() {
  return (
    <div className="children">
      <h1>Child6</h1>
    </div>
  );
}

export default Child6;

*/
