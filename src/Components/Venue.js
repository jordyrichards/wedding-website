import React, { Component } from 'react';
import './Venue.css';

class Venue extends Component {
    render() {
        return(
            <div className="Venue">
                <h2 class="smallTitle">Our Venue!</h2>
                <img src="https://static.laterooms.com/hotelphotos/laterooms/88858/gallery/88858.jpg"></img>
                <p class="content">Our venue is the beautiful link(Stanton Manor Hotel)</p>
                <p class="content">It's located just outside of Chippenham in the village of Stanton St Quinten</p>
                <p class="content">Add a map</p> 
                <p class="content">Directions: Car: M4, junction 17, roundabout away from chippenham. Train: Chippenham station, taxi</p>
            </div>
        )
    }
}

export default Venue;