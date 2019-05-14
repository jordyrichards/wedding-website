import React, { Component } from 'react';
import './OrderOfDay.css';

class OrderOfDay extends Component {
    render() {
        return(
            <div className="OrderOfDay">
                <div class="schedule">
                    <table class="orderTable">
                        <caption>Schedule</caption>
                            <tr>
                                <td>12:00</td>
                                <td>Arrival</td>
                            </tr>
                            <tr>
                                <td>12:30</td>
                                <td>Ceremony Seating</td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td>Wedding Ceremony</td>
                            </tr>
                            <tr>
                                <td>13:30</td>
                                <td>Celebratory Drinks and Canopes</td>
                            </tr>
                            <tr>
                                <td>14:00</td>
                                <td>Photos</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Wedding breakfast</td>
                            </tr>
                            <tr>
                                <td>17:00</td>
                                <td>Speeches</td>
                            </tr>
                            <tr>
                                <td>19:00</td>
                                <td>Evening guest arrival</td>
                            </tr>
                            <tr>
                                <td>20:30</td>
                                <td>Evening buffet</td>
                            </tr>
                            <tr>
                                <td>24:00</td>
                                <td>Last orders and taxis</td>
                            </tr>
                            </table>
                </div>
            </div>
        )
    }
}

export default OrderOfDay;