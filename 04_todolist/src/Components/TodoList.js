// > Components
import TodoItem from './TodoItem';

// > Css
import listStyle from '../Css/list.module.css';

function TodoList({ title, todoList, setTodoList, checked }) {
  return (
    <>
      <div className={listStyle.container}>
        <h1 className={listStyle.title}>{title}</h1>
        <ul className={listStyle.list}>
          {todoList &&
            todoList.map((todoItem) => {
              if (checked !== todoItem.checked) return null;
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

// + 반복은 map()으로

export default TodoList;
