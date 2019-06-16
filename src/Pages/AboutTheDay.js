import React, { Component } from 'react';
import './AboutTheDay.css';
import OrderOfDay from '../Components/OrderOfDay';
import ExtraInfo from '../Components/ExtraInfo';

class AboutTheDay extends Component {
    render() {
        return(
            <div className="HomePage">
            <h1 class="mainTitle">Here's some info about the day!!</h1>
            <OrderOfDay />
            <ExtraInfo />
            </div>
        )
    }
}

export default AboutTheDay;