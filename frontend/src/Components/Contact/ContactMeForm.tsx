function ContactMeForm(){
    return (
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    );
}
export default ContactMeForm;