import React from 'react';
import check from '../assets/check.png';
import cancel from '../assets/cancel.png';
import '../styles/TodoItem.css';

function TodoItem({ todo, completeTodo, deleteTodo }) {
  const onComplete = () => {
    completeTodo(todo.text);
  };
  const onDelete = () => {
    deleteTodo(todo.text);
  };
  return (
    <li className="TodoItem">
      <button className="TodoItemButton" onClick={onComplete}>
        <img className={`${todo.completed && 'TodoItemButtonCheck-completed'}`} src={check} alt="TODO done" />
      </button>

      <p className={`${todo.completed && 'TodoItemText-completed'}`}>{todo.text}</p>

      <button className="TodoItemButton" onClick={onDelete}>
        <img src={cancel} alt="delete TODO" />
      </button>
    </li>
  );
}

export { TodoItem };
