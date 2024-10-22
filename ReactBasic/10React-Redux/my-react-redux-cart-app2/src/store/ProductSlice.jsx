import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//1. Creating a Thunk with createAsyncThunk
//Action Type: The first argument ("products/fetch") is a string that represents the action type.
//Async Function: The second argument is an asynchronous function that performs the API call using axios and returns the fetched data.
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data; // This will be the payload for the fulfilled action.
});

/*
2. Handling Thunk in extraReducers
Pending: When the thunk is initiated, the pending case sets the status to "loading".
Fulfilled: When the API call is successful, the fulfilled case sets the status to "succeeded" and updates the state with the fetched product data.
Rejected: If the API call fails, the rejected case sets the status to "failed" and updates the state with the error message.

*/

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Set status to loading when the thunk is initiated.
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded when the data is fetched successfully.
        state.items = action.payload; // Store the fetched data in the state.
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed when the fetch operation fails.
        state.error = action.error.message; // Store the error message.
      });
  },
});

export default productSlice.reducer;

/*
Thunk are the middleware to get data from API


What is Thunk?
Thunk is a middleware used in Redux applications that allows you to write action creators that return a function instead of an action. This function can then perform asynchronous operations (like API calls) and dispatch actions based on the results of those operations.

How Does Thunk Work?
Action Creators: Instead of returning an action object directly, a thunk action creator returns a function that takes dispatch and getState as arguments.
Dispatching Actions: Inside this function, you can perform asynchronous operations (e.g., API calls) and dispatch actions based on the success or failure of those operations.
Middleware: Thunk is applied as middleware in the Redux store configuration, allowing it to intercept and handle these functions before they reach the reducers.





Benefits of Using Thunk
Simplified Asynchronous Logic: It simplifies the management of asynchronous logic in Redux applications by allowing action creators to return functions that can perform async tasks.
Separation of Concerns: It helps separate the action creation logic from the actual API call and data handling, making the code cleaner and easier to maintain.
Control Over Dispatching: It allows you to control when to dispatch actions based on the outcomes of async operations, providing a more responsive application.
*/
