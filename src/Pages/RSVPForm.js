import React, { Component } from 'react';
import './RSVPForm.css';

class RSVPForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          attending: '',
          room: '',
          diet: '',
          song: '',
          other: '',
          mailSent: false,
          error: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="Venue">
            <div className="formContainer">
                <form>
                    Name(s):<br />
                    <input type="text" name="names" placeholder="Enter names here..."
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}></input> <br /> <br />
                    Attending:<br />
                    <input type="radio" name="attending" onChange={ () => this.setState({attending: 'yes'})} /> Yes 
                    <input type="radio" name="attending" onChange={() => this.setState({attending: 'no'})}/> No <br /> <br />
                    Do you need a hotel room? (£80 per room)<br />
                    <p class="smallFont">*Note, rooms at the venue are limited so aren't guaranteed. However if we are oversubscribed we will help source an alternative</p>
                    <input type="radio" name="hotel" onChange={() => this.setState({room: 'yes'})}/> Yes
                    <input type="radio" name="hotel" onChange={() => this.setState({room: 'no'})}/> No <br /> <br />
                    Any Dietary Requirements? (Vegetarian / Vegan / Allergies)<br />
                    <input type="text" name="dietary" onChange={e => this.setState({diet: e.target.value})}></input><br /><br />
                    Disco song suggestion<br />
                    <input type="text" name="songs" onChange={e => this.setState({song: e.target.value})}></input><br /><br />
                    Any other questions<br />
                    <input type="text" name="questions" onChange={e => this.setState({other: e.target.value})}></input><br /><br />
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"></input><br />
                </form>
                </div>
            </div>
        )
    }
}

export default RSVPForm;