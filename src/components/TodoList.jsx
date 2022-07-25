import React from 'react';
import { TodoItem } from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item) => {
        return <TodoItem item={item}></TodoItem>;
      })}
    </ul>
  );
}

export { TodoList };
