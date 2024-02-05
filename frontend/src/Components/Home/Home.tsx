import React, {useState} from "react";
import Header from "../Header/Header";
import "./Home.css";
import About from "../About/About";
const Home = () =>{
    // const [showHeader, setShowHeader] = useState(true);
    // const [startY, setStartY] = useState(0);
    // const handleTouchStart = (e)=>{
    //     setStartY(e.touches[0].clientY);
    // };
    // const handleTouchMove = (e) =>{
    //     const currentY = e.touches[0].clientY;
    //     const deltaY = currentY - startY;
    //     if(deltaY>10){
    //         setShowHeader(true);
    //     } else if (deltaY< -10){
    //         setShowHeader(false);
    //     }
    // };
    return(
        <div className = "Home">

            <About/>

        </div>
    );
};

export default  Home