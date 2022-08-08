import React from 'react';
import { TodoItem } from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ searchedTodos }) {
  return (
    <ul className="TodoList">
      {searchedTodos.map((todo) => {
        return <TodoItem todo={todo} key={todo.text}></TodoItem>;
      })}
    </ul>
  );
}

export { TodoList };
