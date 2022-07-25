import React from 'react';
import { TodoItem } from './TodoItem';
import '../styles/TodoList.css';

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map((item) => {
        return <TodoItem item={item}></TodoItem>;
      })}
    </ul>
  );
}

export { TodoList };
