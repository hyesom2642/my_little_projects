// > 
import { useState } from 'react';

// > Css 
import styled from 'styled-components';

function Color(){
    const [bgColor, setBgColor] = useState('#FFF');
    
    const TodoForm = styled.form`
    width: 500vw;
    height: 90vh;
    background-color: ${props => props.color};
    `;
    const ColorContainer = styled.div`
        width: 500px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Button = styled.div`
        width: 50px;
        height: 50px;
        margin: 0 10px;
        border: none;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
    `;
    const BeigeButton = styled(Button)`
        background-color: #F2EEE5;
    `;
    const PinkButton = styled(Button)`
        background-color: #EEAFAF;
    `;
    const BlueButton = styled(Button)`
        background-color: #AFC4E7; 
    `;
    const GreenButton = styled(Button)`
        background-color: #BAE7AF; 
    `;
    const GrayButton = styled(Button)`
        background-color: #D3C0D3; 
    `;

    return(
        <>
            <TodoForm color={bgColor}>
                <ColorContainer>
                    <PinkButton onClick={ () => setBgColor("#EEAFAF")} />
                    <BlueButton onClick={ () => setBgColor("#AFC4E7")} />
                    <GreenButton onClick={ () => setBgColor("#BAE7AF")} />
                    <GrayButton onClick={ () => setBgColor("#D3C0D3")} />
                    <BeigeButton onClick={ () => setBgColor("#F2EEE5")} />
                </ColorContainer>
            </TodoForm>
        </>
    )
}

export default Color;