import ProjectCard from "./ProjectCard/ProjectCard";
import "../../Styles/Project Styles/Projects.css";
import "../../Styles/Intro.css";
import "../../Styles/Home.css";


export function Projects() {
    const cardData = [
        {
            imageUrl: "/portfolio/images/goangular.png",
            title: "MyMovieList",
            text: "MyMovieList web application is a movie and show cataloguing web application where the users can use a list-like system to track and score movies and shows.",
            gitUrl: "https://github.com/dpakanati/MyMovieList",
        },
        {
            imageUrl: "/portfolio/images/bitcoin.jpeg",
            title: "Bitcoin Mining",
            text: "Some quick example text for Card 2.",
            gitUrl: "https://github.com/dpakanati/BitCoin-Mining",
        },
        {
            imageUrl: "/portfolio/images/climatechange.jpeg",
            title: "Climate Change Analysis",
            text: "Some quick example text for Card 3.",
            gitUrl: "https://github.com/dpakanati/Climate-Change-Project",
        },
        {
            imageUrl: "/portfolio/images/bittorrent.png",
            title: "Bit Torrent Protocol",
            text: "Some quick example text for Card 4.",
            gitUrl: "https://github.com/dpakanati/Bit-Torrent-Protocol",
        },
        {
            imageUrl: "path/to/image5.jpg",
            title: "Twitter Clone - Android Native",
            text: "An android application that imitates working of twitter including functionalities of login, registration, profile settings, add tweets with images, hashtags, follow users, search posts based on hashtags and user feed.",
            gitUrl: "https://github.com/dpakanati/Android-Projects/tree/main/TwitterClone",
        },
        {
            imageUrl: "path/to/image6.jpg",
            title: "Twitter Simulator - Actor Model in Erlang",
            text: "Some quick example text for Card 6.",
            gitUrl: "#",
        },
        {
            imageUrl: "/path/to/image6.jpg",
            title: "Running App - Android Native",
            text: "Some quick example text for Card 6.",
            gitUrl: "https://github.com/dpakanati/Android-Projects/tree/main/RunningApp",
        },
    ];
    return (
        <div className="container-fluid h-100 ">
            <span className="upper-semi-border mt-5"/>
            <h1 className="text-start main-title heading-font">Find My Work Here</h1>
            <h5 className="text-start mb-4">Dive in to discover the fruits of my labor and the intersection of my
                skills,
                curiosity, and drive for excellence. </h5>

            <ProjectCard cardData={cardData}/>
        </div>
    )
}

export default Projects;