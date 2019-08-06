import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    
        render() {
          return(
            <div>
            <div class="table"  >
            <ul>
              <li className="Nav"><a href="/" >Home</a></li>
              <li className="Nav2"><a href="/venue" className="appoitments" >Venue</a></li>
              <li className="Nav"><a href="/info" className="appoitments" >Day Info</a></li>
              <li className="Nav2"><a href="/registry" >Registry</a></li>
              <li className="Nav"><a href="/rsvp" >RSVP</a></li>
            </ul>
            </div>
            </div>
          )
        }
}

export default NavBar;