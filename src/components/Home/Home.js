import React, { Fragment } from 'react';

/* Import components */
import { Cards, MultipleLogos, Skills, Check } from './HomeComponents';

/* Import CSS */
import './Home.css';

/* Profile info */
import { profile, jobs, logos, toolsSkills } from '../../info/info';

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
                    <span>Tools</span>
                    <Skills skills={toolsSkills}/>
                </div>
                
            </div>

            <span className="cards-title">What I've been working on</span>
            <Cards jobs={jobs} />

            <Check>
                <p>{profile.checkout}</p>
            </Check>

            <div className="contact">
                <p>
                    {profile.contact}
                </p>
                <MultipleLogos logos={logos} />
            </div>
        </Fragment>
    );
}


export default Home;