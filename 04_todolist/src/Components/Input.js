// > Css
import styled from 'styled-components';

// > 
import { useState } from 'react';

function Input(){
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);

    const submitFn = (e) => {
        e.preventDefault();
        if( toDo === "" ){
            return;
        }
        setTodo("");
        setTodos((currentItems) => [...currentItems, toDo]);
    }

    const deleteItemFn = (e) => {
        const li = e.target.parentElement;
        li.remove();
    }

    const OlContainer = styled.ol`
    width: 300px;
    `;
    const DeleteBtn = styled.button`
        background: inherit;
        cursor: pointer;
    `;
    const inputStyle = {
        width: "300px",
        height: "10px",

    }

    return(
        <>
            <div>
                <form onSubmit={ submitFn } type="submit">
                    <input type="text" value={toDo} onChange={onChange} placeholder="오늘의 할 일을 적어주세요" style={inputStyle} />
                    <button >+</button>
                </form>
                <OlContainer>
                {
                    toDos.map((item, index) => (
                        <li key={index}>
                            {item}
                            <DeleteBtn onClick={deleteItemFn}>❌</DeleteBtn>
                        </li>
                    ))
                }
                </OlContainer>
            </div>
        </>
    )
}

export default Input;