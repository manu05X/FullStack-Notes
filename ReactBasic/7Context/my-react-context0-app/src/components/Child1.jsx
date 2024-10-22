import React from "react";

function Child1({ ticketFn }) {
  return (
    <div className="children">
      <h1>Child1 - {ticketFn()}</h1>
    </div>
  );
}

export default Child1;
