# React useReducer Hook

## Overview

The `useReducer` hook in React is used for more complex state management scenarios where state logic involves multiple sub-values or state transitions. It’s similar to `useState`, but it’s preferable when the state logic becomes more intricate, such as when actions affect the state in multiple ways, or when state updates depend on the previous state.

## Advantages of `useReducer` Over `useState`

1. **Better for Complex State Logic**

   - If a component's state transitions are more complex than just updating a single value (for example, adding/removing items, handling multiple properties, etc.), `useReducer` is a better fit.
   - In the `Todo` component, using `useState` would require managing both the task input and the list of tasks separately, while `useReducer` allows you to centralize all related state transitions in one place.

2. **More Readable and Organized State Management**

   - `useReducer` uses a **reducer function** to handle state transitions based on action types. This makes it easier to track which action causes what change to the state, especially in complex scenarios.
   - The reducer acts like a central place for managing all state transitions, making the logic more declarative and predictable.

3. **Easier to Scale**

   - As your app grows and state logic becomes more complex, `useReducer` makes it easier to add more actions without making the code messy.
   - With `useState`, you might need to have multiple states and functions to manage each, but with `useReducer`, you can group state changes into actions in one reducer, keeping things tidy.

4. **Separation of State and Action**
   - With `useState`, you manually manage each individual piece of state and state update logic. In contrast, `useReducer` separates **state** and **actions**, so the component code doesn't directly handle state mutations but dispatches actions instead.
   - This separation allows for better testability and a more organized flow, as it’s easier to track the state changes through specific dispatched actions.

## Differences in Code

- In the `useState` version, the state (`task` and `listTask`) is managed separately:

```javascript
const [listTask, setListTask] = useState([]);
const [task, setTask] = useState({ title: "", by: "" });
```

- Two pieces of state (`listTask` and `task`) are handled independently, leading to multiple functions like `handleInput`, `handleAddTask`, `markDone`, and `deleteTask` that directly manage the state.

- In the `useReducer` version, the state is centralized:

```javascript
const initialState = { tasks: [], task: { title: "", by: "" } };
const [state, dispatch] = useReducer(todoReducer, initialState);
```

- The reducer function centralizes all state transitions, making the logic clearer.

```js
switch (action.type) {
  case "SET_TASK": ...
  case "ADD_TASK": ...
  case "MARK_DONE": ...
  case "DELETE_TASK": ...
}

```

## Advantages of `useReducer` in This Case

1. **Centralized State Handling**

   - All state transitions (task updates, adding, marking, and deleting tasks) are handled through `dispatch` calls that trigger specific actions. This makes the state logic more declarative and easier to follow.

2. **Clear Action Types**

   - Each state change is tied to a specific action type, which makes it easier to understand what’s happening when debugging or reading the code.

3. **Less Code Duplication**

   - Using `useState` in the original code required separate state management for each aspect. `useReducer` condenses this into a single state object and a centralized reducer function.

4. **Predictable State Changes**

   - `useReducer` makes state changes predictable because every state transition happens in response to a dispatched action. This can help avoid bugs related to race conditions or inconsistent state updates that might occur with `useState`.

5. **Improved Debugging**
   - When using `useReducer`, you can easily log or track dispatched actions and see how the state changes, improving the debugging process.

## Summary of the Differences

- **`useState`**: Handles individual state pieces independently, leading to more repetitive code and manual state management.
- **`useReducer`**: Centralizes all state logic in one reducer function, making it better suited for more complex state transitions and improving code readability and scalability.

Overall, the `useReducer` version is more structured and scalable as your app grows or state transitions become more intricate.
