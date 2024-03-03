import "./Resume.css";
import Summary from "./ResumeSections/Summary";
import Education from "./ResumeSections/Education";
import Experience from "./ResumeSections/Experience";
import Projects from "./ResumeSections/Projects";
import Skills from "./ResumeSections/Skills";

export function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <div className="container resume" id="resume">
                <div className="row">
                    <div className="col-lg-6 text-start">
                        <Summary/>
                        <Education/>
                        <Projects/>
                    </div>
                    <div className="col-lg-6 text-start">
                        <Experience/>
                        <Skills/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;