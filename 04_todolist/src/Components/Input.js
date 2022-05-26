// > Css
import InputStyle from '../Css/Input.module.css';

// >
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function Input({ todoList, setTodoList }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef(null);

  function onInputChange(e) {
    setTodo(e.target.value);
  }

  function addButtonClick(e) {
    e.preventDefault();
    const addTodoList = todoList.concat({
      id: todoList.length,
      todo,
    });
    setTodoList(addTodoList);

    setTodo('');
    inputRef.current.focus();
  }

  return (
    <>
      <div className={InputStyle.container}>
        <form type="submit" classNmae={InputStyle.form}>
          <input
            type="text"
            className={InputStyle.input}
            value={todo}
            placeholder="오늘의 할 일을 적어주세요"
            onChange={onInputChange}
            ref={inputRef}
          />
          <button type="submit" className={InputStyle.addButton} onClick={addButtonClick}>
            +
          </button>
        </form>
      </div>
    </>
  );
}

// > proptypes
Input.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default Input;
