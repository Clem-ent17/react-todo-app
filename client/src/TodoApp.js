import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState({
    name : "",
    completed: false
  })

  const [uncheckList, setUncheckList] = useState([])
  const [checkList, setCheckList] = useState([])

  const handleInputChange = event => {
    console.log("handle input function", event.target)

    const { value } = event.target
    setTodos(value)
    console.log("todos", todos)
  }

  const handleFormSubmit = event => {
    console.log("click")

    //Post route need to go here
  }

  const dataFetch = () => {
    //fetch the data from the database
  }

  useEffect(() => {
    dataFetch()
  },[])

  return (
    <div className="Container">
      <Header />
      <TodoForm 
        inputFunction={handleInputChange}
        submitFunction={handleFormSubmit}
      />
      <TodoList />
    </div>
  );
}

export default TodoApp;
