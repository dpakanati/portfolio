import "./Home.css";
import HomeIntro from "./Intro";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

const Home = () => {
    // const [showHeader, setShowHeader] = useState(true);
    // const [startY, setStartY] = useState(0);
    // const handleTouchStart = (e)=>{
    //     setStartY(e.touches[0].clientY);
    // };
    // const handleTouchMove = (e) =>{
    //     const currentY = e.touches[0].clientY;
    //     const deltaY = currentY - startY;
    //     if(deltaY>10){
    //         setShowHeader(true);
    //     } else if (deltaY< -10){
    //         setShowHeader(false);
    //     }
    // };
    return (
        <div className="container-fluid p-0">
            <div className="h-70 ">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-9 ">
                            <HomeIntro/>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <AnimatePresence>
                                <motion.div initial={{x: 100, opacity: 0}}
                                            animate={{x: 0, opacity: 1, transition: {duration: 1.5, ease: easeInOut}}}
                                            exit={{x: 100, opacity: 0, transition: {duration: 1.5, ease: easeInOut}}}>
                                    <img src="/portfolio/images/FullSizeRender.png"
                                         className="w-100 h-100 custom_img "/>
                                </motion.div>
                            </AnimatePresence>

                        </div>

                    </div>
                </div>


            </div>
            <div className="h-15 ">
                <h1>Site Under Development</h1>
            </div>


        </div>
    );
};

export default Home