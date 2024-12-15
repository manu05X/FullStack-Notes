### Question 1: What is `useMemo` in React?

- It is a hook used to memoize the result of a function and cache it, recalculating it only if the dependencies change.

- `useMemo` is a React hook used to memoize the result of a function. It only recomputes the memoized value when one of its dependencies has changed. It helps in `optimizing performance` by preventing unnecessary `recalculations` during re-renders.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Question 2: When should you use `useMemo` Hook?

- When computing a value is expensive or time-consuming.
- When you want to prevent unnecessary re-computation of values across re-renders.

Use `useMemo` when you have an expensive computation that you want to avoid recalculating on every render, especially when the computation only depends on certain state or props. It helps in optimizing performance when the computation is costly.

**Examples:**

- Complex calculations (e.g., sorting a large dataset).
- Creating an object or array reference that you want to keep stable across renders (avoiding unnecessary re-renders of child components).

### Question 3: How does `useMemo` differ from `useState`?

- **`useState`:** Used to declare a state variable in a functional component. It holds a value and triggers a re-render whenever the state changes.
- **`useMemo`:** Used to memoize a computed value. It does not trigger a re-render but helps to keep a reference to a value across renders unless its dependencies change.

- `useMemo` memoizes a computed value and returns the `cached` value without causing `re-renders`, while useState manages state and triggers `re-renders` when the state changes.

In essence, `useState` is for managing state, while `useMemo` is for optimizing computations.

### Question 4: What is `useCallback` in React? How is it different from `useMemo`?

- It is hook used to memoize a provided callback function, returning the memoized version of the function.

- `useCallback` is a hook that returns a memoized version of a function. It is used to prevent a function from being recreated on every render unless its dependencies change. This is particularly useful when passing functions as props to child components to prevent unnecessary re-renders.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Difference between `useCallback` and `useMemo`:**

- `useMemo` memoizes a value (result of a function).
- `useCallback` memoizes a function itself.

While both are used for performance optimization, `useMemo` is for memoizing values and `useCallback` is for memoizing functions.

### Question 5: What happens when you use `useCallback` with empty dependencies?

When `useCallback` is used with an empty dependency array (`[]`), the function will be memoized once and will never be recreated on subsequent renders, since there are no dependencies to trigger a change. The function remains the same across all renders.

```jsx
const memoizedFunction = useCallback(() => {
  console.log("Hello");
}, []);
```

### Question 6: When should you not use `useCallback` or `useMemo`?

- **Unnecessary use:** Don’t use `useMemo` or `useCallback` unless you're dealing with expensive computations or functions. For small or simple computations or functions, React's default behavior is sufficient, and using these hooks could actually add overhead.
- **Premature optimization:** These hooks are used for performance optimization, but in many cases, React's built-in optimizations are already enough. Using them prematurely without profiling can add unnecessary complexity.

- Event Handlers or Inline Functions
- Excessive Memory Consumption
- Garbage Collection Concerns

**In summary:**

- Only use `useMemo` when you have expensive computations that need optimization.
- Only use `useCallback` to memoize functions when passing them down to child components to prevent unnecessary re-renders.
