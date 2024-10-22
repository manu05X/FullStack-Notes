import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // name of the slice as their can be many different slices
  initialState: [], // initial state as empty array

  // define reducer that takes action and initial state
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

/*
1> Defining the Slice:
    The createSlice function from Redux Toolkit is used to define the cart slice of the Redux store. This function automatically generates action creators and action types based on the reducers you define.

2> Initial State:
    The initialState defines the starting state of the cart. In this case, it starts as an empty array. This is where you define what the state will look like before any actions are dispatched.

3> Reducers:
    The reducers object contains functions that define how the state changes in response to specific actions. Each reducer updates the state based on the action received.
        addToCart: Adds a new product to the cart.
        removeFromCart: Removes a product from the cart based on its ID.

4> Generated Action Creators:
    By defining reducers in the slice, createSlice automatically generates action creators. For example, addToCart and removeFromCart are exported and can be dispatched from components to update the cart state.

5> Exporting the Reducer:
    The reducer generated by createSlice is exported as the default export of the file. This reducer is then used in the store configuration (e.g., in store.js) to manage the cart state.

6> Integration with the Redux Store:
    The cart slice is integrated into the Redux store by including it in the configureStore function. This allows the cart state to be managed in a centralized way, enabling easy access and updates from different components of the application.

*/
