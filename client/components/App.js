import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './CustomHistory';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Router>
    </div>
  );
};

export default App;
