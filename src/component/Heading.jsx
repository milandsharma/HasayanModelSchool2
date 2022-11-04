import React from 'react';


function Heading(props) {
    return(
        <div className="EventHeading">
            <h1 className="EventHeadingColor">{props.event}</h1>
            <h3><span><i class="fa-solid fa-grip-lines"></i></span> <i class="fa-solid fa-pen-ruler"></i><span><i class="fa-solid fa-grip-lines"></i></span></h3>
            </div>
    )
}

export default Heading;