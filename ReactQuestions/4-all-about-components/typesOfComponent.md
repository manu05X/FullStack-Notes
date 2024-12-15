# React Component Types

## Question 1: What are Smart / Stateful / Container Components?

### Definition:

Smart components (also known as stateful or container components) are responsible for managing state, handling business logic, and passing data down to presentational components.

### Characteristics:

- They often contain state (using `useState`, `useReducer`, or a class component's `state` property).
- They implement the core logic of the application.
- They interact with APIs, manage data, or decide what gets rendered.
- Typically pass down props to presentational components.

### Example:

```jsx
function ContainerComponent() {
  const [data, setData] = React.useState("Hello, World!");

  return <PresentationalComponent message={data} />;
}

function PresentationalComponent({ message }) {
  return <h1>{message}</h1>;
}
```

## Question 2: What are Dumb / Stateless / Presentational Components?

### Definition:

Presentational components (also known as dumb or stateless components) are responsible for displaying the UI. They receive data from their parent components through props but do not manage state themselves.

### Characteristics:

- Focus on how things look (UI).
- Do not contain state or business logic.
- Usually implemented as functional components.

### Example:

```jsx
function PresentationalComponent({ text }) {
  return <p>{text}</p>;
}
```

## Question 3: What are Higher-Order Components (HOCs)?

### Definition:

A Higher-Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with additional functionality.

### Characteristics:

- Used for code reuse and logic sharing across components.
- Do not modify the original component; instead, they wrap it and enhance its behavior.

### Example:

```jsx
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = true; // Example logic
    return isAuthenticated ? <Component {...props} /> : <p>Access Denied</p>;
  };
}

const Feature = () => <div>Protected Feature</div>;
const FeatureWithAuth = withAuth(Feature);
```

## Question 4: What are Pure Components?

### Definition:

Pure components are React components that only re-render when their props or state change. They are optimized for performance by avoiding unnecessary re-renders.

### Characteristics:

- Implemented as `React.PureComponent` in class components or manually checking props/state in functional components using `React.memo`.
- Performs a shallow comparison of props and state.

### Example (Class Component):

```jsx
class PureComponentExample extends React.PureComponent {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
```

### Example (Functional Component):

```jsx
const FunctionalPureComponent = React.memo(({ text }) => <h1>{text}</h1>);
```

## Question 5: What are Controlled Components?

### Definition:

Controlled components are input elements whose value is controlled by React through state.

### Characteristics:

- React takes control of the input element’s value using state.
- Changes to the input trigger `onChange`, which updates the state.

### Example:

```jsx
function ControlledInput() {
  const [value, setValue] = React.useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## Question 6: What are Uncontrolled Components?

### Definition:

Uncontrolled components are input elements that manage their own state internally in the DOM. React interacts with them using refs but does not control their value.

### Characteristics:

- State is handled by the DOM, not by React.
- Useful for integrating non-React libraries.

### Example:

```jsx
function UnControlledInput() {
  const inputRef = React.useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Input Value</button>
    </div>
  );
}
```

## Summary Table:

| **Type**                 | **Description**                                                    | **Key Feature**                           |
| ------------------------ | ------------------------------------------------------------------ | ----------------------------------------- |
| Smart/Stateful/Container | Manages state and logic, passes data to presentational components. | Business logic handling.                  |
| Dumb/Stateless           | Renders UI based on props received from parent.                    | Focuses on presentation.                  |
| HOC                      | Wraps components to enhance them with additional functionality.    | Reusability and logic sharing.            |
| Pure Components          | Avoid unnecessary re-renders by shallow comparison of props/state. | Performance optimization.                 |
| Controlled Components    | React state manages the value of the input.                        | React controls the input field via state. |
| Uncontrolled Components  | Input state is managed by the DOM, React interacts via refs.       | DOM controls the input field's value.     |
