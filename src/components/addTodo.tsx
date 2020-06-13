import React, { useRef } from "react";

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const inputElement = useRef<HTMLInputElement>(null);

  let onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    onAddTodo(inputElement.current!.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={inputElement} />
      <button type="submit">add todo</button>
    </form>
  );
};

export default AddTodo;
