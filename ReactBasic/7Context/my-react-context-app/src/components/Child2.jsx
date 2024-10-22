import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child2() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context
  return (
    <div className="children">
      <h1>Child 2 - {parkInfo.ticketForRollerCoaster()}</h1>
    </div>
  );
}

export default Child2;
