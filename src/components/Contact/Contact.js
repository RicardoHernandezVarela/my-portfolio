import React from 'react';

/* Import CSS */
import './Contact.css';

/* Import email image */

const Contact = () => {
    return (
        <div className="contact">
           <img src="https://i.ibb.co/Fn15VLN/gmail.png" alt="email"/>
           <p>
                If you're interested in working on a project together or want to ask anything, 
                feel free to <a href="mailto:hernandez.varela.dev@gmail.com">email me <span role="img" aria-label="correo">📧</span> </a> 
                and I'll get back to you as soon as I can! Check out my social links in the sidebar so you can reach me that way too.
           </p>
        </div>
    )
}

export default Contact;