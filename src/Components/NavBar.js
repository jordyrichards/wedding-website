import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    
        render() {
          return(
            <div className="NavBar">
            <div class="table">
            <ul>
              <li><a href="#" >Home</a></li>
              <li><a href="#" className="appoitments" >About the Day</a></li>
              <li><a href="#" >RSVP</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
            </div>
            </div>
          )
        }
      
}

export default NavBar;