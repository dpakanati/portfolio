import './About.css';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import {ReactTyped} from "react-typed";
function About() {
    const para1 = "Welcome to my corner of the digital world. I'm a passionate computer engineer, holding a Master's degree from the University of Florida, specializing in Computer Science and Engineering."
    const para2 =  "At 24 years old, I'm fueled by a relentless thirst for knowledge and a genuine love for technology" +
        "I'm particularly drawn to the realms of mobile and web application development, where I've spent significant time honing my skills and crafting innovative solutions."

    const para3 = "With over two years of experience as a software engineer, I've had the privilege of working on diverse projects encompassing both mobile and web development. This experience, coupled with my academic background, " +
        "has equipped me with a robust skill set and a keen eye for detail. Alongside my professional endeavors, I've also dabbled in freelancing, seizing opportunities to expand my horizons and collaborate with clients from various domains."
    return (
    <div className="container-fluid mt-4 intro-height">
        <div className=" d-flex flex-column justify-content-center h-100">
            <h1 className="text-start">{""}<ReactTyped strings={["Hey, I'm Dhanush Pakanati"]} typeSpeed={100}  loop={false} /></h1>
            <h5 className="text-start">Software Engineer with a passion to learn </h5>
            <div className="mt-4 overflow-auto custom-scrollable" >
                <p className="text-start ">
                    {para1}
                    <br/><br/>
                    {para2}
                    <br/><br/>
                    {para3}
                </p>

            </div>
            <div className="d-flex justify-content-evenly about-buttons">
                <Link to="/contact" className="btn btn-primary mt-3">Send me a message</Link>
                <Link to="/contact" className="btn btn-primary mt-3">Resume</Link>
            </div>
        </div>
        <h1>sf</h1>
    </div>
  );
}
export default About;