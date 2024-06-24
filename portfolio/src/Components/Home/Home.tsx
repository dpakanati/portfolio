import "../../Styles/Home.css";
import HomeIntro from "./Intro";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {Tilt} from 'react-tilt'

const Home = () => {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    };
    return (

        <div className="container-fluid p-0">
            <div className="h-70 ">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-9 col-sm-12 ">
                            <HomeIntro/>
                        </div>
                        <div className="col-md-3 col-sm-12 mt-5 d-flex justify-content-center">
                            <AnimatePresence>
                                <motion.div initial={{x: 100, opacity: 0}}
                                            animate={{x: 0, opacity: 1, transition: {duration: 1.5, ease: easeInOut}}}
                                            exit={{x: 100, opacity: 0, transition: {duration: 1.5, ease: easeInOut}}}>
                                    <Tilt options={defaultOptions}>
                                        <div><img src="/portfolio/images/Frame2.png"
                                                  className="w-100 h-100 custom_img "/></div>
                                    </Tilt>
                                </motion.div>
                            </AnimatePresence>

                        </div>


                    </div>
                </div>


            </div>


        </div>
    );
};

export default Home