import "./Contact.css";
import ContactMeForm from "./ContactMeForm";
function Contact(){
    return(
        <div className="container-fluid">
            <div className = "row justify-content-center">
                <div className={"col-md-6"}>
                    <ContactMeForm/>
                </div>
            </div>


            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <ProfilePics/>*/}

            {/*    </div>*/}


            {/*    <div className="col-6">*/}
            {/*        <div>*/}
            {/*            <ContactMeForm/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Contact;