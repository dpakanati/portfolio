import Header from "../Header/Header";
import React from "react";
//import contact.css
import "./Contact.css";
import ContactMeForm from "./ContactMeForm";
function Contact(){
    return(
        <div className="container-fluid">

            <div className="row">
                <div className="col-6">
                    <div className="d-flex justify-content-center align-items-center custom-height">
                        <img src = "src/assets/dhanush.JPG" className="w-50 h-50 rounded-circle custom_img " />
                    </div>
                    <div className="d-flex scrollable-cards">
                        <div className = "col-6">
                            <div className = "card m-2" style={{width: "18rem"}}>
                                <img src="src/assets/card1.jpg" className="card-img-top" alt="Card 1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card 1</h5>
                                    <p className="card-text">Some quick example text </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-6">
                            <div className = "card m-2" style={{width: "18rem"}}>
                                <img src="src/assets/card1.jpg" className="card-img-top" alt="Card 1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card 1</h5>
                                    <p className="card-text">Some quick example text </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-6">
                            <div className = "card m-2" style={{width: "18rem"}}>
                                <img src="src/assets/card1.jpg" className="card-img-top" alt="Card 1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card 1</h5>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-6">
                    <div>
                        <ContactMeForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;