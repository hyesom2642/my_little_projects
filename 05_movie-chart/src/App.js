// import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';

import './App.css';

function App(){
  return (
    // <Router>
    //   <Nav />
    //   <Switch>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<Detail />}/>
        </Routes>
      </Router>
    </RecoilRoot>

  )
}
export default App;


// App.js는 router를 render한다.