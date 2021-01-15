import React, { Component, Fragment } from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Loader */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
        };
    }

    handleChangeImage = (imgsLength, next = false) => {
        let index = this.state.currentIndex;
        !next ? (index -= 1) : (index += 1);
    
        const newIndex = index === imgsLength ? 0 : Math.min(Math.max(index, 0), imgsLength - 1);

        this.setState({currentIndex: newIndex});
    };

    render() {
        
        return (
            <Consumer>
                {context => {
                    const { involved, toolsSkills, experience, loading, error } = context;
                    const currentJob = involved[this.state.currentIndex];
                    
                    if (error) {
                        return (
                            <Error error={error}/>
                        )
                    }

                    if (loading) {
                        return (
                            <Loader />
                        )
                    }

                    return (
                        <div className="mainContainer">
                            {/* HEADER */}
                            <Header>
                                Hi <span role="img" aria-label="hand">👋 </span> 
                                I'm Ricardo!!
                            </Header>

                            {/* PROFILE INFO */}
                            <section className="profile">
                                <p>
                                    I'm a frontend developer, I´ve been developing projects using React and 
                                    React Native also I have experience working with Python and Django. 
                                </p>
                                <p>I've been coding and teaching to code for a few years.</p> 

                                <div className="show-roles">
                                    <div>
                                        <i className="material-icons roles-left" onClick={() => this.handleChangeImage(involved.length)}>
                                            keyboard_arrow_left
                                        </i>
                                        <span className="roles-name">{currentJob.title}</span>
                                        <i className="material-icons roles-right" onClick={() => this.handleChangeImage(involved.length, true)}>
                                            keyboard_arrow_right
                                        </i>
                                    </div>
            
                                    <img src={currentJob.img} alt="currentJob"/>
                                </div>
                            </section>
                            
                            {/* MY TOOLBOX */}
                            <section className="my-tools">
                                <h2>Tools I have experience with</h2>
                                <Skills skills={toolsSkills}/>
                            </section>

                            {/* WORK EXAMPLES */}
                            <section className="working-on">
                                <h2>What I've been working on</h2>
                                <WorkExperience jobs={experience} />
                            </section>

                            {/* MY RESUME */}
                            <section className="resume">
                                <h2>Download my resume</h2>
                                <div>
                                    <a href="https://drive.google.com/open?id=161Z-LeKQlhlxf2KIQxESxDGIpHDxFq-Z">English</a>
                                    <a href="https://drive.google.com/open?id=1ZwfCnhXd-ciOBIHOB7r9Lr2I4CKW75c7">Spanish</a>
                                </div>
                            </section>
                        </div>
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
                        <h6 className="experience-period">{job.period}</h6> 
                    </div>
                );
            })
            }
        </div>
    );
};

export default About;