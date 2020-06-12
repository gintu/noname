import * as React from "react";
import "./styles.css";
import TodoList from "./components/todoList";
export default function App() {
  const todos = [{ id: "1", todo: "comsplter" }];
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}
