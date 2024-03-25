import "./Contact.css"

function ContactMeForm() {
    return (
        <div className="pt-5">
            <h1 className="pb-3 text-start">Say Hello!</h1>
            <form action="https://formspree.io/f/mleqwqng" method="POST" encType="multipart/form-data">
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
                    <button type="submit" className="btn btn-primary">Submit</button>

                </div>
            </form>
        </div>

    );
}

export default ContactMeForm;