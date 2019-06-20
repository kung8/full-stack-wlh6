import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import PostsContainer from './components/PostsContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/posts" component={PostsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
