import React from "react";
interface TodoList {
  todos: { id: string; todo: string }[];
}
const TodoList: React.FC<TodoList> = props => {
  return (
    <ul>
      {props.todos.map(item => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
