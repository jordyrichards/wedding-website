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
                <p className="normalContent">During the evening the same dress code applies. However fursuits are also encouraged after the reception has started proper</p>
                <p className="subtitleInfo">Directions</p>
                <p className="normalContent">Driving: The Hotel is located just off of Junction 17 on the M4, take the exit towards Malmesbury and then take the first left towards Stanton St Quinin. There is ample parking at the venue for all guests</p>
                <p className="normalContent">Public transport: The closest train station is in Chippenham, from there is approximately a 10 minute taxi ride to the venue.</p>
                <p className="subtitleInfo">Closest alternative Hotels</p>
                <p className="normalContent"><a href="https://www.booking.com/hotel/gb/the-bell-house-sutton-benger.en-gb.html?aid=389182;label=metagha-link-mapresultsGB-hotel-2203380_dev-desktop_los-1_bw-2_dow-Tuesday_defdate-1_room-0_lang-en_curr-GBP_gstadt-2_rateid-0_aud-102524934_cid-68;sid=ce1bb7bb5be470a149401ff95e20744c;all_sr_blocks=220338002_101520147_0_2_0;checkin=2019-06-18;checkout=2019-06-19;dest_id=-2609162;dest_type=city;dist=0;group_adults=2;hapos=1;highlighted_blocks=220338002_101520147_0_2_0;hpos=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1560688924;srpvid=b256594e20ba0068;type=total;ucfs=1&#hotelTmpl">The Bell House</a></p>
                <p className="normalContent"><a href="https://uk.hotels.com/ho450769/?q-check-out=2019-06-19&FPQ=2&q-check-in=2019-06-18&WOE=3&WOD=2&q-room-0-children=0&pa=1&tab=description&JHR=1&q-room-0-adults=2&YGF=2&MGT=1&ZSX=0&SYE=3">The Bear Hotel</a></p>
                <p className="normalContent"><a href="https://www.booking.com/hotel/gb/the-pines-guest-accommodation.en-gb.html?aid=389182;label=metagha-link-mapresultsGB-hotel-882198_dev-desktop_los-1_bw-2_dow-Tuesday_defdate-1_room-0_lang-en_curr-GBP_gstadt-2_rateid-0_aud-102524934_cid-68;sid=ce1bb7bb5be470a149401ff95e20744c;all_sr_blocks=88219804_90590851_0_34_0;checkin=2019-06-18;checkout=2019-06-19;dest_id=-2592462;dest_type=city;dist=0;fcpilot=0;group_adults=2;hapos=1;highlighted_blocks=88219804_90590851_0_34_0;hpos=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1560688938;srpvid=b72a5954ff6c004c;type=total;ucfs=1&#hotelTmpl">The Pines Guest Accomodation</a></p>
                <p className="normalContent"><a href="https://uk.hotels.com/ho440040/?q-check-out=2019-06-19&FPQ=2&q-check-in=2019-06-18&WOE=3&WOD=2&q-room-0-children=0&pa=1&tab=description&JHR=1&q-room-0-adults=2&YGF=2&MGT=1&ZSX=0&SYE=3">The Foxham Inn</a></p>
                <p className="subtitleInfo">Any extra info</p>
                <p className="normalContent">Hopefully this answers any burning questions you have about the day. If not though, please give me a call (07951934823) or ping an email to jordyrichards@gmail.com and hopefully I can help!</p>
            </div>
        )
    }
}

export default ExtraInfo;