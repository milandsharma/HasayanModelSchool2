import React from 'react';
import {useNavigate} from "react-router-dom"

function Back(){
    const navigate = useNavigate()
    return(
        <div className="backbutton"><button onClick={()=>{
            return(navigate("/"))
        }}>back</button></div>
    )
}
export default Back