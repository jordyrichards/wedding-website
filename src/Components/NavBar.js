import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    
        render() {
          return(
            <div className="NavBar">
            <h1>Jordan and Alex Wedding</h1>
            <div class="table">
            <ul>
              <li><a href="/home" >Home</a></li>
              <li><a href="/venue" className="appoitments" >Venue</a></li>
              <li><a href="/schedule" className="appoitments" >Schedule</a></li>
              <li><a href="/rsvp" >RSVP</a></li>
              <li><a href="/contact" >Contact</a></li>
            </ul>
            </div>
            </div>
          )
        }
      
}

export default NavBar;