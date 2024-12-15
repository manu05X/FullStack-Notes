import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleIncrement = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    /*
    - As setCount is setter function is a asynchronous function, it doesn't immediately update the state. After all code executes, then handleIncrement is called only one time.
    - Here, setCount is being called three times in a row, each using the same count value from the initial render or last render.
    - React batches these updates, so all three updates are executed before the component re-renders. Since count doesn’t change within the execution of these updates, each setCount call adds 1 to the same stale value of count.
    - Effectively, the final result after all three updates is equivalent to count + 1, not count + 3.
    
    */

    // We will do this instead of above
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  /*
  - Here, setCount is called three times, but each time, it uses the latest state (via the prev argument).
  - React ensures that each functional update gets the most up-to-date state value, even during the batching process. So:
    - The first call takes the current count and adds 1.
    - The second call takes the result of the first update and adds 1.
    - The third call takes the result of the second update and adds 1.
As a result, the state increases by 3.
  */

  return (
    <div>
      <h3>
        <u>useState Hook</u>
      </h3>
      <h5>Question 1: What is useState in React?</h5>
      {/* 
        useState is a hook in React that allows functional components to manage state by
        declaring state variables and providing a function to update them.
      */}
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count+1)}>Increment</button> */}
      {/* OR */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <h5>Question 2: Whats the Output and How to fix this?</h5>
      <button onClick={handleIncrement}>Increment by 3</button>
      <h5>
        Question 3: What is Two Way Data Binding and How can you achieve it in
        react?
      </h5>
      {/* 
      - It is a concept that allows the synchronization of data between the model (or state) 
      and the view in both directions.
      - You can achieve it by combining state management with controlled components.
    */}
      <p>Input Value : {value}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <h5>
        Question 4: Build a Form containing First name, last name and email. Use
        only one state to manage all fields.
      </h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          placeholder="Enter First Name"
          type="text"
          name="firstName"
          onChange={handleInputChange}
        />
        <input
          placeholder="Enter Last Name"
          type="text"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseStateHook;
