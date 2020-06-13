import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

interface Todo {
  id: string;
  todo: string;
}
export default function App(): React.ReactElement | null {
  const [todos, setTodos] = useState<Todo[]>([]);
  let onAddTodo = (text: string) => {
    setTodos([...todos, { id: Math.random().toString(), todo: text }]);
  };
  let onDeleteTodo = (id: string) => {
    setTodos(prevTodo => prevTodo.filter(item => item.id !== id));
  };
  return (
    <div className="App">
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}
