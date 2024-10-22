// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow

import { createStore } from "redux";

// Action Constants

const deposit = "Deposit";
const withdraw = "Withdraw";

// 1> Create a Store
const store = createStore(reducer); // 3> set the reducer to the store

// 2> create Reducer
// reducer -> returns the updated state
function reducer(state = { amount: 1000, name: "Mrinal" }, action) {
  //Defining the action deposit
  if (action.type === deposit) {
    return { amount: state.amount + action.payload, name: state.name };
  }

  //Defining the action withdraw
  if (action.type === withdraw) {
    return { amount: state.amount - action.payload };
  }
  return state;
}
/*
The reducer is a pure function that accepts the current state and an action, and returns the updated state based on the action type.
Initial State: The state argument has a default value: { amount: 1000, name: 'Mrinal' }. This means if no state is provided, the initial state will be used.
Action: The action parameter determines what change needs to be made to the state. Each action has a type and may have an optional payload containing extra data (like the amount of money to deposit or withdraw).
*/

// calling the reducer
console.log(store.getState()); // getting the value of the state

// How to write Actions

// Action Creators
function DepositAction(value) {
  return { type: "Deposit", payload: value };
}

function WithdrawAction(value) {
  return { type: "Withdraw", payload: value };
}

store.subscribe(() => {
  console.log(store.getState());
});

/*
The store.subscribe method allows you to listen for any state changes in the store. Every time an action is dispatched and the state changes, this callback will log the updated state to the console.
*/

// dispatching an Action
store.dispatch(DepositAction(200)); // dispatching an Action
store.dispatch(WithdrawAction(300));

/*
Dispatching means sending an action to the Redux store to trigger a state change.
The first line dispatches a Deposit action with a value of 200, which will increase the amount by 200.
The second line dispatches a Withdraw action with a value of 300, which will decrease the amount by 300.




Code Flow:
    Initially, the state is { amount: 1000, name: 'Mrinal' }.
    When DepositAction(200) is dispatched, the state becomes { amount: 1200, name: 'Mrinal' } because 200 is added to amount.
    When WithdrawAction(300) is dispatched, the state becomes { amount: 900 }, and the name property is lost because the withdraw action does not return the name in the state.
    
Explanation Summary:
    The reducer is responsible for handling state transitions. It modifies the state based on the type of the action and returns the updated state.
    When you dispatch actions like Deposit or Withdraw, the reducer updates the amount in the state accordingly and logs the updated state after each change.
    The key here is that the reducer is pure—it doesn't have side effects, and the state changes are predictable based on the action type and payload.
*/
