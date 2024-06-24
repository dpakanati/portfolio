import "../../Styles/Contact.css"
import {useForm} from "@formspree/react";

function ContactMeForm() {
    const [state, handleSubmit] = useForm("mleqwqng");

    return (
        <div className="pt-5">
            <h1 className="pb-3 text-start">Say Hello!</h1>
            {state.succeeded ? (
                <p>Thank you for reaching out!</p>
            ) : null}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <input type="text" placeholder="Name.." className="form-control" name="username"/>
                </div>
                <div className="mb-3 ">
                    <input type="email" placeholder="Email Address.." className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Type message.." rows="8" name="message"/>
                </div>
                <div className="text-start">
                    <button type="submit" disabled={state.submitting} className="btn btn-primary">Drop Me A Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactMeForm;