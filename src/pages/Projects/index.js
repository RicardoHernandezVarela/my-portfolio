import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Components */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class Projects extends React.Component {
    render() {
        return (
            <Consumer>
                {context => {
                    const { projectsList, loading, contact, error } = context;
    
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
                            <div className="other-projects">
                                <h4>
                                    Check other projects.
                                </h4>
                                <a href={contact[0].url} rel="external">
                                    <img src={contact[0].img} alt="logo" />
                                </a>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

const ProjectsList = ({projectsList}) => {
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
                            {project.site && (
                                <a href={project.site}>
                                    Visit site
                                </a>
                            )}
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}

const StackList = ({project}) => {
    return (      
        <ul>
            {project.stack.map((tool, index) => {
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