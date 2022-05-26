// > Components
import Color from './Components/Color';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

// >
import { useState } from 'react';

// > Css
import AppStyle from './Css/App.module.css';

function App() {
  const [bgColor, setBgColor] = useState('#fff');
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className={AppStyle.container} style={{ backgroundColor: `${bgColor}` }}>
        <h1 className={AppStyle.title}>✍ TODO LIST</h1>
        <Input todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <Color setBgColor={setBgColor} />
      </div>
    </>
  );
}

export default App;
