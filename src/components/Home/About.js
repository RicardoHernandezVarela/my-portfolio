import React, { Component, Fragment } from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context/context';

/* Import CSS */
import './About.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
            jobsSize: 4
        };
    }

    prevImage = () => {
        let index = this.state.currentIndex;
        index -= 1;

        (index <= 0) ?
            this.setState({currentIndex: 0}):
            this.setState({currentIndex: index});
    }

    nextImage = () => {
        let index = this.state.currentIndex;
        index += 1;

        let imgsLenght = this.state.jobsSize;

        (index >= imgsLenght) ?
            this.setState({currentIndex: imgsLenght-1}):
            this.setState({currentIndex: index});
    }

    render() {
        
        return (
            <Consumer>
                {context => {
                    const { involved, toolsSkills, experience } = context;
                    const currentJob = involved[this.state.currentIndex];

                    return (
                        <Fragment>
                            <div className="profile">
                                <h4>
                                    Hi <span role="img" aria-label="hand">👋</span> 
                                    I´m Ricardo!!
                                </h4>
                                <hr></hr>
                                <p>
                                    I´m a frontend web development student 
                                    loving my learning adventure with React. 
                                </p>
                                <p>I´ve been involved in coding for a few years.</p> 
            
                                {(currentJob !== undefined) &&
                                    <div className="show-roles">
                                        <div>
                                            <i className="material-icons roles-left" onClick={this.prevImage}>
                                                keyboard_arrow_left
                                            </i>
                                            <span className="roles-name">{currentJob.title}</span>
                                            <i className="material-icons roles-right" onClick={this.nextImage}>
                                                keyboard_arrow_right
                                            </i>
                                        </div>
                
                                        <img src={currentJob.img} alt=""/>
                                    </div>
                                }

                            </div>
            
                            <div className="my-tools">
                                <h2>Tools I´m using for my projects</h2>
                                {(toolsSkills !== undefined) &&
                                    <Skills skills={toolsSkills}/>
                                }
                            </div>
            
                            <div className="working-on">
                                <h2>What I´ve been working on</h2>
                                {(experience !== undefined) && 
                                    <WorkExperience jobs={experience} />
                                }
                            </div>
                        </Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

const Skills = (props) => {
    const skills = props.skills;

    return (
        <div className="tools-skills">
            {skills.map((skill, index) => {
                return (
                    <div className="skill-tech" key={index}>
                        <img src={skill.img} alt="react"/>
                        <h4>{skill.name}</h4>
                    </div>
                );
            })}
        </div>
    )
};

const WorkExperience = (props) => {
    const jobs = props.jobs;
    return (
        <div className="work-experience">

            {jobs.map((job, index) => {
                return (
                    <div className="experience" key={index}>
                        <img src={job.img} alt="rick" />
                        <span className="job-title">{job.title}</span>
                        <p>{job.description}</p>
                        <span className="experience-period">{job.period}</span> 
                    </div>
                );
            })
            }
        </div>
    );
};

export default About;