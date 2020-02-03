import React, { Fragment } from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context/context';

/* Import Loader */
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

/* Import CSS */
import './Projects.css';

const Projects = () => {
    return (
        <Consumer>
            {context => {
                const { projectsList, loading, contact, error } = context;
                const logo = contact[0];

                if (error) {
                    return (
                        <Error error={error}/>
                    )
                }

                if(loading) {
                    return (
                        <Loader />
                    )
                }

                return (
                    <Fragment>
                        <h4 className="projects-header">
                            <span role="img" aria-label="maletin">💼 </span> 
                            Checkout my projects.
                        </h4>
                        <hr className="projects-hr"></hr>
                        <ProjectsList projectsList={projectsList}/>

                        <h4 className="projects-footer">
                            Check other projects.
                        </h4>
                        <div className="contact-options my-github">
                            <a href={logo.url} rel="external">
                                <img src={logo.img} alt="logo" />
                            </a>
                        </div>
                    </Fragment>
                )
            }}
        </Consumer>
    );
}

const ProjectsList = (props) => {
    const projectsList = props.projectsList;

    return (
        <div className="projects">
            {projectsList.map((project, index) => {
                return (
                    <div key={index} className="project fadeInUp">
                        <span>{project.name}</span>
                        <img src={project.img} alt="GIF"/>
                        <p>{project.description}</p>
                        <StackList project={project}/>
                        <div>
                            <a href={project.repourl}>
                                Check repo
                            </a>
                            <a href={project.site}>
                                Visit site
                            </a>
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}

const StackList = (props) => {
    const stack = props.project.stack;
    return (
        
        <ul>
            {stack.map((tool, index) => {
                return (
                    <li key={index}>
                        {tool}
                    </li>
                );
            })}
        </ul>
    )
}

export default Projects;