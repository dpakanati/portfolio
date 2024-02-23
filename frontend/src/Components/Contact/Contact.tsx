import "./Contact.css";
import ContactMeForm from "./ContactMeForm";
import PersonalDetails from "./PersonalDetails/PersonalDetails";

function Contact() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={"col-md-6 pt-5"}>
                    <PersonalDetails/>
                </div>

                <div className={"col-md-6 pt-0"}>
                    <ContactMeForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact;