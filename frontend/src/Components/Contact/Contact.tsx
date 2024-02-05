import Header from "../Header/Header";
import React from "react";
//import contact.css
import "./Contact.css";
import ContactMeForm from "./ContactMeForm";
function Contact(){
    return(
        <div className="container-fluid">

            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center custom-height">
                    <img src = "src/assets/dhanush.JPG" className="w-50 h-50 rounded-circle custom_img " />
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