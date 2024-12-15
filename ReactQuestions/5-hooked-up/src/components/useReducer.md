# Using `useReducer` for Shopping Cart State Management in React

## Question 1: What is `useReducer` in React?

The `useReducer` hook is a built-in React hook that allows you to manage state in a functional component using a reducer function. It is similar to `useState` but is more suited for managing complex state logic or when the next state depends on the previous state.

### Syntax

> const [state, dispatch] = useReducer(reducer, initialState);

- **`reducer`**: A function that takes the current state and an action as arguments and returns the new state.
- **`initialState`**: The initial state value.

The `useReducer` hook returns an array containing the current state and a dispatch function that you can use to send actions to the reducer.

## Question 2: When should you use `useReducer` instead of `useState`?

You should consider using `useReducer` instead of `useState` in the following scenarios:

1. **Complex State Logic**: When managing multiple related pieces of state that depend on complex logic or when the next state depends on the previous one.
2. **Multiple State Transitions**: If you have multiple actions that can change the state, using a reducer can help centralize your state management logic.

3. **Performance Optimization**: In cases where performance is critical, and you want to avoid unnecessary renders, `useReducer` can help by batching updates.

4. **Shared State Logic**: When you need to share state logic across multiple components, using a reducer can make it easier to manage and understand.

## Question 3: Example of `useReducer` for Shopping Cart State Management

Here’s an example of how to use `useReducer` for managing a shopping cart's state:

```jsx
import React, { useReducer } from "react";

// Initial state for the shopping cart
const initialState = {
  items: [],
  totalAmount: 0,
};

// Reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = updatedItems.reduce(
        (total, item) => total + item.price,
        0
      );
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotalAmount = filteredItems.reduce(
        (total, item) => total + item.price,
        0
      );
      return {
        ...state,
        items: filteredItems,
        totalAmount: newTotalAmount,
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>
      <button
        onClick={() =>
          addItemToCart({ id: Date.now(), name: "New Item", price: 10.99 })
        }
      >
        Add Item
      </button>
    </div>
  );
};

export default ShoppingCart;
```

### Explanation of the Shopping Cart Example

- **Initial State**: The initial state contains an array of items and a total amount.
- **Reducer Function**:
  - Handles two actions (`ADD_ITEM` and `REMOVE_ITEM`) to update the cart's items and total amount.
- **Dispatching Actions**:
  - The `addItemToCart` function dispatches an action to add a new item.
  - The `removeItemFromCart` function dispatches an action to remove an item based on its ID.
- **Rendering**:
  - The component renders a list of items in the cart along with their prices and a button to remove each item.
  - A button is provided to add new items with a fixed price for demonstration purposes.

This example demonstrates how `useReducer` can effectively manage complex state logic in a shopping cart scenario in React.
