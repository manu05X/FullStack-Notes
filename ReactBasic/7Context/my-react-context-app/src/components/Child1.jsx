// import React from "react";

// function Child1({ ticketFn }) {
//   return (
//     <div className="children">
//       <h1>Child1 - {ticketFn()}</h1>
//     </div>
//   );
// }

// export default Child1;

import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child1() {
  const parkInfo = useContext(ParkContext); // Access parkInfo via context

  return (
    <div className="children">
      <h1>Child1 - {parkInfo.ticketForWaterSlide()}</h1>
    </div>
  );
}

export default Child1;
