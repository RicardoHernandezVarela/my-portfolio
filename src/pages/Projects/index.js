import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Components */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

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
                    <div>
                        {/* HEADER */}
                        <Header>
                            <span role="img" aria-label="maletin">🧪 </span> 
                            Checkout my projects
                        </Header>

                        {/* MY PROJECTS LIST */}
                        <ProjectsList projectsList={projectsList}/>

                        {/* OTHER PROJECTS */}
                        <div className="my-github">
                            <h4 className="projects-footer">
                                Check other projects.
                            </h4>
                            <a href={logo.url} rel="external">
                                <img src={logo.img} alt="logo" />
                            </a>
                        </div>
                    </div>
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