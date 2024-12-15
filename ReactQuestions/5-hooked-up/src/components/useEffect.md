# useRef Hook in React

---

## Question 1: What is `useRef` in React?

- `useRef` is a React hook used to create a **mutable reference** that persists across renders.
- It returns an object with a `.current` property, which can hold a mutable value.
- Updating the `.current` property does not trigger a re-render.

---

## Question 2: When would you use `useRef`?

1. **Accessing DOM Elements**:
   - `useRef` can be used to reference a DOM element, such as an input field, to programmatically manage focus or perform other manipulations.
2. **Storing Mutable Values**:

   - Use `useRef` to store values that change but don't require re-rendering the component.

3. **Caching Values**:
   - It can cache values across renders to avoid re-initialization or unnecessary computations.

---

## Question 3: How do you access a DOM element using `useRef`?

- By attaching the `ref` object returned by `useRef` to the `ref` attribute of a DOM element, you can directly access the DOM node.

### Example:

```jsx
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus(); // Sets focus to the input element.
}, []);

<input ref={inputRef} />;
```

## Question 4: Difference Between `useState` and `useRef`

---

| **Feature**       | **`useState`**                                | **`useRef`**                              |
| ----------------- | --------------------------------------------- | ----------------------------------------- |
| **Purpose**       | Manages state values and triggers re-renders. | Stores mutable values without re-renders. |
| **Value Storage** | Stores state in the component.                | Stores value in the `.current` property.  |
| **Re-render**     | Updates trigger re-renders.                   | Updates do not cause re-renders.          |
| **Use Case**      | State-dependent logic or UI updates.          | Persistent values or DOM manipulation.    |

---

## Example

### `useState`

- Updating state causes a re-render and reflects the updated value in the UI:

```jsx
const [count, setCount] = useState(0);
setCount(count + 1); // Causes a re-render.
```

### `useRef`

- Updating state causes a re-render and reflects the updated value in the UI:

```jsx
const ref = useRef(0);
ref.current += 1; // Does not re-render the component.
```

### **Example Usage in the Provided Code**

#### **Accessing DOM**

- The `inputRef` is used to automatically focus on the input field:

```jsx
useEffect(() => {
  inputRef.current.focus();
}, []);
```

#### **Mutable References**

- Incrementing the `ref` value updates the `.current` property without re-rendering:

```jsx
ref.current += 1;
```

#### **State Updates**

- Incrementing `count` with `setCount` triggers a re-render and updates the UI:

```jsx
setCount(count + 1);
```

### **Question 2: Why is the Dependency Array Used in `useEffect`?**

The dependency array in `useEffect` serves the following purposes:

1. **Control When `useEffect` Runs**:

   - It determines when the effect should be re-executed.
   - The effect will only run if the specified dependencies change.

2. **Optimize Performance**:

   - Prevents unnecessary re-runs of the effect by skipping execution when dependencies remain unchanged.

3. **Avoid Infinite Loops**:

   - Ensures that the effect doesn’t execute continuously by defining specific dependencies.

4. **Examples**:

   - **Empty Dependency Array (`[]`)**:

     - The effect runs only once, similar to `componentDidMount`:

     ```jsx
     useEffect(() => {
       console.log("Effect runs once on mount");
     }, []);
     ```

   - **Specific Dependencies**:

     - The effect re-runs only when the specified dependencies change:

     ```jsx
     useEffect(() => {
       console.log("Effect runs when `count` changes");
     }, [count]);
     ```

   - **No Dependency Array**:
     - The effect runs on every render, similar to `componentDidUpdate`:
     ```jsx
     useEffect(() => {
       console.log("Effect runs on every render");
     });
     ```

### **Question 3: Example of `useEffect` for Data Fetching**

The `useEffect` hook is commonly used for fetching data in functional components. Here's an example:

```jsx
import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h3>Fetched Data</h3>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
```

### **Explanation:**

1. `useEffect` with an Empty Dependency Array:
   - Ensures the data fetching logic runs only once, like `componentDidMount` in class components.
2. State Variables:
   - `data`: Stores the fetched data.
   - `loading`: Tracks whether the data is still being fetched.
   - `error`: Stores any error message if the fetch fails.
3. Fetch Logic:

   - `fetch` is used to get data from an API.
   - `setData` updates the state with the retrieved data.
   - `setLoading` updates the loading state.

4. Error Handling:

   - `Errors` during the fetch are caught and stored in the error state.

