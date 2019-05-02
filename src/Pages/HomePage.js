import React, { Component } from 'react';
import './HomePage.css';
import Countdown from 'react-countdown-now';

class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
        
            <h1 class="mainTitle">Jordan and Alex's Wedding!</h1> 
            <Countdown className="countdown" date={new Date('2019-11-02T13:00:00')} />
            </div>
        )
    }
}

export default HomePage;