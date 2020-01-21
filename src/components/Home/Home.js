import React, { Fragment } from 'react';

/* Import CSS */
import './Home.css';

/* Profile info */
import { profile, jobs, logos } from '../../info/info';

const Home = () => {
    return (
        <Fragment>
            <div className="about">
                <div className="intro">
                    <span>Hi!! I'm Ricardo</span>
                    <img src={profile.img} alt="rick" />
                    <p> 
                        {profile.about}
                    </p>
                </div>
                <div className="looking">
                    <p>
                        {profile.looking}
                    </p>
                </div>
                <div className="skills">
                    <span>Tools and Skills</span>
                    <img src={"https://facebook.github.io/react-native/img/header_logo.svg"} alt="react"/>
                </div>
            </div>
            <span className="cards-title">What I've been working on</span>
            <Cards />
            <div className="checkout">
                <p>{profile.checkout}</p>
            </div>
            <div className="contact">
                {profile.contact}
                <MultipleLogos source={logos} />
            </div>
        </Fragment>
    );
}

const Cards = () => {
    //jobs comes from info.js
    return (
        <div className="cards">

            {jobs.map((job, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={job.img} alt="rick" />
                        <span className="job-title">{job.title}</span>
                        
                        <p>{job.description}</p>
                        <span>{job.period}</span> 
                    </div>
                );
            })
            }
        </div>
    );
}

const MultipleLogos = (props) => {
    const logos = props.source;
    return (
        <div className="contact-logos">

            {logos.map((logo, index) => {
                return (
                    <a href={logo.url} key={index} rel="external">
                        <img src={logo.img} alt="logo" />
                    </a>
                );
            })
            }
        </div>
    );
}

export default Home;