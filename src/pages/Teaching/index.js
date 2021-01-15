import React, { Component } from 'react';

/* Import Consumer Context */
import { Consumer } from '../../context';

/* Import Components */
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class Teaching extends Component {
    constructor() {
        super();

        this.state = {
            teachingResourcesInfo: [
                {
                    title: 'TUTORIALS',
                    status: true,
                },
                {
                    title: 'RESOURCES',
                    status: false,
                },
                {
                    title: 'CLASS NOTES',
                    status: false,
                },
            ],
        }
    }

    handleShowHideList = (index) => {
        const teachingResourcesInfo = this.state.teachingResourcesInfo;
        teachingResourcesInfo[index].status = !teachingResourcesInfo[index].status;

        this.setState({teachingResourcesInfo: teachingResourcesInfo});
    }

    render() {
        const {teachingResourcesInfo} = this.state;

        return (
            <Consumer>
                {context => {
                    const { tutorials, resources, notes, loading, error } = context;
                    const elementsData = [tutorials, resources, notes];
                    
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
                        <div className="teaching">
                            <h4>
                                <span role="img" aria-label="maletin">📚 </span> 
                                Here I share resources of courses I teach and also tutorials.
                            </h4>
                            <hr></hr>

                            {/* TUTORIALS, CLASS RESOURCES AND CLASS NOTES LISTS */}
                            {teachingResourcesInfo.map((item, index) => (
                                <TeachingComponent
                                    key={index}
                                    list={elementsData[index]}
                                    onClick={() => this.handleShowHideList(index)}
                                    title={item.title}
                                    status={item.status}
                                />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

const TeachingComponent = ({list, onClick, status, title}) => {
    return (
        <div className="content">
        <span 
            className={`show-button ${status ? 'show-button-active' : 'show-button-inactive'}`}
            onClick={onClick}
        >
            <i className="material-icons">code</i>
        </span>
        <span className="type">{title}</span>
        <TeachingResourcesList items={list} element={status} />
    </div>
    );
}

const TeachingResourcesList = ({items, element}) => {
    return (
        <ul className={element ? "show fadeIn": "hide"}> 
            {items.map((item, key) => {
                return (
                    <li key={key}>
                        <h5>{item.title}</h5>
                        <span>{item.topic}</span>
                        <p>{item.desc}</p>
                        <a href={item.link}>{item.action}</a>
                    </li>
                )
            })}
        </ul>
    );

}

export default Teaching;