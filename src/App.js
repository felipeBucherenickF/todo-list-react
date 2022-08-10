import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

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
      completed: false,
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

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <div className="TodoListContainer">
      <h1>TODO List</h1>
      <TodoCounter totalTodos={totalTodos} completedTodods={completedTodods} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {error && <p>Error....</p>}
      {loading && <p className="Loading">Loading........</p>}
      {!loading && !searchedTodos.length && <p className="FirstTodo">Create your first TODO</p>}

      <TodoList searchedTodos={searchedTodos} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