5. Rendering:

   - Conditional rendering is used to display a loading spinner, an `error` message, or the fetched data based on the state.

### **Output:**

- When loading: Displays `"Loading..."`
- On success: Displays the first 5 titles from the fetched data.
- On error: Displays the error message

### **Question 4: How to Perform Cleanup in `useEffect`?**

The `useEffect` hook allows you to perform cleanup to prevent memory leaks and unwanted behavior in your application. Cleanup is necessary when your effect involves subscriptions, event listeners, timers, or any other resource that needs to be released when the component unmounts or before the next effect runs.

---

### **Example: Cleanup with Event Listeners**

```jsx
import React, { useState, useEffect } from "react";

function WindowResizeTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adding event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <h3>Window Width: {windowWidth}px</h3>
    </div>
  );
}

export default WindowResizeTracker;
```

### **Explanation:**

1. **Effect Logic:**

- An event listener is added to track the resize event of the window.
- The handler function updates the windowWidth state whenever the window is resized.

2. **Cleanup Function:**

- The return statement in useEffect specifies the cleanup function.
- It removes the event listener to avoid memory leaks when the component unmounts.

3. **Dependency Array:**

- Since the dependency array is empty, the effect is only set up once when the component mounts.

#### Why is Cleanup Necessary?

Without cleanup, resources such as event listeners, timers, or subscriptions would persist even after the component unmounts, potentially leading to:

- Memory leaks.
- Unexpected behavior like duplicate event handling.

```jsx
import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <h3>Timer: {seconds}s</h3>
    </div>
  );
}

export default TimerComponent;
```

### Key Points:

- Use cleanup to remove side effects when they are no longer needed.
- Cleanup ensures that:
  - Event listeners are detached.
  - Timers are cleared.
  - Subscriptions are unsubscribed.
- Always return a cleanup function in useEffect if the effect involves resources that need to be released.

### Output:

1. WindowResizeTracker:

- Displays the current window width and updates dynamically on resizing.

2. TimerComponent:

- Displays a timer that increments every second.
- Automatically stops the timer if the component unmounts.

### **Question 5: Explain `useLayoutEffect` and How It is Different from `useEffect`?**

`useLayoutEffect` is a React hook that runs synchronously after the DOM updates but before the browser paints the screen. This makes it useful for performing operations where you need to measure or manipulate the DOM and apply changes before the user sees anything.

**useEffect**:

- Asynchronous: Runs `after` the render cycle is committed to the screen i.e `after` our _component is rendered_.
- Good for Performance: Does not block the browser from painting changes on the screen.

**useLayoutEffect**:

- Synchronous: Runs synchronously immediately after the DOM is updated but `before` the
  browser paints anything on the screen .i.e `before` our _component is rendered on DOM or screen _..
- Potentially Blocking: Can potentially cause delays in the rendering process if the
  operations are heavy.

---

### **Key Features of `useLayoutEffect`**:

1. **Runs Synchronously**:

   - Executes after DOM mutations but **before the browser paints the screen**.
   - Ensures the user doesn’t see flickering or intermediate states.

2. **Use Cases**:
   - Measuring DOM elements (e.g., dimensions, positions).
   - Applying styles or layout adjustments based on DOM measurements.

---

### **Differences Between `useEffect` and `useLayoutEffect`**:

| Feature                | `useEffect`                                                  | `useLayoutEffect`                                      |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| **Execution Timing**   | Runs after the browser has painted.                          | Runs before the browser paints.                        |
| **Use Case**           | Side effects like fetching data, setting timers, or logging. | DOM measurements or synchronous DOM updates.           |
| **Performance Impact** | `Non-blocking`; allows the browser to paint first.           | `Blocking`; delays painting until complete.            |
| **Visual Updates**     | Changes might cause visible flickering.                      | Prevents flickering by applying changes synchronously. |

---

### **Example: Using `useLayoutEffect`**

#### **Preventing Flicker on Resize**

```jsx
import React, { useState, useLayoutEffect, useRef } from "react";

function LayoutEffectExample() {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      // Measure the height of the div after rendering
      setHeight(divRef.current.offsetHeight);
    }
  });

  return (
    <div>
      <div
        ref={divRef}
        style={{ padding: "20px", backgroundColor: "lightblue" }}
      >
        This div has dynamic height!
      </div>
      <p>Measured Height: {height}px</p>
    </div>
  );
}

export default LayoutEffectExample;
```
