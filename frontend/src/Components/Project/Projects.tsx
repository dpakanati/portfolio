import ProjectCard from "./ProjectCard/ProjectCard";
import React from "react";
import "./Projects.css";


export function Projects() {
    const cardData = [
        {
            imageUrl: "/assets/images/goangular.png",
            title: "MyMovieList",
            text: "MyMovieList web application is a movie and show cataloguing web application where the users can use a list-like system to track and score movies and shows.",
        },
        {
            imageUrl: "/assets/images/bitcoin.jpeg",
            title: "Bitcoin Mining",
            text: "Some quick example text for Card 2.",
        },
        {
            imageUrl: "/assets/images/climatechange.jpeg",
            title: "Climate Change Analysis",
            text: "Some quick example text for Card 3.",
        },
        {
            imageUrl: "/assets/images/bittorrent.png",
            title: "Bit Torrent Protocol",
            text: "Some quick example text for Card 4.",
        },
        {
            imageUrl: "/path/to/image5.jpg",
            title: "Twitter Clone - Android Native",
            text: "Some quick example text for Card 5.",
        },
        {
            imageUrl: "/path/to/image6.jpg",
            title: "Twitter Simulator - Actor Model in Erlang",
            text: "Some quick example text for Card 6.",
        },
        {
            imageUrl: "/path/to/image6.jpg",
            title: "Running App - Android Native",
            text: "Some quick example text for Card 6.",
        },
    ];
    return (
        <div className="container-fluid  h-100 ">
            <h2 className="text-start">Portfolio</h2>
            <h5 className="text-start">Dive in to discover the fruits of my labor and the intersection of my skills,
                curiosity, and drive for excellence. </h5>
            <ProjectCard cardData={cardData}/>
        </div>
    )
}

export default Projects;