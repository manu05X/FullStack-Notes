import React, { useEffect, useState } from "react";

// function Ue1() {
//   return <div>Ue1</div>;
// }

// export default Ue1;
//------------------------------------------------------------------------------------------------

// function Ue1() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>This is my Count Value : {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Ue1;

//------------------------------------------------------------------------------------------------
// Syntax of useEffect
// with </React.StrictMode> in index.js useEffect is rendered 2 times in browser

// function Ue1() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   useEffect(() => {
//     console.log("Use Effect Runs");

//   });

//   return (
//     <div>
//       <h1>This is my Count Value : {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Ue1;

//------------------------------------------------------------------------------------------------
// Syntax of useEffect

// function Ue1() {
//   // Step 1: Declare a state variable 'count' initialized to 0, along with a function 'setCount' to update it.
//   // useState(0) initializes 'count' to 0, and 'setCount' is used to update this value later.
//   const [count, setCount] = useState(0);

//   // Step 2: Define a function 'increment' that increases the 'count' state by 1.
//   // It uses setCount to update the current value of 'count' by adding 1 to it.
//   function increment() {
//     setCount(count + 1);
//   }

//   // Step 3: useEffect hook is used to perform side effects after the component renders.
//   // This hook runs every time the component renders or the 'count' value changes.
//   // The callback passed to useEffect logs "Use Effect Runs" in the console and updates the document's title
//   // to display how many times the button has been clicked.
//   useEffect(() => {
//     console.log("Use Effect Runs");
//     document.title = `Button clicked for ${count} times`;
//   });

//   // Step 4: The component returns JSX that renders the current count and a button to increment the count.
//   return (
//     <div>
//       {/* Display the current value of 'count' */}
//       <h1>This is my Count Value : {count}</h1>

//       {/* A button that triggers the 'increment' function when clicked */}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Ue1;

//--------------------------------------------------------------------------------------------------------------------------------

function Ue1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  // Syntax of useEffect

  /*1>
  This useEffect runs on every render, both when the component is first mounted and when any state or prop changes (in this case, count or text).
    The callback logs "Use Effect Runs" and updates the document's title with the current count.
    Since there is no dependency array, this runs after every render.
  */
  //   useEffect(() => {
  //     console.log("Use Effect Runs");
  //     document.title = `Button clicked for ${count} times`;
  //   }); // this will only when you mount and when you update anything

  /* 2>
  This useEffect runs only once, when the component is first mounted. It does not run on updates (when the state changes).
    The empty array [] tells React that this effect has no dependencies, so it will not re-run unless the component unmounts or remounts.
  
  */
  //   useEffect(() => {
  //     console.log("Use Effect Runs");
  //     document.title = `Button clicked for ${count} times`;
  //   }, []); // this will only run when you mount and not when you update

  /* 3>
  This useEffect runs when the component is first mounted and only when the count state is updated.
    It logs "Use Effect Runs" and updates the document's title based on the count value.
    React tracks the count variable, and the effect runs every time count changes, but not when other states (like text) are updated.
  */

  useEffect(() => {
    console.log("Use Effect Runs");
    document.title = `Button clicked for ${count} times`;
  }, [count]); // this will only run when you mount  when you update the count

  /*
    useEffect allows side effects (like updating the document title or logging to the console) to happen after rendering.
    Different dependency arrays control when the effect is triggered:
        No dependency array: runs after every render.
        Empty dependency array ([]): runs only on mount.
        Dependency array [count]: runs only when count changes.
  */

  return (
    <div>
      <h1>This is my Count Value : {count}</h1>
      <button onClick={increment}>Increment</button>
      <input onChange={handleChange} type="text" value={text} />
    </div>
  );
}

export default Ue1;

/*
The slight delay in updating document.title = Button clicked for ${count} times compared to the immediate update of the count displayed on the screen is due to how React handles state updates and the timing of the useEffect hook.

Key Points:
1> State Updates are Asynchronous:
    React's setState (e.g., setCount) does not immediately update the state. Instead, it schedules a re-render.
    The updated state (count) is reflected on the screen because React re-renders the component, and the new value of count is displayed in the JSX.

2> useEffect Runs After the Render:
    The useEffect hook runs after the DOM has been updated with the new state.
    This means that the React rendering process completes (i.e., the new count is displayed on the screen) before the effect (which updates document.title) is executed.
    The rendering of the component happens first, followed by the side effects like updating document.title.

Flow of Events:
1>Button Clicked:
    When the button is clicked, the setCount function is called to update the count state.

2>Re-render:
    React schedules a re-render of the component with the updated count value.
    The new count is immediately displayed on the screen because React re-renders the component.

3>useEffect Execution:
    After the component re-renders, the useEffect hook runs.
    This is when document.title gets updated with the new count value.
    There may be a very slight delay between the re-render (which updates the count displayed in the JSX) and when useEffect runs (which updates document.title), but it's typically so short that it's hardly noticeable.

Visualization:
    Initial render: Count displayed on screen: 0
    Button clicked: setCount is called to increase count.
    Re-render: New count (1) is displayed on the screen.
    useEffect runs: document.title is updated to "Button clicked for 1 times".

Why Does This Happen?
React follows a two-phase rendering process:
    Render phase: React calculates what needs to be updated (in this case, the count variable in the UI).
    Commit phase: After rendering is complete, side effects (like useEffect) are executed.
So, the slight delay is because React updates the DOM first (showing the new count in the UI), and then, after rendering, it runs the useEffect hook that updates document.title.

This behavior ensures that side effects do not block the rendering process, keeping the UI responsive.




*/
