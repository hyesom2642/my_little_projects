import { useState } from 'react';
import './App.css';

function App(){
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if( toDo === "" ){
      return;
    }
    setTodo("");
    setTodos((currentArray) => [...currentArray, toDo]);
  }

  return(
    <div>
      <h1>✍ 오늘의 할 일 {toDos.length}가지 </h1>
      <form onSubmit={onSubmit} type="submit">
        <input value={toDo} onChange={onChange} type="text" placeholder="오늘의 할 일을 적어주세요." />
        <button>+</button>
      </form>
      <ol>
        {toDos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default App;