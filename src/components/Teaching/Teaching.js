import React, { Component } from 'react';

/* Import Consumer Context */
import { Consumer } from '../../context/context';

/* Import Loader */
import Loader from '../Loader/Loader';

/* Import CSS */
import './Teaching.css';
import Error from '../Error/Error';

class Teaching extends Component {
    constructor() {
        super();

        this.state = {
            tutorials: false,
            resources: false,
            notes: false,
        }
    }

    handleClick = (elements) => {
        this.setState({[elements]: !this.state[elements]})
    }

    render() {
        return (
            <Consumer>
                {context => {
                    const { tutorials, resources, notes, loading, error } = context;
                    
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
                            <div className="content">
                                <span className="active-show" onClick={() => this.handleClick('tutorials')}>
                                    <i className="material-icons">code</i>
                                </span>
                                <span className="type">TUTORIALS</span>
                                <RenderList items={tutorials} element={this.state.tutorials} />
                            </div>
                            <div className="content">
                                <span className="active-show" onClick={() => this.handleClick('resources')}>
                                    <i className="material-icons">code</i>
                                </span>
                                <span className="type">RESOURCES</span>
                                <RenderList items={resources} element={this.state.resources} />
                            </div>
                            <div className="content">
                                <span className="active-show" onClick={() => this.handleClick('notes')}>
                                    <i className="material-icons">code</i>
                                </span>
                                <span className="type">CLASS NOTES</span>
                                <RenderList items={notes} element={this.state.notes} />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

const RenderList = (props) => {
    const items = props.items;

    return (
        <ul className={props.element ? "show fadeIn": "hide"}> 
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