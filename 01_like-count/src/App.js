import React, { useState } from 'react';
import './App.css';

function App() {
  /* 좋아요 1번 */
  const [like, setLike] = React.useState(0);
  const clickLike = () => { setLike( (current) => current+1 ) };
  const clickDislike = () => { setLike( (current) => current-1 ) };

  /* 좋아요 2번 */
  const [realLike, setReallike] = React.useState(0);
  const [like1, setLike1] = React.useState(true);
  const otherLike = () => { setLike1( (current) => !current ); };
  return (
    <div className="container">
      <div className="first-container">
        <span onClick={ clickLike }>👍</span>
        <span onClick={ like <= 0 ? like : clickDislike }>👎</span>
        <p>좋아요수 : { like } </p>
      </div>
      <div className="second-container">
        <span onClick={ otherLike }>👍</span>
        <p>좋아요수 : { like1 == false ? realLike +1 : realLike } </p>
      </div>
    </div>
  );
}

export default App;
