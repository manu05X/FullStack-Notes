# 15 Most Asked React Interview Questions

## Ques 1: What is React and why is it used?

- React is a popular JavaScript library used for building user interfaces (UIs) for web applications.
- Known for its efficiency, flexibility, and reusability in creating interactive UI components.
- React allows developers to build complex UIs by breaking them down into smaller, reusable pieces called components.
- Components can manage their own state, making it easier to build and maintain large-scale applications.

## Ques 2: What is JSX, and why is it used?

- JSX stands for JavaScript XML.
- Allows writing HTML-like code within JavaScript.
- JSX is used in React to define the structure of components.

## Ques 3: What is a React component?

- A reusable building block for the UI.
- Can be a class or function that returns JSX.

### Example:

```jsx
const MyComponent = () => {
  return (
    <ul>
      <li>Reusable building block for the UI.</li>
      <li>It can be a class or a function that returns JSX.</li>
    </ul>
  );
};
```

## Ques 4: What is the difference between state and props?

- **Mutability:** State is mutable and managed within the component itself, while props are immutable and passed from parent to child components.
- **Ownership:** Components own and manage their own state, while props are owned and managed by the parent component.
- **Usage:** State is used for internal component data that might change over time, while props are used to pass data from parent to child components.

### Example:

```jsx
const StatevsProps = (props) => {
  const [stateExample, setStateExample] = React.useState("I am a state");

  return (
    <React.Fragment>
      <li>{stateExample}</li>
      <li>{props.propExample}</li>
    </React.Fragment>
  );
};

StatevsProps.propTypes = {
  propExample: PropTypes.string,
};
```

## Ques 5: What is prop drilling?

- The process of passing down props through multiple levels of nested components.

### Example:

```jsx
const GrandparentComponent = () => {
  const data = "Hello from Grandparent";
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <GrandchildComponent data={data} />;
};

const GrandchildComponent = ({ data }) => {
  return <p>{data}</p>;
};
```

## Ques 6: What is a React fragment, and why is it used?

- A React fragment groups multiple elements without adding an extra HTML element to the DOM.

### Example:

```jsx
<>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</>
```

## Ques 7: How do you define and use state in a React functional component?

- Use the `useState` hook to initialize and manage state.

### Example:

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## Ques 8: How do you define and use state in a React class component?

- State is initialized in the constructor and updated using `setState()`.

### Example:

```jsx
class CounterNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <DisplayCount countProp={this.state.count} />
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

class DisplayCount extends React.Component {
  render() {
    return <p>Count: {this.props.countProp}</p>;
  }
}
```

## Ques 9: How do you pass props to a functional component?

- Props are passed as arguments to the functional component.

## Ques 10: What are PropTypes?

- PropTypes are used to validate the type of props passed to a component.

### Example:

```jsx
StatevsProps.propTypes = {
  propExample: PropTypes.string,
};
```

## Ques 11: How do you use props in a class component?

- Access props via `this.props` inside the class component.

## Ques 12: In how many ways can we export/import things from a JS module?

- **Default Export/Import:**
- Use it when you want to export something by default.
- Multiple Default exports are not allowed from the same module.
- We can refer to the default exported thing by any name, so the name is not significant. - Example:
  ```jsx
  export default Counter;
  import Counter from "./counter";
  ```
- **Named Export/Import:**
- Use it when you have multiple things to be exported from a JS Module.
- Named exports must be referred to by the Exact Same Name while importing them.
- Example:

  ```jsx
  export { Counter };
  import { Counter } from "./counter";
  ```

## Ques 13: What is Virtual DOM?

- A logical representation of the actual DOM in the form of React Elements.
- A programming concept where a virtual representation of the UI is kept in the memory.
- It is an object that has React Elements to represent the UI.
- Used to efficiently update the UI by calculating differences (diffing).

## Ques 14: Reconciliation vs Rendering?

- **Reconciliation:** The process of computing the diff between two Virtual DOMs.
- **Rendering:** The actual updating of the DOM based on changes.

## Ques 15: What is the Diff Algorithm?

- Calculates the difference between the previous and updated Virtual DOMs.
- Updates only the changed parts in the actual DOM, making React highly efficient for DOM manipulations.

## Ques 16: In React props are passed from parent to child generally but how can we pass the props from child to parent?

- Props are read-only data passed from a parent component to a child component.
- Props are immutable and are used to communicate between components.

In React, props flow from parent to child by design, as React follows a unidirectional data flow. However, to send data from a child component to a parent, you can use callback functions. Here's how it works:

- **Steps to Pass Data from Child to Parent**
- Define a function in the parent component that will handle the data coming from the child.
- Pass that function as a prop to the child component.
- Call the function inside the child component, passing the desired data as arguments.

**Example: Passing Data from Child to Parent**

```jsx
import React, { useState } from "react";
function ParentComponent() {
  const [message, setMessage] = useState("");
  // Function to handle data from child
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      {/* Pass the function as a prop to the child */}
      <ChildComponent onSendMessage={handleChildData} />
    </div>
  );
}

function ChildComponent({ onSendMessage }) {
  const sendMessageToParent = () => {
    const data = "Hello from the Child!";
    onSendMessage(data); // Call the parent's function with data
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendMessageToParent}>Send Message to Parent</button>
    </div>
  );
}
export default ParentComponent;
```

### Explanation:

1. **Parent Component:**

   - Contains a `handleChildData` function to handle data received from the child.
   - Passes this function to the child component as a prop (`onSendMessage`).

2. Child Component:
   - Calls the `onSendMessage` function (received via props) and sends the data to the parent.
3. When the button is clicked in the child, the `sendMessageToParent` function is triggered, which in turn calls the parent's function with the message.

```

```
