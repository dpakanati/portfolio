import "../../Styles/Contact.css";
import ContactMeForm from "./ContactMeForm";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import {AnimatePresence, motion} from "framer-motion";

function Contact() {
    return (
        <div className="container-fluid">
            <AnimatePresence>
                <motion.div initial={{z: -400, x: 400, opacity: 1}}
                            animate={{z: 0, x: 0, opacity: 1, transition: {duration: 1.5}}}>
                    <div className="row">
                        <div className={"col-md-6 pt-5"}>
                            <PersonalDetails/>
                        </div>

                        <div className={"col-md-6 pt-0"}>
                            <ContactMeForm/>
                        </div>
                    </div>


                </motion.div>
            </AnimatePresence>

        </div>
    )
}

export default Contact;