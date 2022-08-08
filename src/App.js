import React from 'react';

import './styles/Global.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

function App() {
  const defaultTodos = [
    {
      text: 'run for fun',
      completed: true,
    },
    {
      text: 'sleep for rest',
      completed: true,
    },
    {
      text: 'eat my breakfast',
      completed: true,
    },
    {
      text: 'smile for the people',
      completed: false,
    },
  ];

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const completedTodods = todos.filter((todo) => todo.completed).length;

  let searchedTodos = [];

  if (!searchValue) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <div className="TodoListContainer">
      <h1>TODO List</h1>
      <TodoCounter totalTodos={totalTodos} completedTodods={completedTodods} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList searchedTodos={searchedTodos}></TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
