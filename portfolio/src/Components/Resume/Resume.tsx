import "../../Styles/Resume.css";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import Summary from "./ResumeSections/Summary";
import Education from "./ResumeSections/Education";
import Experience from "./ResumeSections/Experience";
import Projects from "./ResumeSections/Projects";
import Skills from "./ResumeSections/Skills";

export function Resume() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: {duration: 1.0}
        });
    }, [controls]);


    return (
        <div className="container-fluid">
            <motion.div
                className="resume"
                id="resume"
                initial={{opacity: 0, y: 500}}
                animate={controls}
            >
                <div className="row">
                    <motion.div className="col-lg-6 text-start">
                        <Summary/>
                        <Education/>
                        <Projects/>
                    </motion.div>
                    <motion.div className="col-lg-6 text-start">
                        <Skills/>
                        <Experience/>

                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
}

export default Resume;
