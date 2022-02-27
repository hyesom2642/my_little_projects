import React, { useEffect, useState } from 'react';

function App(){
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cost, setCost] = useState();
  const [need, setNeed] = useState();
  const onChange = (e) => {
    setCost(e.target.value);
    setNeed(1);
  }
  const inputValue = (e) => {
    setNeed(e.target.value);
  }


  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then( (json) => setCoins(json));
    setLoading(false);
  }, []);

  return(
    <div>
      <h1>The Coins! - { loading === true ? "" : `${coins.length}` }</h1>
      
      <h2>Please Enter Your Coin!</h2>
      <div>
      <input onchange={inputValue} type="number" value={need} placeholder="dollar" />$
      </div>
      <h2>You can get {cost / need}</h2>
      { loading === true 
        ? <strong>Loading...</strong> 
        : <select onchange={onChange}>
        {
          coins.map( (coin, index) => <option key={index} value={coin.quotes.USD.price} id={coin.symbol} symbol = {coin.symbol} >
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)
        }
          </select>
      }
    </div>
  )
}
export default App;