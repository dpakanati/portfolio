import './App.css'
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import React, {useEffect} from "react";
import Routing from "./Routing";
import Footer from "./Components/Footer/Footer";

function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    return (
        <div className="app">
            <Router>
                <Header onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}/>
                <div className="flex-grow-1">
                    <Routing/>
                </div>

                {/*<Footer/>*/}
            </Router>
            <Footer/>

        </div>

    );
}


export default App;
