import ProjectCard from "./ProjectCard/ProjectCard";
import React from "react";
import "./Projects.css";
export function Projects(){
    const cardData = [
        {
            imageUrl: "/path/to/image1.jpg",
            title: "Card Title 1",
            text: "Some quick example text for Card 1",
        },
        {
            imageUrl: "/path/to/image2.jpg",
            title: "Card Title 2",
            text: "Some quick example text for Card 2.",
        },
        {
            imageUrl: "/path/to/image3.jpg",
            title: "Card Title 3",
            text: "Some quick example text for Card 3.",
        },
        {
            imageUrl: "/path/to/image4.jpg",
            title: "Card Title 4",
            text: "Some quick example text for Card 4.",
        },
        {
            imageUrl: "/path/to/image5.jpg",
            title: "Card Title 5",
            text: "Some quick example text for Card 5.",
        },
        {
            imageUrl: "/path/to/image6.jpg",
            title: "Card Title 6",
            text: "Some quick example text for Card 6.",
        },
    ];
    return(
        <div className="bg-primary h-100">
            <h2 className="text-start" >Portfolio</h2>
            {/*<h4 className="text-start">Welcome to my portfolio where innovation meets experimentation.</h4>*/}
            <h5 className="text-start">Dive in to discover the fruits of my labor and the intersection of my skills, curiosity, and  drive for excellence. </h5>
            <ProjectCard cardData = {cardData}/>
        </div>
    )
}
export default Projects;