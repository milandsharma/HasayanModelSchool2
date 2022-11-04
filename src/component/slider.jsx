import React,{useState} from 'react';
import { Typewriter } from 'react-simple-typewriter'
 function Slider(){
    const [slider,setSlider] = useState({
        display: "none",
    });
    const [count,setCount] = useState(0);

    function changeSlider(){
       if(count%2===0){
        setSlider({display:"block"})
        setCount(count+1)
       }else{
        setSlider({display:"none"})
        setCount(count+1)
       }
    }


    return(
        <div className="sliderMain">
        <div className="sliderBar">
        <i onClick={changeSlider} class="fa-solid fa-bars"></i>
        <div  className="sliderList" style={slider}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>  
                <li><a href="#">Services</a></li>
            </ul>
        </div>
        </div>
        <div className="Name">
        <img src="../Images/logo.jpg" alt=""/>
        <div className="logo">
        <h1> Welcome to Model Primary School Hasayan No.1</h1>
        <p>Knowledge <span>
        <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['is power','is wealth','is strength']}
        />
        </span></p>
        </div>
        </div>
        </div>
    )
 }

export default Slider;