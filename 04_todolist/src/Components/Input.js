// > Css
import styled from 'styled-components';

// > 
import { useState } from 'react';

function Input(){
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    // > 
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

    // > styled components 
    const OlContainer = styled.ol`
        width: 300px;
        list-style: none;
        padding-left: 0;
    `;
    const DeleteBtn = styled.button`
        background: inherit;
        border: none;
        cursor: pointer;
    `;
    const formStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const inputStyle = {
        width: "300px",
        height: "10px",
        padding: "10px",
        outline: "none",
        border: "none",
        borderBottom: "1px solid #eee",
    }
    const buttonStyle = {
        padding: "10px",
        backgroundColor: "inherit",
        outline: "none",
        border: "none",
        fontSize: "25px",
        fontWeight: "bold",
        cursor: "pointer",
    }

    return(
        <>
            <div>
                <form onSubmit={ submitFn } type="submit" style={formStyle} >
                    <input type="text" value={toDo} onChange={onChange} placeholder="오늘의 할 일을 적어주세요" style={inputStyle} />
                    <button style={buttonStyle}>+</button>
                </form>
                <OlContainer>
                {
                    toDos.map((item, index) => (
                        <li key={index}>
                            <input type="checkbox" />
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