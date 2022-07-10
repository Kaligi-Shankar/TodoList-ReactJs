import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value);

  }
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todo, task]
    setTodo(newTodos)
    setTask("");
  }

  const deleteHandler = (indexValue) => {
    const newtodo = todo.filter((todo, index) => 
      index !== indexValue);
    setTodo(newtodo);
    
  }
  return (
    <div className="App">
      <center>
        <h2> Todo List APP</h2>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" placeholder="Enter your task" name="task" value={task} onChange={changeHandler} /> &nbsp; &nbsp;
          <input type="submit" value="Add" />
        </form>
      </center>
      <Todolist todolist={todo} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
