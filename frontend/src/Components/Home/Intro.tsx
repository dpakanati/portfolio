import './Intro.css'
import {ReactTyped} from "react-typed";
export function HomeIntro(){
    const texts = ["Full Stack Developer","Android Developer","Software Engineer"];
    const intro  = "As a software engineer with a master's degree in computer science, I have a passion for problem solving and innovation. I have developed scalable web applications, designed efficient data structures and networking algorithms, and contributed to enterprise customer service chatbots on Amazon cloud platform.\n"
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">

            <h1>Dhanush Pakanati</h1>
            <div>
                <h4> {""}<ReactTyped strings={texts} typeSpeed={100} backSpeed={50} loop={true} /></h4>
            </div>
            <div>
                <p className="text-start ">{intro}</p>
            </div>


        </div>
    )
}
export default HomeIntro;