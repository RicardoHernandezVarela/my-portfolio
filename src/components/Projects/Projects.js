import React from 'react';

/* Import CSS */
import './Projects.css';

/* Import projects */
import { projectsList } from '../../info/projects';

const Projects = () => {
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
    );
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