import React, { Component } from 'react';
import './RSVPForm.css';

class RSVPForm extends Component {
    render() {
        return(
            <div className="Venue">
                <form>
                    Name(s):<br />
                    <input type="text" name="names"></input> <br />
                    Attending:<br />
                    <input type="radio" name="attending" value="attendingYes" /> Yes 
                    <input type="radio" name="attending" value="attendingNo" /> No <br />
                    Do you need a hotel room?<br />
                    <input type="radio" name="hotel" value="hotelYes" /> Yes
                    <input type="radio" name="hotel" value="hotelNo" /> No <br />
                    Any Dietary Requirements?<br />
                    <input type="text" name="dietary"></input><br />
                    Song suggestions<br />
                    <input type="text" name="songs"></input><br />
                    Questions<br />
                    <input type="text" name="questions"></input><br />
                    <input type="submit" value="Submit"></input><br />
                </form>
            </div>
        )
    }
}

export default RSVPForm;