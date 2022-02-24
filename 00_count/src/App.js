import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);
  
  const upCount = () => { setCounter(counter+1) };
  const downCount = () => { setCounter(counter-1) };
  
  return (
    <div className="container">
      <h1>Count: { counter }</h1>
      <div className="btn-container">
        <button onClick={ upCount }>Up</button>
        <button onClick={ downCount }>Down</button>
      </div>
    </div>
  );
}

export default App;
