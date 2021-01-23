import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Loader */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class About extends React.Component {
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
                        <div>
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

                                <div className="profile-roles">
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
                            
                            {/* WORK EXAMPLES */}
                            <section className="work-experience-container">
                                <h2>What I've been working on</h2>
                                <WorkExperience jobs={experience} />
                            </section>

                            {/* MY TOOLBOX */}
                            <section className="my-tools">
                                <h2>Tools I have experience with</h2>
                                <MyTools skills={toolsSkills}/>
                            </section>

                            {/* MY RESUME */}
                            {/* <section className="resume">
                                <h2>Download my resume</h2>
                                <div>
                                    <a href="https://drive.google.com/open?id=161Z-LeKQlhlxf2KIQxESxDGIpHDxFq-Z">English</a>
                                    <a href="https://drive.google.com/open?id=1ZwfCnhXd-ciOBIHOB7r9Lr2I4CKW75c7">Spanish</a>
                                </div>
                            </section> */}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

const MyTools = ({skills}) => {
    return (
        <div className="my-tools-list">
            {skills.map((skill, index) => {
                return (
                    <div className="my-tool" key={index}>
                        <img src={skill.img} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                );
            })}
        </div>
    )
};

const WorkExperience = ({jobs}) => {
    return (
        <div className="work-experience-list">
            {jobs.map((job, index) => {
                return (
                    <div className="work-experience" key={index}>
                        <img src={job.img} alt={`exp${index}`} />
                        <span>{job.title}</span>
                        <p>{job.description}</p>
                    </div>
                );
            })
            }
        </div>
    );
};

export default About;