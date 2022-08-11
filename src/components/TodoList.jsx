import React from 'react';

import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

import '../styles/TodoList.css';

function TodoList() {
  const { searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);
  return (
    <ul className="TodoList">
      {searchedTodos.map((todo) => {
        return <TodoItem todo={todo} key={todo.text} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoItem>;
      })}
    </ul>
  );
}

export { TodoList };
