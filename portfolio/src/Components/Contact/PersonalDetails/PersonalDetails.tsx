import {useEffect} from "react";
import MySocials from "./MySocials";

export function PersonalDetails() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div className="text-start">

            <h5 className="fw-bold mt-3">Contact me directly:</h5>


            {/*<div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark"*/}
            {/*     data-type="HORIZONTAL" data-vanity="pdhanush" data-version="v1"><a*/}
            {/*    className="badge-base__link LI-simple-link"*/}
            {/*    href="https://www.linkedin.com/in/pdhanush?trk=profile-badge"></a></div>*/}
            <p>
                <img className="me-1" src="/portfolio/images/email_552486.png" width="24"
                     height="24"/>
                dhanushpakanati@gmail.com <br/>

                <img className="me-1" src="/portfolio/images/telephone-call_3059606.png" width="24"
                     height="24"/>
                +1 (380)-213-7125
            </p>

            <p>Work location preference: Open to relocate</p>
            <p>I'm on Social:</p>
            <MySocials/>


        </div>
    )
}

export default PersonalDetails;