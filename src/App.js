import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, DefaultRoute } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OrderOfDay from './Components/OrderOfDay';
import Masthead from './Components/Masthead';
import NavBar from './Components/NavBar';
import Venue from './Components/Venue';
import RSVPForm from './Pages/RSVPForm';
import AboutTheDay from './Pages/AboutTheDay';
import Registry from './Components/Registry';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <div className="navBackground">
        <NavBar />
      </div>
      <Masthead />
      <div className="App">
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/venue" component={Venue}></Route>
        <Route path="/info" component={AboutTheDay}></Route>
        <Route path="/registry" component={Registry}></Route>
        <Route path="/rsvp" component={RSVPForm}></Route>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
