export function Experience() {
    return (
        <div>
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
                <h4>Software Engineer</h4>
                <p className=""><em><b>Node Tek Technologies, </b><h5>08/2023 - Present</h5></em></p>
                <p>
                    <ul>
                        <li>Employed MVVM app architecture to improve the application’s maintainability, extensibility,
                            and testing quality.
                        </li>
                        <li>Developed web views and list views to effectively display and present data utilizing
                            database and web apis to populate lists.
                        </li>
                        <li>Designed and implemented Async Tasks, services, and Alert Notification API to reduce delay
                            in fetching data from REST
                            API Services and provide consistent app alerts.
                        </li>
                        <li>
                            Optimized data presentation across multiple fragments &ViewModels with a shared Generic
                            Recycler View component.
                        </li>
                        <li>
                            Implemented navigation between the fragments using navigation graphs with xml. Created
                            modules, components, and
                            custom scopes using Dagger2 for loose coupling.
                        </li>
                        <li>
                            Implemented LiveData builder within MVVM architecture, integrating Kotlin Coroutines with
                            LiveData Coroutines
                            Asynchronous Flow for efficient handling of data updates and UI transitions.
                        </li>
                        <li>
                            Utilized Retrofit for seamless network communication, response parsing, efficient API calls
                            to REST endpoints.
                        </li>
                        <li>
                            Integrated application with Firebase (Firebase Analytics, Crashlytics, Firebase Performance
                            Monitoring) for user
                            authentication, information storage and enhance application performance and usability.
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

            <div className="resume-item">
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