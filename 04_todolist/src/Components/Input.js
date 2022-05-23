// > Css
import InputStyle from '../Css/Input.module.css';
// import styled from 'styled-components';

// >
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Input({ todoList, setTodoList }) {
  const [toDo, setTodo] = useState('');
  const inputRef = useRef(null); // # useRef() : Hook으로 ref 생성

  // # input 값 가져오기
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  // # addBtn을 클릭했을 때
  const addBtnClick = (e) => {
    e.preventDefault();
    // # todoitem 추가
    // # input에 입력한 값을 todoList에 추가, concat(): 인자로 받은 값을 배열에 추가하여 새로운 배열을 반환한다.
    // # id : item마다 id를 넣어준다.
    // # toDo : 각 todo item의 내용
    const nextTodoList = todoList.concat({
      id: todoList.length,
      toDo,
      checked: false,
    });
    setTodoList(nextTodoList);

    // # input값을 초기화 & focus
    setTodo('');
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  //   const submitFn = (e) => {
  //     e.preventDefault();
  //     if (toDo === '') {
  //       return;
  //     }
  //     setTodo('');
  //     setTodos((currentItems) => [...currentItems, toDo]);
  //   };
  //   const deleteItemFn = (e) => {
  //     const li = e.target.parentElement;
  //     li.remove();
  //   };

  return (
    <>
      <form classNmae={InputStyle.formStyle} type="submit">
        <input
          className={InputStyle.input}
          type="text"
          value={toDo}
          onChange={onChange}
          ref={inputRef}
          placeholder="오늘의 할 일을 적어주세요"
        />
        <button className={InputStyle.addBtn} onClick={addBtnClick}>
          +
        </button>
      </form>

      {/* <OlContainer>
          {toDos.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              {item}
              <DeleteBtn onClick={deleteItemFn}>❌</DeleteBtn>
            </li>
          ))}
        </OlContainer> */}
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
