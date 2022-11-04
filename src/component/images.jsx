import react from 'react';

function Images(props){
    return(
        <div  className="eventImage">
        {props.array.map((item,index)=>{
            return(
                <div className="eventImageDiv">
                <img src={item} alt=""/>
                </div>
            )  
        })}
        </div>
    )
}
export default Images