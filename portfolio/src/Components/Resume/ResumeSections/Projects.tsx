export function Projects() {
    return (
        <div>
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
                <h4>Twitter Engine Simulator using Actor Model</h4>
                <p className=""><em><b>University of Florida, </b><h5>Erlang</h5></em></p>
                <p>
                    <ul>
                        <li>A twitter engine built using Actor model that can simulate up to 50,000 parallel users
                            making tweets, retweets, hashtags,
                            and queries. Simulated a Zipf distribution on the number of subscribers.
                        </li>
                        <li>
                            Achieved CPU to Real-Time ratio of 12:1 by utilizing all the cores in the machine and
                            running actors on remote cores.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="resume-item">
                <h4>IoT Crop Suggestion</h4>
                <p className=""><em><b>Osmania University, </b><h5>KNN</h5> <h5>IoT</h5> <h5>Raspberry Pi</h5></em></p>
                <p>
                    <ul>
                        <li>Leveraged Internet of Things(IoT) devices and Raspberry Pi, geological location data with
                            real-time information gathered from sensors measuring soil moisture and pH scale.
                        </li>
                        <li>
                            A robust K-Nearest Neighbors (KNN) algorithm analyzes patterns
                            in the collected data. Farmers input their geographical
                            location, and the system processes this information along with sensor data to provide
                            personalized crop recommendations.

                            {/*The real-time data from soil sensors ensures accurate and dynamic recommendations, enabling*/}
                            {/*farmers to adapt to changing environmental factors and maximize crop yield.*/}
                        </li>
                    </ul>
                </p>
            </div>
            <div className="resume-item">
                <h4>RNN to predict the next four trading value of S&P500 data.</h4>
                <p className=""><em><b>University of Florida, </b><h5>Neural Networks</h5></em></p>
                <p>
                    <ul>
                        <li>Trained the RNN on a training set of S&P500 and tested it to ensure it functions correctly
                            when predicting the next 4 trading values.
                        </li>
                        <li>
                            Reported the statistics of prediction error - Mean, Standard deviation, Skewness
                            Optimized the RNN using a validation set and retrained the RNN. Reported the new prediction
                            error statistics Investigated the effect of input noise and uncertainty.
                        </li>
                        <li>
                            Induced noise with standard deviations of 0.001, 0.002, 0.003, 0.005, 0.01, 0.02, 0.03,
                            0.05, 0.1 and analyzed the new prediction error statistics.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="resume-item">
                <h4>My Movie List.</h4>
                <p className=""><em><b>University of Florida, </b><h5>Full Stack</h5></em></p>
                <p>
                    <ul>
                        <li>A movie and show catalog web application with functionalities to browse, raise discussions,
                            add data from the user and section management.
                        </li>
                        <li>
                            Worked in a team to implement back end using Golang and front end using Angular, Bootstrap,
                            Angular materials and MySQL for database using the features of software engineering.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="resume-item">
                <h4>Twitter Clone - Android Application.</h4>
                <p className=""><em><b>University of Florida, </b><h5>Android Native</h5></em></p>
                <p>
                    <ul>
                        <li>An android application that imitates working of twitter including functionalities of login,
                            registration, profile settings, add tweets with images, hashtags, follow users, search posts
                            based on hashtags and user feed.
                        </li>
                        <li>
                            Built Linear, Relative and Constraint layouts with multiple fragments and activities.
                            Integrated fragments into activity using ViewPager2. Populated posts from the firebase using
                            Recycler Views.
                        </li>
                        <li>
                            Used MVVM architecture with principles of LiveData to observe changes and update views. Used
                            Dagger hilt for dependency injection and Retrofit as Http Client to consume RESTful APIs in
                            the application.
                        </li>
                        <li>
                            Implemented authentication and user login using Firebase authentication. Stored User and
                            Tweet collection in Firebase Database along with Firebase Storage to store user generated
                            content(Images).
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Projects;