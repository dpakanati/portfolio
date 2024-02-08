import React, {useState} from "react";
import Header from "../Header/Header";
import "./Home.css";
import About from "../About/About";
import HomeIntro from "./Intro";
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
        <div className = "container-fluid">
            <div className="h-70 bg-primary">
                <div className = "container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-9 bg-info">
                            <HomeIntro/>
                        </div>
                        <div className="col-3 bg-warning">
                            <img src = "src/assets/FullSizeRender.jpeg" className="w-100 h-100 custom_img " />


                        </div>

                    </div>
                </div>


            </div>
            <div className="h-30 bg-secondary">
                <h1>Section 2 - 30% viewport height</h1>
            </div>


        </div>
    );
};

export default  Home