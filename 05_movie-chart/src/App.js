import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';

import './App.css';

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;


// App.js는 router를 render한다.