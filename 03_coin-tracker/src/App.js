import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [loading, setLoading] = useState(true); // 로딩중화면 true면 loading
  const [coins, setCoins] = useState([]); // API의 내용을 JSON화하여 배열에 저장
  const [needCoin, setNeedCoin] = useState(''); // 갖고있는코인
  const [cost, setCost] = useState(1); 
  const inputChange = (e) => {
    setNeedCoin(e.target.value);
  }
  const onChange = (e) => {
    setCost(e.target.value); // input에 쓴 값 가져오기
  }
  

  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then( (json) => {
      setCoins(json);
      setLoading(false);
    })
  }, []);

  return(
    <div className="main-wrap">
      <h1> Coins! { loading ? "" : `(${coins.length})` } </h1>
      <input onChange={inputChange} value={ needCoin } placeholder='amount'/>
      { 
        loading 
        ? <p>Loading...</p> 
        : <select onChange={ onChange }>
          {
            coins.map( (coin, index) => <option
            key={index} 
            value={coin.quotes.USD.price} 
            id={coin.symbol}
            symbol = {coin.symbol} >
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option> )
          }
        </select>
      }
      <h2>You can get {needCoin/cost}</h2>
    </div>
  )
}
export default App;