import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoCounter.css';

function TodoCounter() {
  const { completedTodods, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Completed {completedTodods} of {totalTodos}
    </h2>
  );
}

export { TodoCounter };
