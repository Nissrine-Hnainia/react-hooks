import './App.css';
import { useState } from 'react';
import { Data } from './components/Data';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(Data)

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;

