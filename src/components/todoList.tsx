import React from "react";
interface TodoList {
  todos: { id: string; todo: string }[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoList> = props => {
  return (
    <ul>
      {props.todos.map(item => (
        <li key={item.id}>
          <span>{item.todo}</span>
          <button onClick={props.onDeleteTodo.bind(null, item.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
