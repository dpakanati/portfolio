import ProjectCard from "./ProjectCard/ProjectCard";
import "../../Styles/Project Styles/Projects.css";
import "../../Styles/Intro.css";
import "../../Styles/Home.css";
import {AnimatePresence, easeIn, motion} from "framer-motion";
import {cardData} from "../../Utils/projectData";

export function Projects() {

    return (
        <AnimatePresence>
            <motion.div key="scrolling-text" initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1, transition: {duration: 1.0, ease: easeIn}}}>
                <div className="container-fluid h-100 ">
                    <span className="upper-semi-border mt-5"/>
                    <h1 className="text-start main-title heading-font">Find My Work Here</h1>
                    <h5 className="text-start mb-4">Dive in to discover the fruits of my labor and the intersection of
                        my
                        skills,
                        curiosity, and drive for excellence. </h5>

                    <ProjectCard cardData={cardData}/>

                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Projects;