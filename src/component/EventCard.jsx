import React,{useState} from 'react';


function EventCard() {
    const heading = ["gandhi jayanti","sports Day","Drawing Competition","Uniform Distribution","Har Ghar Trianga","Identiy Card Distribution","Teacher Day","Traffic Rules","Yog Diwas","Gyan Utsav"]

    return(
        <div className="event-cards">
        <div className="cards img1">
            <div className="cardHeading">
                <h3>{heading[1]}</h3>
            </div>
        </div>
        <div className="cards img2"><div className="cardHeading">
                <h3>{heading[3]}</h3>

            </div>
            </div>
        <div className="cards img3"><div className="cardHeading">
                <h3>{heading[4]}</h3>

            </div>
            </div>
        <div className="cards img4"><div className="cardHeading">
                <h3>{heading[5]}</h3>

            </div>
            </div>
        </div>
    )
    
    
}

export default EventCard;