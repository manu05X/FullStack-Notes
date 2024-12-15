### **Question 1: What is `useContext` in React?**

`useContext` is a React hook that allows components to consume values from a context. It eliminates the need for prop drilling by enabling access to shared data across the component tree.

- **Purpose**: Share state, themes, or other data globally without passing props down manually through multiple levels.
- **Usage**: Accepts a context object (`React.createContext`) and returns the current value of the context.

---

### **Question 2: Create an App to Change Theme in React JS**

**Steps**:

1. **Create Context**: Use `React.createContext` to store the theme and a function to toggle it.
2. **Provide Context**: Wrap your app with the `ThemeProvider` and pass the theme value and toggle function.
3. **Consume Context**: Use `useContext` to access and update the theme in child components.

**Example Flow**:

- **ThemeProvider** holds the state for `light` and `dark` themes.
- A **ToggleButton** component consumes the context to switch between themes.
- The **App** applies the theme dynamically based on the context.

```jsx
// src/App.js
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <h1>Theme Switcher App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
```

```jsx
// src/ThemeContext.js
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

```css
/* src/App.css */
body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: black;
  color: white;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: lightgray;
}
```

---

### **Question 3: Can You Have Multiple Contexts in a Single Component?**

Yes, you can use multiple contexts within a single component.

- **Approach 1**: Nest the contexts by wrapping providers at the top level. Each provider handles a specific context (e.g., theme, user settings, language).
- **Approach 2**: Use `useContext` multiple times to consume each context as needed.

**Example Use Case**:

- One context for managing the theme (light/dark mode).
- Another context for managing user authentication or settings.

Using multiple contexts ensures modularity and keeps concerns separated while maintaining a clean architecture.

```jsx
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create Theme and User Contexts
const ThemeContext = createContext("light");
const UserContext = createContext(null);

const UseContextHook = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <UserContext.Provider value={{ isLoggedin: false }}>
        <div>
          <h3>
            <u>useContext Hook</u>
          </h3>

          <GrandparentComponent data={"light"} />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

// Prop Drilling Components
const GrandparentComponent = ({ data }) => {
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <GrandchildComponent data={data} />;
};

const GrandchildComponent = ({ data }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { isLoggedin } = useContext(UserContext);

  return (
    <div>
      <p>{data}</p>
      <p>Value from context: {theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
      <p>{isLoggedin ? "User is logged in" : "User is not logged in"}</p>
    </div>
  );
};

export default UseContextHook;
```
