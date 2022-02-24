import React, { useState } from 'react';
import './App.css';

function App(){
  const [index, setIndex] = React.useState("0");
  function selectChange(event){
    setIndex(event.target.value);
  };

  return(
    <div className="container">
      <h1>단위 변환 계산기</h1>
      <select onChange={ selectChange }>
        <option value="0">선택해주세요</option>
        <option value="1">시간</option>
        <option value="2">길이</option>
      </select>
      <div>
        { index === "0" ? "선택해주세요" : null }
        { index === "1" ? <Clock /> : null }
        { index === "2" ? <Length /> : null }
      </div>
    </div>
  );
}
export default App;

function Clock(){
  /* */
  const [amount, setAmount] = useState('');
  const change = (event) => { setAmount(event.target.value) };

  /* 초기화 */
  const reset = () => { setAmount(0) };

  /* */
  const [invert, setInvert] = useState(false);
  const inverted = () => { 
    reset();
    setInvert((currents) => !currents);
  };
  
  return(
    <div className="container">
      <div className="convert-container">
        <label htmlFor='hour'>시간</label>
        <input id='hour' type='number' placeholder='시간을 입력하세요.' value={ invert ? Math.round(amount/60) : amount } onChange={ change } disabled={ invert } />
        <h1>=</h1>
        <label htmlFor='minute'>분</label>
        <input id='minute' placeholder='분을 입력하세요.' value={ invert ? amount : (amount*60)} onChange={ change } disabled={ !invert } />
      </div>
      <button onClick={ inverted }>{ invert ? "분 👉 시" : "시 👉 분" }</button>
    </div>
  )
}
function Length(){
  /* */
  const [amount, setAmount] = useState('');
  const change = (event) => { setAmount(event.target.value) };

  /* 초기화 */
  const reset = () => { setAmount(0) };

  /* */
  const [invert, setInvert] = useState(false);
  const inverted = () => { 
    reset();
    setInvert((currents) => !currents);
  };
  
  return(
    <div className="container">
      <div className="convert-container">
        <label htmlFor='meter'>미터</label>
        <input id='meter' type='number' placeholder='m(미터)를 입력하세요.' value={ invert ? (amount/100) : amount } onChange={ change } disabled={ invert } />
        <h1>=</h1>
        <label htmlFor='cm'>센티미터</label>
        <input id='cm' placeholder='cm(센티미터)를 입력하세요.' value={ invert ? amount : (amount*100)} onChange={ change } disabled={ !invert } />
      </div>
      <button onClick={ inverted }>{ invert ? "cm(센티미터) 👉 m(미터)" : "m(미터) 👉 cm(센티미터)" }</button>
    </div>
  )
}