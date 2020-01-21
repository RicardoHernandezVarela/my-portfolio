import React from 'react';

/* Import CSS */
import './Projects.css';

/* Import projects */
import { projectsList } from '../../info/projects';

/* Import imgs */
const github = 'https://i.ibb.co/Y8p4Mgr/Git-Hub-Mark.png';
const site = 'https://i.ibb.co/6Z3PTvz/link.png';

const Projects = () => {
    return (
        <div className="projects">
            {projectsList.map((project, index) => {
                return (
                    <div key={index} className="project">
                        <span>{project.name}</span>
                        <img src={project.img} alt="GIF"/>
                        <p>{project.description}</p>
                        <StackList project={project}/>
                        <div>
                            <a href={project.repourl}>
                                <img src={github} alt="github"/>
                            </a>
                            <a href={project.site}>
                                <img src={site} alt="site"/>
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