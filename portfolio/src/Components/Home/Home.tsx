import "./Home.css";
import HomeIntro from "./Intro";

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
                        <div className="col-3 ">
                            <img src="/portfolio/images/FullSizeRender.jpeg" className="w-100 h-100 custom_img "/>
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