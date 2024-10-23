import React, { useState } from "react";
import uuid from "react-uuid"; // Importing UUID library to generate unique IDs
import { TiTick, TiTrash } from "react-icons/ti"; // Importing icons from 'react-icons' for tick and trash

function Todo() {
  // State to keep track of the list of tasks
  const [listTask, setListTask] = useState([]);

  //task state handle task object that contain task and date properties that is being input during add task. title for task and by for date
  // State to manage the task being added with properties 'title' for task name and 'by' for date
  const [task, setTask] = useState({ title: "", by: "" });

  // This function handles input changes for both task title and date
  const handleInput = (event) => {
    event.preventDefault(); // Prevents the default form behavior
    const key = event.target.name; // Get the input name ('title' or 'by')
    const value = event.target.value; // Get the input value
    setTask({ ...task, [key]: value }); // Update the task state by spreading previous values and updating the changed field
  };

  // This function adds a new task to the list
  const handleAddTask = () => {
    console.log(task); // Log the current task state for debugging
    console.log(uuid()); // Log a generated UUID for debugging
    const updated = { ...task, id: uuid(), isDone: false }; // Create a new task object with a unique ID and 'isDone' set to false
    setListTask([...listTask, updated]); // Add the new task to the task list
  };

  // This function marks a task as done by setting 'isDone' to true
  const markDone = (id) => {
    const index = listTask.findIndex((task) => task.id === id); // Find the index of the task to be marked as done
    const doneTask = [...listTask]; // Create a copy of the current task list
    doneTask[index].isDone = true; // Mark the task as done
    setListTask(doneTask); // Update the task list state with the modified tasks
  };

  // This function deletes a task from the list
  const deleteTask = (id) => {
    const filteredTask = listTask.filter((task) => task.id !== id); // Filter out the task with the matching ID
    setListTask([...filteredTask]); // Update the task list with the remaining tasks
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <div>
        I want to do{"  "}
        {/* Input for task title */}
        <input
          type="text"
          name="title"
          placeholder="Enter your task"
          onChange={handleInput}
        ></input>{" "}
        {/* Input for task due date */}
        by <input type="date" name="by" onChange={handleInput}></input>
        {/* Button to add the task */}
        <button className="wishBtn" onClick={handleAddTask}>
          Add a Task
        </button>
      </div>

      {/* List of tasks */}
      <ul>
        {listTask.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
              <strong>{item.title}</strong> is due by {item.by}
            </span>
            <span>
              {/* Icon to mark the task as done */}
              <TiTick size={24} onClick={() => markDone(item.id)} />
            </span>
            <span>
              {/* Icon to delete the task */}
              <TiTrash size={24} onClick={() => deleteTask(item.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

/*

Comments Explanation:
1>    useState: Used to manage the state for both the list of tasks (listTask) and the individual task being added (task).
2>    handleInput: Captures the input for both the task title and due date, updating the task state.
3>    handleAddTask: Adds a new task to the listTask state, assigning a unique ID and setting isDone to false.
4>    markDone: Updates a task's isDone status to true, indicating that the task is completed.
5>    deleteTask: Filters out the task with the matching ID from listTask, effectively removing it.
6>    Rendering the List: The tasks are rendered as a list of items, each with a button to mark them as done or delete them.
7>    The TiTick and TiTrash icons allow users to mark tasks as completed or delete them.





Execution Flow of the Todo Component
Component Initialization:
When the Todo component is first rendered, React initializes the component and sets up the state using the useState hook.
    listTask: Initialized as an empty array ([]) to hold the list of tasks.
    task: Initialized as an object with title and by as empty strings ({ title: "", by: "" }).

Rendering Initial JSX:
The component's JSX structure is rendered, which includes:
    A heading (My TodoList).
    Input fields for entering the task title and due date.
    A button to add the task (Add a Task).
    An empty list (<ul>) that will eventually display the list of tasks.

User Enters Task Data:
As the user types into the task title and due date input fields:
    handleInput is triggered for each input field.
    This function captures the input values and updates the task state dynamically. It uses the name attribute ("title" or "by") of the input field to determine which field to update and merges the updated value into the task object using the spread operator (...).
    The state now holds the current task details ({ title: "Task Name", by: "2024-10-23" }).

User Clicks 'Add a Task' Button:
When the user clicks the Add a Task button, the handleAddTask function is triggered.
Inside handleAddTask:
    The current task state is logged to the console.
    A unique id is generated for the task using uuid().
    A new task object is created with the following structure: { id, title, by, isDone: false }.
    The new task is added to the listTask state using setListTask([...listTask, updated]).
    The Todo component re-renders, and the newly added task appears in the list.

Rendering Task List:
After the state update in handleAddTask, the component re-renders and maps over the listTask array to generate a list of <li> elements. Each list item displays:
    The task title and due date.
    A tick icon (<TiTick>) for marking the task as done.
    A trash icon (<TiTrash>) for deleting the task.
    At this stage, all tasks are marked as not done (isDone: false), so they appear in normal text.

Marking a Task as Done:
    When the user clicks the tick icon next to a task:
    The markDone function is triggered with the task's id.
    Inside markDone:
        The function finds the task's index in the listTask array using findIndex.
        A copy of the listTask array is made to prevent mutating the state directly.
        The isDone property of the task is set to true.
        The listTask state is updated with the modified task list.
        The component re-renders, and the task is displayed with a line-through (textDecoration: "line-through") to indicate it is completed.


Deleting a Task:
    When the user clicks the trash icon next to a task:
        The deleteTask function is triggered with the task's id.
        Inside deleteTask:
            The listTask array is filtered to remove the task with the matching id.
            The listTask state is updated with the filtered array.
        The component re-renders, and the deleted task is no longer displayed in the list.

Reactivity:
    Every time the user interacts with the task list (adding, marking as done, or deleting a task), React updates the component by re-rendering it based on the new state. The UI always reflects the latest state of the task list (listTask).





Summary of Execution Flow:
    Component mounts with initial empty states (listTask, task).
    User enters data in the input fields, updating the task state via handleInput.
    User adds a task by clicking the "Add a Task" button, triggering handleAddTask to add the task to listTask and re-render the component.
    Task list is rendered with the newly added task.
    User marks a task as done by clicking the tick icon, updating the task's isDone property via markDone.
    User deletes a task by clicking the trash icon, removing the task via deleteTask.
    Reactivity ensures the UI reflects changes made to the task list.


When logic beckome heavy then it is not possible to handle the above code.
So we use reducer to do heavy logical thing.

So in react we use useReducer()
*/

//________________________________________________________________________________________________________________________________

/*
import React, { useReducer } from "react";
import uuid from "react-uuid";
import { TiTick, TiTrash } from "react-icons/ti";

// Initial State
const initialState = {
  tasks: [],
  task: { title: "", by: "" },
};

// Reducer Function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: { ...state.task, [action.payload.key]: action.payload.value },
      };

    case "ADD_TASK":
      const newTask = { ...state.task, id: uuid(), isDone: false };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        task: { title: "", by: "" }, // Reset input fields after adding
      };

    case "MARK_DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: true } : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

function Todo() {
  // Use Reducer Hook
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Input handler
  const handleInput = (event) => {
    dispatch({
      type: "SET_TASK",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  // Add task handler
  const handleAddTask = () => {
    dispatch({ type: "ADD_TASK" });
  };

  // Mark task as done handler
  const markDone = (id) => {
    dispatch({ type: "MARK_DONE", payload: id });
  };

  // Delete task handler
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div>
      <h1>My TodoList (with useReducer)</h1>
      <div>
        I want to do{" "}
        <input
          type="text"
          name="title"
          placeholder="Enter your task"
          value={state.task.title}
          onChange={handleInput}
        />{" "}
        by{" "}
        <input
          type="date"
          name="by"
          value={state.task.by}
          onChange={handleInput}
        />
        <button className="wishBtn" onClick={handleAddTask}>
          Add a Task
        </button>
      </div>
      <ul>
        {state.tasks.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
              <strong>{item.title}</strong> is due by {item.by}
            </span>
            <span>
              <TiTick size={24} onClick={() => markDone(item.id)} />
            </span>
            <span>
              <TiTrash size={24} onClick={() => deleteTask(item.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

*/

/*
Explanation:
useReducer Hook:
Replaces useState for both the task and task list state management.

The useReducer hook takes two arguments:
    The reducer function (todoReducer) that manages state transitions based on actions.
    The initial state (initialState), which is an object containing the list of tasks (tasks) and the current task input (task).

Reducer Function (todoReducer):
    Handles different actions (such as setting input values, adding tasks, marking tasks as done, and deleting tasks).
    Based on the action type, the state is updated accordingly and returned as the new state.

Action Dispatching:
    dispatch({ type: "SET_TASK", payload: { key: event.target.name, value: event.target.value } }): Updates the current task input fields.
    dispatch({ type: "ADD_TASK" }): Adds the new task to the tasks list and resets the input fields.
    dispatch({ type: "MARK_DONE", payload: id }): Marks a task as done by setting isDone to true.
    dispatch({ type: "DELETE_TASK", payload: id }): Removes a task from the tasks list by filtering it out.

Controlled Inputs:
    The input fields for title and by are now controlled by the state (state.task.title and state.task.by), ensuring the input fields stay in sync with the task state managed by the reducer.




Execution Flow:
    User types in the task and due date fields, triggering the SET_TASK action.
    User clicks "Add a Task," triggering the ADD_TASK action to add the new task.
    Tasks are rendered from the state.tasks array.
    User can mark a task as done, triggering the MARK_DONE action.
    User can delete a task, triggering the DELETE_TASK action.
*/
