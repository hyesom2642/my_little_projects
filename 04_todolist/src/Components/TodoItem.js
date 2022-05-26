// > Css
import itemStyle from '../Css/TodoItem.module.css';

// > import
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function TodoItem({ todoItem, todoList, setTodoList }) {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todoItem.todo);
  const [checked, setChecked] = useState(false);
  const editInputRef = useRef(null);

  // * 삭제
  function deleteItem(e) {
    const parentLi = e.target.parentElement;
    parentLi.remove();
  }

  // * 수정
  function editItemState() {
    setEdit(true);
  }
  function editCompleteItem() {
    const newEditTodoList = todoList.map((item) => ({
      ...item,
      todo: item.id === todoItem.id ? newTodo : item.todo,
    }));
    setTodoList(newEditTodoList);

    setEdit(false);
  }
  function editInput(e) {
    setNewTodo(e.target.value);
  }
  useEffect(() => {
    if (edit === true) {
      editInputRef.current.focus();
    }
  }, [edit]);

  // * checkbox
  function checkboxHandle() {
    if (checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }
  // useEffect(() => {
  //   checkboxHandle();
  // }, []);

  return (
    <>
      <li className={itemStyle.item}>
        <input type="checkbox" className={itemStyle.checkbox} onClick={checkboxHandle} />
        {edit === true ? (
          <input
            type="text"
            value={newTodo}
            onChange={editInput}
            className={itemStyle.editInputbox}
            ref={editInputRef}
          />
        ) : (
          <span className={checked === false ? itemStyle.span : itemStyle.spanChecked}>
            {todoItem.todo}
          </span>
        )}
        {edit === false ? (
          <button type="button" className={itemStyle.editButton} onClick={editItemState}>
            🔺
          </button>
        ) : (
          <button type="button" className={itemStyle.editButton} onClick={editCompleteItem}>
            ✔️
          </button>
        )}

        <button type="button" className={itemStyle.deleteButton} onClick={deleteItem}>
          ❌
        </button>
      </li>
    </>
  );
}

TodoItem.propType = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    todo: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      todo: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoItem;
