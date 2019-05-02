import React, { Component } from 'react';
import './HomePage.css';
import Countdown from 'react-countdown-now';

class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
        
            <h1 class="mainTitle">Jordan and Alex's Wedding!</h1> 
            <p class="countdown-label">Days &nbsp;&nbsp;&nbsp; Hours &nbsp;&nbsp; Mins &nbsp;&nbsp; Secs</p>
                <div className="countdown">
                    <Countdown date={new Date('2019-11-02T13:00:00')} />
                </div>
            </div>
        )
    }
}

export default HomePage;