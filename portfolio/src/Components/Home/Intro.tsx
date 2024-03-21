import './Intro.css'
import {Link} from "react-router-dom";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {ReactTyped} from "react-typed";

export function HomeIntro() {
    const texts = ["Full Stack Developer", "Android Developer", "Software Engineer", "Data Science Enthusiast"];
    return (
        <div className="d-flex flex-column justify-content-center align-items-start h-100">
            <AnimatePresence>
                <motion.div key="scrolling-text" initial={{z: -100, x: -100, opacity: 0}}
                            animate={{z: 0, x: 0, opacity: 1, transition: {duration: 1.5, ease: easeInOut}}}>
                    <h1 className="main-title mb-3">Hi!! <br/>I'm Dhanush Pakanati</h1>
                    <h4 className="mb-4 scrolling-text">Software Engineer | Android Developer | Data Science
                        Enthusiast |
                        Full Stack Developer</h4>
                </motion.div>
            </AnimatePresence>
            <div>
                <p className="text-start mb-3"></p>
                {/*<button className="float-start btn p-0">Read More..</button>*/}
                <Link to="/portfolio/about" className="btn  p-0 mt-1 float-start">{""}<ReactTyped
                    strings={["Read More.."]}
                    typeSpeed={100}
                    loop={false}/></Link>
            </div>
        </div>
    )
}

export default HomeIntro;


{/*<h4 className="h4-typewriter"> {""}<ReactTyped strings={texts} typeSpeed={100} backSpeed={30}*/
}
{/*                                               loop={true}/></h4>*/
}