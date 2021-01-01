import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/'>
          <Home />
        </Route>
      </Router>
    </div>
  );
};

export default App;
