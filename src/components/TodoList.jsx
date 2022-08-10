import React from 'react';
import { TodoItem } from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ searchedTodos, completeTodo, deleteTodo }) {
  return (
    <ul className="TodoList">
      {searchedTodos.map((todo) => {
        return <TodoItem todo={todo} key={todo.text} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoItem>;
      })}
    </ul>
  );
}

export { TodoList };
