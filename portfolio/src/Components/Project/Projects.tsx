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
            text: " Erlang's Actor Model to generate bitcoins by finding inputs that, when hashed using SHA-256, yield outputs with a specified number of leading zeros, maximizes multi-core machine utilization for scalable and efficient bitcoin production.",
            gitUrl: "https://github.com/dpakanati/BitCoin-Mining",
        },
        {
            imageUrl: "/portfolio/images/climatechange.jpeg",
            title: "Climate Change Analysis",
            text: "A full-stack web application that offers robust data cleaning using Pandas, intricate trend querying via SQL, and backend API development with Node.js. The frontend, built with React.js, utilizes Chart.js for effective trend visualization. Project provides a comprehensive platform for analyzing climate change data, enabling users to glean insights and visualize trends efficiently.",
            gitUrl: "https://github.com/dpakanati/Climate-Change-Project",
        },
        {
            imageUrl: "/portfolio/images/bittorrent.png",
            title: "Bit Torrent Protocol",
            text: "Some quick example text for Card 4.",
            gitUrl: "https://github.com/dpakanati/Bit-Torrent-Protocol",
        },
        {
            imageUrl: "/portfolio/images/twitter.jpg",
            title: "Twitter Clone - Android Native",
            text: "An android application that imitates working of twitter including functionalities of login, registration, profile settings, add tweets with images, hashtags, follow users, search posts based on hashtags and user feed.",
            gitUrl: "https://github.com/dpakanati/Android-Projects/tree/main/TwitterClone",
        },
        {
            imageUrl: "/portfolio/images/erlang_icon.jpg",
            title: "Twitter Simulator - Actor Model in Erlang",
            text: "The project involves building a Twitter Clone with a client tester/simulator in Erlang, featuring user registration, tweet functionalities (hashtags and mentions), subscriptions, re-tweets, and real-time tweet delivery. It integrates a WebSocket interface using WebSharper, redesigning the engine and client-side code, and implements a JSON API for message representation.",
            gitUrl: "#",
        },
        {
            imageUrl: "/path/to/image6.jpg",
            title: "Running App - Android Native",
            text: "The project entails developing a native Android application in Kotlin that enables users to track their runs. Users can initiate, pause, and stop runs, with the path taken displayed on a Google Map. The application stores data locally using Room database, allowing users to access their entire run history.",
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