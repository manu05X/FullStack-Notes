import React, { useState } from "react";

// function Form() {
//   return <h1>Form</h1>;
// }

// export default Form;

//-------------------We use form element to create form----------------------------------------------------------------------

// function Form() {
//   return (
//     <div>
//       <h1>This is a Form</h1>
//       <form>
//         <label>FirstName : </label>
//         <input type="text" />

//         <button type="submit"> Submit Form</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

//--------------------------------------------------------------------------------------------------------------------------------
//3>  we take use of state hook to access value from submit button event.

// function Form() {
//   const [firstName, setFirstName] = useState("");

//   return (
//     <div>
//       <h1>This is a Form</h1>
//       <form>
//         <label>FirstName : </label>
//         <input type="text" value={firstName} />

//         <button type="submit"> Submit </button>
//       </form>
//     </div>
//   );
// }

// export default Form;

// Whenever we need to update the value of a state variable, we must do so through the setter function provided by the `useState` hook (in this case, `setFirstName`).
// Directly modifying the state variable (here `firstName`) is not allowed. This is because the state in React is managed in a controlled way, ensuring that
// updates trigger re-rendering of the component and the UI stays in sync with the underlying state.
// In this example, the state is initialized with an empty string using `const [firstName, setFirstName] = useState("");`.
// React won't allow direct modification of `firstName`; it enforces using `setFirstName` to ensure the state management flow is respected.
// --------------------------------------------------------------------------------------------------------------------
// To modify the state (i.e., to change the value of `firstName`), we need to handle state updates properly.
// We define a function (in this case, `handleChange`) that will be triggered whenever the user interacts with the input field and an event (like typing) occurs.
// Specifically, the `onChange` event handler captures changes in the input field, and it uses the event object to get the new value the user entered.
// `handleChange` will then use the setter function (`setFirstName`) to update the `firstName` state variable with the new value from the input field.

// 4>
// function Form() {
//     const [firstName, setFirstName] = useState("");  // Declare state variable 'firstName' with an initial value of an empty string.

//     // Define the handleChange function to handle input changes.
//     let handleChange = (event) => {
//       setFirstName(event.target.value);  // Update the state variable 'firstName' with the value from the input field (captured by event.target.value).
//     };

//     return (
//       <div>
//         <h1>This is a Form</h1>
//         <form>
//           <label>FirstName : </label>
//           {/* The 'onChange' event listener calls handleChange whenever the user types in the input field. */}
//           <input onChange={handleChange} type="text" value={firstName} />
//           {/* Display the value of 'firstName' below the input field. The UI will automatically re-render when 'firstName' changes. */}
//           <h3>{firstName}</h3>

//           <button type="submit"> Submit </button>  {/* This is a submit button, though currently it does not have any submit functionality. */}
//         </form>
//       </div>
//     );
//   }

//   export default Form;

// --------------------------------------------------------------------------------------------------------------------

//5>
// function Form() {
//   // Declare state variable 'firstName' with an initial value of an empty string.
//   const [firstName, setFirstName] = useState("");

//   // Declare state variable 'lastName' with an initial value of an empty string.
//   const [lastName, setLastName] = useState("");

//   // Define the handleFirstName function to handle changes in the 'firstName' input field.
//   // When the user types in the input, the event triggers and captures the new value,
//   // which is then used to update the 'firstName' state using setFirstName.
//   let handleFirstName = (event) => {
//     setFirstName(event.target.value); // Update the state variable 'firstName' with the value from the input field.
//   };

//   // Similarly, define the handleLastName function to handle changes in the 'lastName' input field.
//   // The event captures the user's input and updates the 'lastName' state via setLastName.
//   let handleLastName = (event) => {
//     setLastName(event.target.value); // Update the state variable 'lastName' with the value from the input field.
//   };

//   // handleSubmit is called when the form is submitted.
//   // It prevents the default form submission (page reload) using e.preventDefault().
//   // Then, it logs the current values of 'firstName' and 'lastName' to the console as an object.
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       fname: firstName, // Log the first name entered in the input field.
//       lName: lastName, // Log the last name entered in the input field.
//     });
//   };

//   return (
//     <div>
//       <h1>This is a Form</h1>
//       <form onSubmit={handleSubmit}>
//         {" "}
//         {/* Attach the handleSubmit function to the form's submit event. */}
//         <label>FirstName : </label>
//         {/* The 'onChange' event listener calls handleFirstName whenever the user types in the first name input field. */}
//         <input onChange={handleFirstName} type="text" value={firstName} />
//         <label>LastName : </label>
//         {/* The 'onChange' event listener calls handleLastName whenever the user types in the last name input field. */}
//         <input onChange={handleLastName} type="text" value={lastName} />
//         <button type="submit"> Submit </button>{" "}
//         {/* This is a submit button, which submits the form data via handleSubmit. */}
//       </form>
//     </div>
//   );
// }

// export default Form;

// --------------------------------------------------------------------------------------------------------------------

//5>
function Form() {
  // Declare state variable 'firstName' with an initial value of an empty string.
  const [firstName, setFirstName] = useState("");

  // Declare state variable 'lastName' with an initial value of an empty string.
  const [lastName, setLastName] = useState("");

  // Define the handleFirstName function to handle changes in the 'firstName' input field.
  // When the user types in the input, the event triggers and captures the new value,
  // which is then used to update the 'firstName' state using setFirstName.
  let handleFirstName = (event) => {
    setFirstName(event.target.value); // Update the state variable 'firstName' with the value from the input field.
  };

  // Similarly, define the handleLastName function to handle changes in the 'lastName' input field.
  // The event captures the user's input and updates the 'lastName' state via setLastName.
  let handleLastName = (event) => {
    setLastName(event.target.value); // Update the state variable 'lastName' with the value from the input field.
  };

  // handleSubmit is called when the form is submitted.
  // It prevents the default form submission (page reload) using e.preventDefault().
  // Then, it logs the current values of 'firstName' and 'lastName' to the console as an object.
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fname: firstName, // Log the first name entered in the input field.
      lName: lastName, // Log the last name entered in the input field.
    });
  };

  return (
    <div>
      <h1>This is a Form</h1>
      <form>
        {/* Attach the handleSubmit function to the form's submit event. */}
        <label>FirstName : </label>
        {/* The 'onChange' event listener calls handleFirstName whenever the user types in the first name input field. */}
        <input onChange={handleFirstName} type="text" value={firstName} />
        <label>LastName : </label>
        {/* The 'onChange' event listener calls handleLastName whenever the user types in the last name input field. */}
        <input onChange={handleLastName} type="text" value={lastName} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        {/* This is a submit button, which submits the form data via handleSubmit. */}
      </form>
    </div>
  );
}

export default Form;
