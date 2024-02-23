function ContactMeForm() {
    return (
        <div className="pt-5">
            <h1 className="pb-3 text-start">Say Hello!</h1>
            <form action="mailto:your-email@example.com" method="post" encType="text/plain">
                <div className="mb-3">
                    <input type="text" placeholder="Name.." className="form-control" name="name"/>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email Address.." className="form-control" name="email"/>
                </div>
                <div className="mb-3">

                    <textarea className="form-control" placeholder="Type message.." name="message"></textarea>
                </div>
                <div className="text-start">
                    <button type="submit" className="btn btn-primary">Submit</button>

                </div>
            </form>
        </div>

    );
}

export default ContactMeForm;