import React from "react"
import EventCard from "./EventCard"
import Heading from "./Heading"
import {useNavigate} from "react-router-dom"
function Events(){
const navigate = useNavigate()
    return (
        <div className="EventMain">
            <Heading event="Events"/>
            <div className="EventCards">
            <EventCard />
            </div>
            <div className="AllEvent">
                <button onClick={()=>{return (navigate("/events"))}}>View All event</button>
            </div>
        </div>
    )
}

export default Events;