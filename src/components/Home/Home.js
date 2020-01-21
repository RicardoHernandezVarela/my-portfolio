import React, { Fragment } from 'react';

/* Import CSS */
import './Home.css';

/* Profile info */
import { profile, jobs } from '../../info/info';

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
                    <span>Skills</span>
                </div>
            </div>
            <span className="cards-title">What I've been working on</span>
            <Cards />
            <div className="invite">
                {profile.invite}
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
                    </div>
                );
            })
            }
        </div>
    );
}

export default Home;