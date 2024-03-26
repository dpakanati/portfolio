import "../../../Styles/Resume.css";

export function Education() {

    return (
        <div>
            <h4 className="resume-title">Education</h4>
            <div className="resume-item">
                <h4>Master of Science - Computer Science and Information Science

                </h4>
                <p className="mb-0"><em><b>University of Florida, </b></em><h5>2021-2023</h5> <h5>3.9 CGPA</h5>
                    <i className="arrow down "/>
                </p>

                <p className="always-collapse">Relevant Coursework: Analysis of Algorithms, Networks, Distributed
                    Systems,
                    Neural Networks,
                    DB Implementation, Software Engineering</p>

            </div>

            <div className="resume-item">
                <h4>Bachelor of Engineering - Computer Science and Engineering</h4>
                <p className="mb-0"><em><b>Osmania University, </b></em><h5>2017-2021</h5> <h5>8.1 CGPA</h5>
                    <i className="arrow down"/></p>
                <p className="always-collapse">Relevant Coursework: Artificial Intelligence, Machine Learning, Compiler
                    Design,
                    Discrete mathematics, IoT, Data Structures, Operating Systems,
                    DBMS, OOPs
                </p>
            </div>

        </div>
    );
}

export default Education;