import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    
        render() {
          return(
            <div className="NavBar">
            <div class="table">
            <ul>
              <li><a href="/home" >Home</a></li>
              <li><a href="/aboutday" className="appoitments" >About the Day</a></li>
              <li><a href="#" >RSVP</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
            </div>
            </div>
          )
        }
      
}

export default NavBar;