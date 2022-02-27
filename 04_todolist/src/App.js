import React, { useState, useEffect} from 'react';
import './App.css';

function App(){
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if( todo === "" ){
      return;
    }
    setTodos( (current) => [todo, ...current] );
    setTodo("");
  }

  return(
    <div className="main-container">
      <h1 className="main-title"> 📌 TODO-LIST </h1>
      <div className="form-container">
        <form onSubmit={ onSubmit }>
          <input onChange={ onChange } value={ todo } type="text" placeholder='할 일을 적어주세요' />
          <button> + </button>
        </form>
      </div>
      <ul className="list-container">
          {
            todos.map( (item) => <li>{ item }</li> ) 
          }
        </ul>
    </div>
  )
}

export default App;