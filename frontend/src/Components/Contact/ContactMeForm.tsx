function ContactMeForm(){
    return (
        <div className="p-5">
            <h1 className="pb-3">Say Hello</h1>
            <form action="mailto:your-email@example.com" method="post" encType="text/plain">
                <div className="mb-3">
                    <input type="text"  placeholder="Your Name" className="form-control" name="name"/>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email Address" className="form-control" name="email"/>
                </div>
                <div className="mb-3">

                    <textarea className="form-control" placeholder="Your message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>

    );
}
export default ContactMeForm;