import React from "react";

function StaffCard(props){
    return(
        <div className="Staff-card">
            <div className="Staff-card-image">
                <img src={props.img} alt=""/>
            </div>
            <div className="Staff-card-content">
                <h3>{props.name}</h3>
                <p>{props.position}</p>
                <p>{props.degree}</p>

            </div>
        </div>
    )
}

export default StaffCard