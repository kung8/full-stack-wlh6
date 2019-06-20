import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'

import LandingPage from './components/LandingPage'
import PostsContainer from './components/PostsContainer'
import Header from './components/Header'

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/posts" component={PostsContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, {getUser})(App);
