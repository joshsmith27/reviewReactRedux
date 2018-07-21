import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Views/About/about';
import Home from './Views/Home/home';
import axios from 'axios';
import {connect} from 'react-redux';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about/:id" component={About}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(state => state)(App);
