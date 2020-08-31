import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from './Components/Form';
import TodoList from './Components/TodoList';


function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };

  // Save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    };
  };

  return (
    <div className="App container">
      <header>
        <h1 className="text-center" style={{color: "white", paddingTop: "20px"}}>Asif's Todo List</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}>
      </Form>

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>

    </div>
  );
}

export default App;
