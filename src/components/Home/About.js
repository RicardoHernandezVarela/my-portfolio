import React, { Component, Fragment } from 'react';

/* Import CSS */
import './About.css';

import { jobs, toolsSkills } from '../../info/info';

class About extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
            jobsSize: jobs.length
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
        const currentJob = jobs[this.state.currentIndex];

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
                </div>

                <h3>Tools</h3>
            </Fragment>
        )
    }
}

export default About;