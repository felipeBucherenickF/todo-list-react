import React from 'react';

import { TodoContext } from './context/TodoContext';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

import './styles/Global.css';

function App() {
  const { loading, error, searchedTodos } = React.useContext(TodoContext);
  return (
    <div className="TodoListContainer">
      <h1>TODO List</h1>
      <TodoCounter />
      <TodoSearch />

      {error && <p>Error....</p>}
      {loading && <p className="Loading">Loading........</p>}
      {!loading && !searchedTodos.length && <p className="FirstTodo">Create your first TODO</p>}

      <TodoList />
      <CreateTodoButton />
    </div>
  );
}

export default App;
