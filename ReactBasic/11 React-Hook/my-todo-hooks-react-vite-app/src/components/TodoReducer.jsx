import React, { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";
import { taskReducer, initialState } from "./Reducers"; // Import reducer and initialState

function TodoReducer() {
  // Use Reducer Hook
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Input handler for task fields
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

export default TodoReducer;

/*
const [state, dispatch] = useReducer(reducer,initialState);

* it dispatched our actions.
* Based on action(dispatch) we have reducer. So action are kept in reducer

*/
