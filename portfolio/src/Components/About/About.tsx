import '../../Styles/About.css';
import {Link} from "react-router-dom";
import {AnimatePresence, easeIn, motion} from "framer-motion";

function About() {
    const para1 = "I'm a full-stack developer with a passion for building web applications and Android experiences.  But my thirst for knowledge extends beyond the screen. I'm an avid traveler, seeking inspiration and diverse experiences from every corner of the world. This adventurous spirit fuels my approach to software development as well."
    const para2 = "With a strong academic background (3.9 GPA!) from the University of Florida's Master's program, I've been fortunate to explore innovative learning paths, constantly expanding my skillset."
    const para3 = "With over two years of experience as a software engineer, I've had the privilege of working on diverse projects encompassing both mobile and web development. This experience, coupled with my academic background, " +
        "has equipped me with a robust skill set and a keen eye for detail. Alongside my professional endeavors, I've also dabbled in freelancing, seizing opportunities to expand my horizons and collaborate with clients from various domains."
    return (
        <AnimatePresence>
            <motion.div key="scrolling-text" initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1, transition: {duration: 1.0, ease: easeIn}}}>
                <div className="container-fluid mt-4 intro-height p-0">
                    <div className="container-fluid justify-content-center h-100">

                        <h1 className="main-title mb-3 text-start ">Hi!! I'm Dhanush Pakanati</h1>
                        <div className="row flex-column flex-sm-row">
                            <div className="col-sm">
                                <h5 className="text-start">Software Engineer with a passion to learn </h5>
                                {/*<p className="mb-3 d-flex align-items-center  "><span*/}
                                {/*    className="fw-bold display-5 me-2 ">2+ </span> years of*/}
                                {/*    professional experience..</p>*/}
                                <div className="d-flex align-items-center mt-sm-3">
                                    <span className="fw-bold display-2 me-2">2+ </span>
                                    <p className="text-start mb-0 mt-sm-2">years of professional experience..</p>
                                </div>


                            </div>
                            <div className="col-sm mt-3 mt-sm-0">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs?username=dpakanati&&hide_progress=true&size_weight=0.5&count_weight=0.5&locale=en&hide_title=false&card_width=320&langs_count=8&theme=github_dark&hide_border=false%22%20height=%22150%22%20alt=%22languages%20graph%22"
                                    className="img-fluid"/>
                            </div>
                        </div>


                        <div className="mt-4">
                            <p className="text-start ">
                                {para1}
                                <br/><br/>
                                {para2}
                                <br/><br/>
                                {para3}
                            </p>
                        </div>
                        <div className="d-flex justify-content-evenly about-buttons mt-3">
                            <Link to="/portfolio/contact" className="btn fw-bold  ">SEND ME A MESSAGE &rarr;</Link>
                            <Link to="/portfolio/resume" className="btn fw-bold ">CHECK OUT MY RESUME &darr;</Link>

                        </div>
                    </div>
                </div>

            </motion.div>
        </AnimatePresence>

    );
}

export default About;

{/*<h1 className="text-start">{""}<ReactTyped strings={["Hey, I'm Dhanush Pakanati"]} typeSpeed={100}*/
}
{/*                                           loop={false}/></h1>*/
}
