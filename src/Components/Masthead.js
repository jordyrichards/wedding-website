import React, { Component } from 'react';
import './Masthead.css';

class Masthead extends Component {
    
        render() {
          return(
            <div class="titleContainer">
                <h2 class="titleLeft">Alex Bassett</h2>
                <h2 class="titleRight">Jordan Richards</h2>
                <img src="https://cdn.shopify.com/s/files/1/0185/5092/products/persons-0171_800x.png?v=1369543850" alt="A heart" width="40" height="40" class="heartIcon"></img>
            </div>
          )
        }
}

export default Masthead;