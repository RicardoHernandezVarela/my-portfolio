import React, { Fragment } from 'react';

/* Import CSS */
import './Home.css';

/* Profile info */
import { profile, jobs } from '../../info/info';

const Home = () => {
    return (
        <Fragment>
            <div className="about">
                <img src={profile.img} alt="rick" />
                <p>
                    {profile.about}
                </p>
            </div>
            
            <p className="looking">
                {profile.looking}
            </p>

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
            <h5 className="working-header">What I've been working on</h5>

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