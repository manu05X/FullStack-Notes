import React, { useState } from "react";

/*
import React, { useState, useRef } from 'react';

function Example() {
  const [count, setCount] = useState(0); // This triggers re-renders on update
  const countRef = useRef(0); // This does not trigger re-renders

  const incrementState = () => {
    setCount(count + 1); // Updates state and causes a re-render
  };

  const incrementRef = () => {
    countRef.current += 1; // Updates ref value without causing a re-render
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <button onClick={incrementState}>Increment State</button>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}


*/

function Ref() {
  const [name, setName] = useState("");

  const clear = () => {
    setName("");
  };

  return (
    <div>
      <h1>use Ref</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clear}>Clear1</button>
    </div>
  );
}

export default Ref;

/*

Normally in react if we want to change the state of a component we need to go through useState then reconciliation happens then virtual dome changes then actual DOM changes.
The useRef hook in React provides several benefits, particularly when working with DOM elements and maintaining mutable values.


In React, changing the state of a component typically involves using the useState hook. When the state changes, 
React goes through a reconciliation process, which updates the virtual DOM before making changes to the actual DOM. 
This process ensures that only the necessary parts of the UI are re-rendered, optimizing performance.


The useRef hook offers distinct advantages, especially when working with DOM elements and mutable values:
  Direct DOM Access: Unlike state variables, which trigger re-renders when updated, useRef allows you to directly access and manipulate DOM elements. This is useful for actions like focusing an input field or measuring its size without affecting the rendering cycle.

  Mutable Values: useRef can hold mutable values that persist for the full lifetime of the component. This is particularly helpful for storing values that don’t need to trigger a re-render when changed, such as timers, previous state values, or any other data you want to retain without causing a UI update.

  Performance Optimization: By using useRef, you can avoid the overhead associated with state updates and re-renders. This makes useRef ideal for scenarios where you need to maintain values or interact with the DOM without needing to notify React of every change.

*/
