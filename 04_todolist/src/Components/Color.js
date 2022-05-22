// > Css 
import styled from 'styled-components';

function Color(props){
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
    const ChangeColor = (color) => {
        props.setColor(color)
    }

    return(
        <>  
            <ColorContainer>
                <BeigeButton onClick={() => { ChangeColor("#F2EEE5") }} />
                <GreenButton onClick={() => { ChangeColor("#BAE7AF") }} />
                <BlueButton onClick={() => { ChangeColor("#AFC4E7") }} />
                <GrayButton onClick={() => { ChangeColor("#D3C0D3") }} />
                <PinkButton onClick={() => { ChangeColor("#EEAFAF") }} />
            </ColorContainer>
        </>
    )
}

export default Color;