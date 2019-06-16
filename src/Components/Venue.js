import React, { Component } from 'react';
import './Venue.css';

class Venue extends Component {
    render() {
        return(
            <div className="Venue">
                <img src="https://static.laterooms.com/hotelphotos/laterooms/88858/gallery/88858.jpg" width="40%"></img>
                <p class="content">Our venue is the beautiful <a href="https://www.stantonmanor.com/">Stanton Manor Hotel</a></p>
                <p class="content">It's located just outside of Chippenham in the village of Stanton St Quinten</p>
                <div>
                    <iframe width="80%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Stanton%20Manor%2C%20Stanton%20St%20Quintin%2C%20Chippenham%20SN14%206DQ+(Stanton%20Manor)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        <a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a>
                    </iframe>
                </div>
                <br />
            </div>
        )
    }
}

export default Venue;