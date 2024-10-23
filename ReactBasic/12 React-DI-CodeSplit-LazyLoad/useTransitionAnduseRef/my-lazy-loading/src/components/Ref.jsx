import React, { useState, useRef } from "react";

function Ref() {
  // State variables to hold the values of two input fields
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  // Creating refs to directly access the DOM elements for the input fields
  const refElement = useRef(); // Ref for the first input field
  const refElement2 = useRef(); // Ref for the second input field

  console.log(refElement); // Logs the ref object to the console for debugging

  // Function to clear the first input field and set focus on it
  const clear = () => {
    setName(""); // Clear the input value using state
    refElement.current.focus(); // Focus on the first input using ref
  };

  // Function to clear the second input field and set focus on it
  const clear2 = () => {
    setName2(""); // Clear the input value using state
    refElement2.current.focus(); // Focus on the second input using ref
  };

  // Function to change the styles of the input fields
  function changeColor() {
    // Directly manipulate the DOM elements using refs
    refElement.current.style.color = "red"; // Change text color of first input
    refElement2.current.style.color = "Blue"; // Change text color of second input
    refElement.current.style.backgroundColor = "Yellow"; // Change background color of first input
  }

  return (
    <div>
      <h1>use Ref</h1>
      {/* Input field for name with ref for direct DOM access */}
      <input
        ref={refElement} // Attach ref to the input element
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input change
      />
      {/* Input field for name2 with ref for direct DOM access */}
      <input
        ref={refElement2} // Attach ref to the second input element
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)} // Update state on input change
      />
      <button onClick={clear}>Clear1</button>{" "}
      {/* Button to clear the first input */}
      <button onClick={clear2}>Clear2</button>{" "}
      {/* Button to clear the second input */}
      <button onClick={changeColor}>changeColor</button>{" "}
      {/* Button to change input colors */}
    </div>
  );
}

export default Ref;

/*
The useRef hook in React provides several benefits, particularly when working with DOM elements and maintaining mutable values. Here are some of the key advantages of using useRef:

1. Accessing DOM Elements
    Direct DOM Manipulation: useRef allows you to create a reference to a DOM element, enabling direct manipulation of its properties and methods (e.g., focusing an input field, changing styles).
    Example: You can use ref.current.focus() to focus an input field without needing to maintain its state in React.

2. Persisting Values Across Renders
    Mutable Reference: Unlike state, which triggers re-renders when updated, a ref allows you to store a value that persists across renders without causing a re-render when it changes.
    Example: You can use useRef to hold a previous value or a timer ID without affecting the rendering of your component.

3. Performance Optimization
    Avoiding Unnecessary Re-renders: Since updating a ref does not trigger a re-render, you can use it for performance optimizations, especially in components that handle frequent updates or complex computations.
    Example: You can store values that don't need to be displayed in the UI but are necessary for calculations or conditions.

4. Storing Instance Variables
    Instance-like Behavior: You can use useRef to store instance variables, similar to how you might in class components. This is useful for managing component-specific data that doesn’t need to trigger a re-render.
    Example: Use a ref to track whether a component is mounted or to store flags that can be toggled without re-rendering.

5. Integration with Third-party Libraries
    Seamless Integration: useRef is particularly useful when integrating with third-party libraries that require direct access to DOM elements (like D3.js or jQuery).
    Example: You can pass a ref to a library function to manipulate the DOM directly without interfering with React’s virtual DOM.

6. Avoiding Closure Issues
    Keeping Current Values: Using useRef can help avoid closure issues in asynchronous operations, ensuring that you’re working with the most recent values.
    Example: Storing a callback function in a ref to ensure that it always has access to the latest state or props.


Summary
In summary, useRef provides a powerful way to interact with the DOM, persist values without triggering re-renders, optimize performance, and manage instance-like variables in functional components. Its versatility makes it an essential tool in React for developers looking to enhance their applications' functionality and efficiency.

*/

/*

Key Points on useRef Usage in the Code:
    Direct DOM Access: The useRef hook is used to create references (refElement and refElement2) that allow direct manipulation of the DOM elements associated with the input fields. This is useful for actions like focusing the input or changing styles.

    Focus Management: The clear and clear2 functions demonstrate how useRef can be used to focus on specific inputs after their values are cleared, enhancing user experience.

    Styling Manipulation: The changeColor function illustrates how useRef enables direct style changes on the DOM elements without involving React's state management, which would typically trigger re-renders.

    Performance Optimization: By using useRef, the component can avoid unnecessary re-renders that would occur if the styling information was stored in state, leading to better performance, especially in more complex components.


*/
