import React from 'react';
import check from '../assets/check.png';
import cancel from '../assets/cancel.png';
import '../styles/TodoItem.css';

function TodoItem({ todo }) {
  return (
    <li className="TodoItem">
      <div className="TodoItemButton">
        <img src={check} alt="TODO done" />
      </div>

      <p>{todo.text}</p>

      <div className="TodoItemButton">
        <img src={cancel} alt="delete TODO" />
      </div>
    </li>
  );
}

export { TodoItem };
