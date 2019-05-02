import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutTheDay from './Pages/AboutTheDay';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/home" component={HomePage}></Route>
        <Route path="/aboutday" component={AboutTheDay}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
