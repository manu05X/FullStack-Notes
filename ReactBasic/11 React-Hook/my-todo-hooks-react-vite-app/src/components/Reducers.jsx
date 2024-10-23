import uuid from "react-uuid";

// Initial state for the reducer
export const initialState = {
  tasks: [],
  task: { title: "", by: "" },
};

// Reducer function to handle actions
export const taskReducer = (state, action) => {
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
