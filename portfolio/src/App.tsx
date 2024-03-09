import './App.css'
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import React, {useEffect} from "react";
import Routing from "./Routing";

function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    return (
        <div>
            <Router>
                <Header onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}/>

                <Routing/>
            </Router>
        </div>

    );
}


export default App;
