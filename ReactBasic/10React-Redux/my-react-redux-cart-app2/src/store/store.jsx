import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;

/*

Key Functions of store.js
Creating the Store:
The store.js file is where you create the Redux store using the configureStore function from Redux Toolkit. This function simplifies the setup of the store by automatically configuring the Redux DevTools, middleware (like thunk for asynchronous actions), and enabling good defaults.

Combining Reducers:
In the store.js file, you can combine multiple reducers into a single root reducer. Each reducer manages its own slice of the state. In the example above, cartReducer and productReducer are combined under the keys cart and products, respectively.

Providing the Store to the Application:
The store created in store.js is then passed to the Provider component from react-redux in the main application file (e.g., App.js). This makes the store available to all components in the application, allowing them to access the global state and dispatch actions.

Middleware Configuration:
Redux Toolkit's configureStore allows you to add custom middleware if needed. Middleware can intercept actions before they reach the reducers, which is useful for logging, crash reporting, or handling asynchronous actions.

Enhancing Store Capabilities:
The store can be enhanced with various capabilities, such as using Redux middleware for logging or adding tools like Redux Saga for more complex side effects.
*/
