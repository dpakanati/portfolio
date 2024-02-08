import React from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom";
function Header(){
    return(
        <div className="container-fluid">
            <nav className = "navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a class = "navbar-brand" href = "/home">Dhanush Pakanati</a>
                    <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse"
                            data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false"
                            aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className = "collapse navbar-collapse justify-content-center" id = "navbarNav">
                            <ul className = "navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link me-3" activeClassName="active" exact to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-3" activeClassName="active" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-3" activeClassName="active" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-3" activeClassName="active" to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-3" activeClassName="active" to="/resume">Resume</NavLink>
                                </li>
                            </ul>

                    </div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">

                            <a className="nav-link me-3" href = "http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href = "http://www.github.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href = "mailto:dhanushpakanati@gmail.com" target="_blank" rel="noopener noreferrer">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z"/></svg>
                            </a>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    )
}
export default  Header