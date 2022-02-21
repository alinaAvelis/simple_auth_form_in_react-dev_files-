import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Authorization } from './pages/authorization';
import { Home } from './pages/home';

import "./App.scss";



function App() {
  return (
    <Router>
      <div className="page">
        <Route exact path={'/'}> 
          <Authorization />
        </Route>
        <Route path={'/home'} > 
          <Home />
        </Route>
      </div>
    </Router>
  )
}

export default App;
