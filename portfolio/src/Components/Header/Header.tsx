import "../../Styles/Header.css"
import {NavLink} from 'react-router-dom';

function Header({onDarkModeToggle}) {
    return (
        <div className="container-fluid  mt-3 fixed-header">
            <nav className="navbar navbar-expand-lg ">
                <NavLink className="navbar-brand me-3" activeClassName="active" exact to="portfolio/home">
                    <h4>DP</h4>
                </NavLink>
                {/*this is a bootstrap button. to change animation for this edit this button*/}
                <button className="navbar-toggler ms-auto me-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" activeClassName="active" exact to="portfolio/home">
                                <h5>Home</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" activeClassName="active" to="portfolio/about">
                                <h5>About</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" activeClassName="active" to="portfolio/contact">
                                <h5>Contact</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" activeClassName="active"
                                     to="portfolio/projects"><h5>Projects</h5></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" activeClassName="active" to="portfolio/resume">
                                <h5>Resume</h5>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav link-items ">
                    <li className="nav-item">

                        <a className="nav-link me-3" href="https://www.linkedin.com/in/pdhanush/" target="_blank"
                           rel="noopener noreferrer">
                            <img src="/portfolio/images/linkedin_2504923.png" alt="linkedin" width="24" height="24"/>

                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="https://www.github.com" target="_blank"
                           rel="noopener noreferrer">
                            <img src="/portfolio/images/github_733553.png" alt="github" width="24" height="24"/>

                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="mailto:dhanushpakanati@gmail.com" target="_blank"
                           rel="noopener noreferrer">
                            <img src="/portfolio/images/email_552486.png" alt="email" width="24" height="24"/>

                        </a>
                    </li>
                </ul>


                <label className="switch">
                    <input type="checkbox" className="input__check" onChange={onDarkModeToggle}/>
                    <span className="slider"></span>
                </label>

            </nav>
        </div>
    )
}

export default Header