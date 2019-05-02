import React, { Component } from 'react';
import './HomePage.css';
import Venue from '../Components/Venue';

class AboutTheDay extends Component {
    render() {
        return(
            <div className="HomePage">
            <h1 class="mainTitle">Here's some info about the day!!</h1>
            <Venue />
            </div>
        )
    }
}

export default AboutTheDay;