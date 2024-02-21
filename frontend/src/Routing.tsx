import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Project/Projects";
const Routing = () =>{
    return (
        <Routes>
            <Route path = "/" exact element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/projects" element = {<Projects/>}/>
        </Routes>
    );
}
export default Routing;