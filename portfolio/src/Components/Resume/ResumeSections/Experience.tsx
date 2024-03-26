import "../../../Styles/Resume.css";

export function Experience() {
    return (
        <div>
            <h4 className="resume-title">Experience</h4>
            <div className="resume-item">
                <h4>Software Engineer
                    {/*add image here*/}

                </h4>
                <p className=""><em><b>Node Tek Technologies, </b><h5>08/2023 - Present</h5></em>
                    {/*<img className="ms-2" src="/portfolio/images/expand.gif" width="25" height="25"/>*/}

                </p>
                <p>
                    <ul>
                        <li>Created a Single Page Application (SPA) utilizing HTML5, CSS3, React, and Vite, enhancing
                            the web interface, resulting
                            in a 21% increase in mobile user engagement. Utilized React JS Router, Forms, Events,
                            States, Props, Hooks, and
                            Animations for application development.
                        </li>
                        <li>Spearheaded the integration of MongoDB, developing complex schemas and data services that
                            improved data accessibility,
                            resulting in a 25% increase in data retrieval speed and overall system performance.
                        </li>
                        <li>Developed server-side logic using NodeJS and Express Network, integrating middleware to
                            manage HTTP requests
                            effectively. Employed Express for Routing, cookie, and session management to ensure secure
                            HTTP requests.
                        </li>
                        <li>
                            Contributed to the design and implementation of Restful APIs and services for interacting
                            with the data storage layer.
                        </li>
                        <li>
                            Created reusable React components and functions, facilitating future page development.
                            Conducted unit testing using
                            Jasmine and Karma to ensure code quality and functionality.
                        </li>
                        <li>
                            Participated in daily stand-up meetings, collaborating with the QA team, and adhering to
                            Agile methodologies.
                        </li>
                    </ul>
                </p>
            </div>

            <div className="resume-item">
                <h4>Software Development Engineer Intern</h4>
                <p className=""><em><b>Brainovision, </b><h5>05/2020 - 12/2020</h5></em></p>
                <p>
                    <ul>
                        <li>Designed and developed UI modules using Bootstrap, ReactJS, Ajax, jQuery, CSS3, HTML5 to
                            enhance user experience
                            on web pages by reducing the bounce rate and made the page load 25 percent faster.
                        </li>
                        <li>Written application-level code to interact with REST APIs, Web Services using jQuery.</li>
                        <li>I collaborated closely with back-end developers using the Spring Framework to update and
                            enhance existing projects on
                            client’s website. Involved in various phases of SDLC.
                        </li>
                        <li>
                            Extensively used Spring MVC framework for dependency injections and integrated it with
                            Struts Framework and hibernate.
                        </li>
                        <li>
                            Used JDBC/Hibernate in persistence layer to interact with the database. Developed Hibernate
                            mapping files using
                            mapping strategies like table per class hierarchy.
                        </li>
                        <li>
                            Working knowledge in EC2 by creating snapshots, volumes, and security groups for public and
                            private instances.
                        </li>
                    </ul>
                </p>
            </div>

            <div className="resume-item ">
                <h4>System Engineer Intern</h4>
                <p className=""><em><b>Palni Inc, </b><h5>05/2019 - 12/2019</h5></em></p>
                <p>
                    <ul>
                        <li>Responsible for developing and maintaining enterprise customer service chatbots on Amazon
                            cloud platform – AWS Lex.
                            Operated as a Bot owner, I took charge of analyzing their logs and improving the efficiency
                            on weekly basis
                        </li>
                        <li>Contributed to developing chatbots with over 600 intents using Lex and Lambda Functions.
                        </li>
                        <li>Used microservice architecture with spring services interacting through a combination of
                            REST and Spring Boot.
                        </li>
                        <li>
                            Implemented a Spring MVC ticket-raising feature for facilitate seamless communication
                            between automated bot system
                            and customer support team. Reduced the live support engagement by more than 60% using smart
                            deflection.
                        </li>
                        <li>
                            Implemented JDBC based DAO layer to persist as well as retrieve the data in database by
                            mapping objects with relational
                            database table.
                        </li>
                    </ul>
                </p>
            </div>

        </div>
    );
}

export default Experience;