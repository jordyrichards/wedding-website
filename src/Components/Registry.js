import React, { Component } from 'react';
import './Registry.css';

//Change the collage to have the date and venue written on either side of the picture
class Registry extends Component {
    render() {
        const registryItems = ['Wok', 'Side Tables', 'Oven Gloves', 'Wine Glasses', 'Tumblers', 'Champagne Flutes', 'Bread Bin', 'China Casserole Dish', 'A4 Picture Frames', 'Dinner Plates', 'Deer/Wolf Artwork']
        return(
            <div>
                <h2 className="smallTitle">Our Wedding Registry</h2>
                <div className="registerContent">
                <p className="content">For our wedding, we would prefer money towards our Honeymoon in lieu of a gift.</p>
                <p>However, if you would prefer to give a physical gift, the below are some examples of what we would like:</p>
                {registryItems.map(item => (
                    <p>- {item}</p>
                ))}
                <br />
                <p>And of course, if there's something not on this list that you'll think we'll love, by all means go for it!</p>
            </div>
            </div>
        )
    }
}

export default Registry;