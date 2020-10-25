import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <Header />    
      <Switch>
        <Route path="/checkout">
            <div className="App">
              <Checkout />
            </div>
          </Route>
          <Route path="/">
            <div className="App">
              <Home />
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
