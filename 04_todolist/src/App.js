// > Components
import Color from './Components/Color';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

// >
import { useState } from 'react';

// > Css
import Main from './Css/App.module.css';

function App() {
  const [color, setColor] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className={Main.container} style={{ backgroundColor: `${color}` }}>
        <h1 className={Main.title}>✍ TODO LIST</h1>
        <Input todoList={todoList} setTodoList={setTodoList} />
        <TodoList title={'Todo'} todoList={todoList} setTodoList={setTodoList} checked={false} />
        <TodoList
          title={'Completed'}
          todoList={todoList}
          setTodoList={setTodoList}
          checked={true}
        />
        <Color color={color} setColor={setColor} />
      </div>
      {/* <TodoContainer color={color}>
        <TodoTitle>✍ TODO LIST</TodoTitle>
        <Input />
        <Color setColor={setColor} />
      </TodoContainer> */}
    </>
  );
}

export default App;
