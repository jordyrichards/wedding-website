import React, { Component } from 'react';
import './HomePage.css';
import Countdown from 'react-countdown-now';

class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
            <img className="polaroid" src={require('./Polaroid_collage.png')} alt="photo collage" width="50%" height="50%" />
            <p class="countdown-label">Days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mins &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secs</p>
                <div className="countdown">
                    <Countdown date={new Date('2019-11-02T13:00:00')} />
                </div>
            </div>
        )
    }
}

export default HomePage;