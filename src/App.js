import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutTheDay from './Pages/AboutTheDay';
import Masthead from './Components/Masthead';
import NavBar from './Components/NavBar';
import Venue from './Components/Venue';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Masthead />
      <div className="App">
        <NavBar />
        <Route path="/home" component={HomePage}></Route>
        <Route path="/venue" component={Venue}></Route>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
