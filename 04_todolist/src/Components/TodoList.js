// > Components
import TodoItem from './TodoItem';

// > Css
import listStyle from '../Css/TodoList.module.css';

function TodoList({ todoList, setTodoList }) {
  return (
    <>
      <div className={listStyle.container}>
        <ul className={listStyle.list}>
          {todoList.map((todoItem) => {
            return (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
