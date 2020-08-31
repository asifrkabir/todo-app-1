import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <div className="">
          <div className="">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" style={{maxWidth: "72vw"}} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
          </div>
          <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo" style={{backgroundColor: 'white'}}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;