import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">
      Completed {props.completedTodods} of {props.totalTodos}
    </h2>
  );
}

export { TodoCounter };
