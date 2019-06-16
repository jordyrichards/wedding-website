import React, { Component } from 'react';
import './RSVPForm.css';

class RSVPForm extends Component {
    render() {
        return(
            <div className="RSVP">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelhbQBmmXoOkxfX4S7Cb_74sRCAUZEyu7VNIQqn46bJ1ueNw/viewform?embedded=true" width="100%" height="1256" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
        )
    }
}

export default RSVPForm;