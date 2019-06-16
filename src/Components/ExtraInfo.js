import React, { Component } from 'react';
import './ExtraInfo.css';

class ExtraInfo extends Component {
    render() {
        return(
            <div className="ExtraInfo">
                <p className="subtitleInfo">Accomodation</p>
                <p className="normalContent">We are lucky to have all the rooms in the hotel available to us. However the hotel is small so the rooms are limited in number.</p>
                <p className="normalContent">A 2 person room is £80 including breakfast, unfortunately due to the limited availability we are unable to offer single rooms.</p>
                <p className="subtitleInfo">Dress Code</p>
                <p className="normalContent">The dress code for the wedding is Formal Attire. The theme for the wedding is "Nature in Autumn", so plenty of Red's, Orange's, Yellow's and Purple's</p>
                <p className="subtitleInfo">Directions</p>
                <p className="normalContent">Driving: The Hotel is located just off of Junction 17 on the M4, take the exit towards Malmesbury and then take the first left towards Stanton St Quinin. There is ample parking at the venue for all guests</p>
                <p className="normalContent">Public transport: The closest train station is in Chippenham, from there is approximately a 10 minute taxi ride to the venue.</p>
                <p className="subtitleInfo">Closest alternative Hotels</p>
                <p className="normalContent"></p>
                <p className="normalContent"></p>
                <p className="subtitleInfo">Any extra info</p>
                <p className="normalContent">Hopefully this answers any burning questions you have about the day. If not though, please give me a call (07951934823) or ping an email to jordyrichards@gmail.com and hopefully I can help!</p>
            </div>
        )
    }
}

export default ExtraInfo;