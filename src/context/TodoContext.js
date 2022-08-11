import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
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
  const completedTodos = todos.filter((todo) => todo.completed).length;

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
