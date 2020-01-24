import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';


const Cards = (props) => {
    const jobs = props.jobs;
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
};

const MultipleLogos = (props) => {
    const logos = props.logos;
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
};

const Skills = (props) => {
    const skills = props.skills;

    return (
        <div className="tools-skills">
            {skills.map((skill, index) => {
                return (
                    <div className="skill-tech fadeInDown" key={index}>
                        <img src={skill.img} alt="react"/>
                        <h4>{skill.name}</h4>
                    </div>
                );
            })}
        </div>
    )
};

class CheckBase extends Component {

    handleClick = () => {
        this.props.history.push(ROUTES.PROJECTS);
    }

    render() {
        return (
            <div className="checkout" onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
};

const Check = withRouter(CheckBase);

export { Cards, MultipleLogos, Skills, Check };