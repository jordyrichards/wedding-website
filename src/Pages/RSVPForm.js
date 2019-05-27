import React, { Component } from 'react';
import './RSVPForm.css';

class RSVPForm extends Component {
    render() {
        return(
            <div className="Venue">
            <div className="formContainer">
                <form>
                    Name(s):<br />
                    <input type="text" name="names"></input> <br /> <br />
                    Attending:<br />
                    <input type="radio" name="attending" value="attendingYes" /> Yes 
                    <input type="radio" name="attending" value="attendingNo" /> No <br /> <br />
                    Do you need a hotel room? (£80 per room)<br />
                    <p class="smallFont">*Note, rooms at the venue are limited so aren't guaranteed. However if we are oversubscribed we will help source an alternative</p>
                    <input type="radio" name="hotel" value="hotelYes" /> Yes
                    <input type="radio" name="hotel" value="hotelNo" /> No <br /> <br />
                    Any Dietary Requirements? (Vegetarian / Vegan / Allergies)<br />
                    <input type="text" name="dietary"></input><br /><br />
                    Disco song suggestion<br />
                    <input type="text" name="songs"></input><br /><br />
                    Any other questions<br />
                    <input type="text" name="questions"></input><br /><br />
                    <input type="submit" value="Submit"></input><br />
                </form>
                </div>
            </div>
        )
    }
}

export default RSVPForm;