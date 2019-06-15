import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    
        render() {
          return(
            <div class="table">
            <ul>
              <li><a href="/home" >Home</a></li>
              <li><a href="/venue" className="appoitments" >Venue</a></li>
              <li><a href="/info" className="appoitments" >Day Info</a></li>
              <li><a href="/registry" >Registry</a></li>
              <li><a href="/rsvp" >RSVP</a></li>
            </ul>
            </div>
          )
        }
}

export default NavBar;