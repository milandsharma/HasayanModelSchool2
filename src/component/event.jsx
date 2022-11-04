import React,{useState} from "react"
import Images from "./images"

function Event(props){
    const [count,setCount] = useState(0)
    const [state,setState] = useState(false)

   function handleClick(){
    setCount(count+1)
    if(count%2===0){
        setState(true)
        
    }else{
        setState(false)
    }
        
   }
    return(
        <div className="event">
        
        <div onClick={handleClick} className="eventHeading">
        <h1 >{props.heading}</h1>
        </div>
        {state && <Images array={props.array}/>}
        </div>
    )
}

export default Event