import React from 'react';

/* Import CSS */
import './Contact.css';

/* Import email image */

const Contact = () => {
    return (
        <div className="contact">
           <img src="https://i.ibb.co/Fn15VLN/gmail.png" alt="email"/>
           <p>
                Want to get in touch? Whether you're interested in working on a project together or 
                just want to say hello, feel free to <a href="mailto:hernandez.varela.dev@gmail.com">email me <span role="img" aria-label="hand">📧</span> </a> 
                and I'll get back to you as soon as I can! You can also check out my social links in the footer 
                of the sidebar to get in touch that way.
           </p>
        </div>
    )
}

export default Contact;