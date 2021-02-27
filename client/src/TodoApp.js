import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './App.css';

function TodoApp() {
  return (
    <div className="Container">
      <Header message="Todo List"/>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
