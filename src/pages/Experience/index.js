import React from 'react';
import { NavLink } from 'react-router-dom';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Components */
import Header from '../../components/Header';

/* Import CSS */
import './styles.css';

/* Import routes */
import * as ROUTES from '../../constants/routes';

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: [
                {
                    title: "Frontend developer at My-link corp.",
                    date: "March 2020 - December 2020",
                    text: "I worked developing the UI for a mobile app using React Native, I worked developing the UI for a mobile app using React Native, I worked developing the UI for a mobile app using React Native.",
                    rightText: "I connect the UI to the backend.",
                    img: "https://media-exp1.licdn.com/dms/image/C560BAQHuQmp7FiP0iQ/company-logo_200_200/0/1575416245477?e=2159024400&v=beta&t=U0h2mZi66AOVhHvycoOgH0uLpYoGqvEpom5nd0Ymckg",
                    topColor: '#B61B3C',
                    viewOptions: [
                        {
                            icon: "desktop_windows",
                            text: "site",
                            url: "https://my-link-2020.web.app/"
                        },
                        {
                            icon: "stay_current_portrait",
                            text: "app",
                            url: "https://t.co/3qSWUNfC9O?amp=1"
                        },
                    ],
                },
                {
                    title: "Developer at Lesath project.",
                    date: "February 2019 - January 2020",
                    text: "I worked developing the UI for a mobile app using React Native.",
                    img: "https://i.ibb.co/b2pQ98v/logo.png",
                    topColor: '#05547B',
                    viewOptions: [
                        {
                            icon: "desktop_windows",
                            text: "site",
                            url: "https://lesath.pythonanywhere.com/senales/"
                        },
                        {
                            icon: "code",
                            text: "repo",
                            url: "https://github.com/RicardoHernandezVarela/Lesath-Biosignals"
                        },
                    ],
                },
                {
                    title: "Reaserching automatic odor recognition.",
                    date: "September 2018 - October 2019",
                    text: "I worked developing the UI for a mobile app using React Native.",
                    img: "https://i.ibb.co/GdDc5Z2/inaoe.jpg",
                    topColor: '#1C6FC9',
                    viewOptions: [
                        {
                            icon: "desktop_windows",
                            text: "notebooks",
                            url: "https://notebooks.azure.com/RicardoVarela/downloadProjects?library=pruebas-de-aerekaprobe-con-ace"
                        },
                        {
                            icon: "code",
                            text: "repo",
                            url: "https://github.com/RicardoHernandezVarela/automatic-odor-recogniton-acetone"
                        },
                        {
                            icon: "code",
                            text: "repo",
                            url: "https://github.com/RicardoHernandezVarela/automatic-odor-recognition-beef-quality"
                        },
                    ],
                },
                {
                    title: "Teaching to code and robotics.",
                    date: "August 2015 - May 2018",
                    text: "I worked developing the UI for a mobile app using React Native.",
                    img: "https://i.ibb.co/HHFwXF2/imIf.jpg",
                    topColor: '#35A961',
                },
            ],
        };
    }

    render() {
        const {jobs} = this.state;

        return (
            <Consumer>
                {context => {
                    const { experience } = context;

                    return (
                        <div>
                            {/* HEADER */}
                            <Header>
                                <span role="img" aria-label="maletin">💼 </span> 
                                Work Experience
                            </Header>

                            {/* JOBS LIST */}
                            <div className="jobs-list">
                                {jobs.map((item, index) => (
                                    <div className="jobs-item" key={index}>
                                        {/* JOB IMAGE */}
                                        <div className="jobs-image-container">
                                            <img src={item.img} alt="jobImg"/>
                                        </div>

                                        {/* JOB HEADER*/}
                                        <div 
                                            className="jobs-item-header" 
                                            style={{backgroundColor: item.topColor}}>      
                                        </div>

                                        {/* JOB CONTENT */}
                                        <div className="jobs-item-content">
                                            <h5>{item.title}</h5>
                                            <h6>{item.date}</h6>

                                            <h4>{item.text}</h4>

                                            {/* JOB VIEW OPTIONS */}
                                            {item.viewOptions && (
                                                <ul className="job-view-options">
                                                    {item.viewOptions.map((item, index) => (
                                                        <li key={index}>
                                                            <a href={item.url}>
                                                                <i className="material-icons">
                                                                    {item.icon}
                                                                </i>
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {!item.viewOptions && (
                                                <ul className="job-view-options">
                                                    <li>
                                                        <NavLink exact to={ROUTES.TEACHING}>
                                                            <i className="material-icons">
                                                                menu_book
                                                            </i>
                                                            Class notes
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Experience;
