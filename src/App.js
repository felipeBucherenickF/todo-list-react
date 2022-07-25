import './styles/Global.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

function App() {
  const todos = [
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
  return (
    <div className="TodoListContainer">
      <h1>TODO List</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos}></TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
