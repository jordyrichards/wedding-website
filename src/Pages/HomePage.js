import React, { Component } from 'react';
import './HomePage.css';
import Countdown from 'react-countdown-now';

//Change the collage to have the date and venue written on either side of the picture
class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
            <img className="polaroid" src={require('./homepage-image.png')} alt="photo collage" width="100%" height="100%" />
            <p class="countdown-label">Days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mins &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secs</p>
                <div className="countdown">
                    <Countdown date={new Date('2019-11-02T13:00:00+01:00')} />
                </div>
            </div>
        )
    }
}

export default HomePage;