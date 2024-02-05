import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
const Routing = () =>{
    return (
        <Routes>
            <Route path = "/" exact element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
    );
}
export default Routing;