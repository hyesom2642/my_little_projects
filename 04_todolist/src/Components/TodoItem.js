// > Css
import itemStyle from '../Css/item.module.css';

// >
import PropTypes from 'prop-types';

function TodoItem({ todoItem, todoList, setTodoList }) {
  const changeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  return (
    <>
      <li className={itemStyle.item}>
        {/* // # checkbox */}
        <input
          type="checkbox"
          onChange={changeCheckbox}
          checked={todoItem.checked}
          className={itemStyle.checkbox}
        />
        {/* // # todoitem 내용 */}
        <span className={`itemStyle.span ${todoItem.checked} ? 'span-checked' :''`}>
          {todoItem.toDo}
        </span>
        {/* // # 삭제버튼 */}
        <button type="button" className={itemStyle.deleteBtn}>
          🗑
        </button>
      </li>
    </>
  );
}

TodoItem.propType = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    toDo: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      toDo: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoItem;
