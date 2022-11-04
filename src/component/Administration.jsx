import React from 'react';
import Heading from './Heading';
import StaffCard from './StaffCard';


function Administration(){
    const img = [{
        link:"../Images/staff/deepak.jpg",
        name:"Deepak Kr Sharma",
        post:"Head Teacher incharge",
        degree:"MA Eng. , B.Ed, SBTC"
    },{
        link:"../Images/staff/durga.jpg",
        name:"Durga",
        post:"Shikshamitra",
        degree:"B.A , DBTC"
    },{
        link:"../Images/staff/devender.jpg",
        name:"Devender Singh",
        post:"Assistant Teacher",
        degree:"B.Sc , BTC"
    },{
        link:"../Images/staff/ramlati.jpg",
        name:"Ramlati",
        post:"Cook",
        degree:""
    }]
    return(
        <div className="Administration">
            <Heading event="Administration"/>
            <div className="Staff-cards">
            {
                img.map((item,index)=>{
                    return <StaffCard img={item.link} name={item.name} position={item.post} degree={item.degree}/>
                })
            }
            </div>
        </div>
    )
}
export default Administration