import React from 'react';

/* Import Consumer Context */
import { Consumer } from '../../context';

/* Import Components */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class Teaching extends React.Component {
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
                        <div>
                            {/* HEADER */}
                            <Header>
                                <span role="img" aria-label="maletin">📚 </span> 
                                Teaching resources
                            </Header>

                            {/* TITLE */}
                            <div className="teaching-title">
                                <h4>
                                    Here I share resources from the courses I teach and also tutorials
                                </h4>
                            </div>

                            {/* TUTORIALS, CLASS RESOURCES AND CLASS NOTES LISTS */}
                            <div className="teaching-list">
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
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

const TeachingComponent = ({list, onClick, status, title}) => {
    return (
        <div className="teaching-component">
            <span 
                className={`show-button ${status ? 'show-button-active' : 'show-button-inactive'}`}
                onClick={onClick}
            >
                <i className="material-icons">code</i>
            </span>
            <span className="teaching-component-title">{title}</span>
            <TeachingResourcesList items={list} element={status} />
        </div>
    );
}

const TeachingResourcesList = ({items, element}) => {
    return (
        <ul className={element ? "show-resources-list fadeIn": "hide-resources-list"}> 
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