import { createStore } from "redux";

// Step 1: Define Action Type Constants
//Define action type constants to represent the different types of actions that can be dispatched.
const DEPOSIT = "Deposit";
const WITHDRAW = "Withdraw";

// Step 2: Define Action Creators
//Create functions to generate action objects. These functions are called Action Creators.
function depositAction(value) {
  return { type: DEPOSIT, payload: value };
}

function withdrawAction(value) {
  return { type: WITHDRAW, payload: value };
}

// Step 3: Define Initial State
//Set up the initial state of the application, which will be used by the reducer as the starting point.
const initialState = { amount: 1000, name: "Mrinal" };

// Step 4: Define the Reducer Function
//Create a reducer function that takes the current state and an action as arguments and returns the updated state based on the action type.
function reducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    case WITHDRAW:
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    default:
      return state;
  }
}

// Step 5: Create the Redux Store
//Use the createStore function to create the Redux store and pass the reducer to it.
const store = createStore(reducer);

// Step 6: Subscribe to Store Updates
//Subscribe to the store to get notified whenever the state changes. Every time the state updates, it will log the new state.
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Step 7: Dispatch Actions to Update State
//Dispatch actions to update the state. Here, we are dispatching Deposit and Withdraw actions.
store.dispatch(depositAction(200)); // Adds 200 to the amount
store.dispatch(withdrawAction(300)); // Subtracts 300 from the amount

// Step 8: Get the Initial State
//Before dispatching actions, you can check the initial state of the store.
console.log("Initial State:", store.getState());

/*
Code Explanation:
Step 1: Defines constants to avoid hardcoding action types, improving code readability and avoiding typos.
Step 2: Action creators are functions that create and return action objects, which can later be dispatched to update the state.
Step 3: The initial state is defined, which acts as the starting point for the application.
Step 4: The reducer takes the current state and action and returns a new state. It checks the action type and modifies the state accordingly.
Step 5: The store is created using the createStore method and passed the reducer.
Step 6: The subscribe method logs changes to the state whenever an action is dispatched.
Step 7: Actions are dispatched to update the state (e.g., depositing or withdrawing money).
Step 8: The initial state is printed before any actions are dispatched.

*/
