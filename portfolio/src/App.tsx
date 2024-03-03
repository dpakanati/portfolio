import './App.css'
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Routing";
import React, {useEffect} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    return (
        <Router>
            <Header onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}/>
            {/*<div style={{paddingTop: '70px'}}> /!* Add padding to the top *!/*/}
            {/*    <Routing/>*/}
            {/*</div>*/}
            <Routing/>
        </Router>
    );
}


export default App;
