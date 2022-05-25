// > Components
import Color from './Components/Color';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

// >
import { useState } from 'react';

// > Css
import AppStyle from './Css/App.module.css';

function App() {
  const [bgColor, setBgColor] = useState('#fff'); // * 기본값을 '#fff'색으로
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className={AppStyle.container} style={{ backgroundColor: `${bgColor}` }}>
        <h1 className={AppStyle.title}>✍ TODO LIST</h1>
        <Input todoList={todoList} setTodoList={setTodoList} />
        <TodoList title={'Todo'} todoList={todoList} setTodoList={setTodoList} checked={false} />
        <TodoList
          title={'Completed'}
          todoList={todoList}
          setTodoList={setTodoList}
          checked={true}
        />
        <Color setBgColor={setBgColor} />
      </div>
    </>
  );
}

export default App;
