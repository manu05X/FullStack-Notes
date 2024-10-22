import React from "react";

function Child2({ ticketFn }) {
  return (
    <div className="children">
      <h1>Child2 - {ticketFn()}</h1>
    </div>
  );
}

export default Child2;
