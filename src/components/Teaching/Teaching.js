import React, { Component } from 'react';

/* Import CSS */
import './Teaching.css';

/* Profile info */
import { teachingResources } from '../../info/projects';

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
        console.log(this.state[elements]);
        this.setState({[elements]: !this.state[elements]})
    }

    render() {
        return (
            <div className="teaching">
                <div className="content">
                    <span className="active-show" onClick={() => this.handleClick('tutorials')}>
                        <i class="material-icons">code</i>
                    </span>
                    <span className="type">TUTORIALS</span>
                    <RenderList items={teachingResources.tutorials} element={this.state.tutorials} />
                </div>
                <div className="content">
                    <span className="active-show" onClick={() => this.handleClick('resources')}>
                        <i class="material-icons">code</i>
                    </span>
                    <span className="type">RESOURCES</span>
                    <RenderList items={teachingResources.resources} element={this.state.resources} />
                </div>
                <div className="content">
                    <span className="active-show" onClick={() => this.handleClick('notes')}>
                        <i class="material-icons">code</i>
                    </span>
                    <span className="type">CLASS NOTES</span>
                    <RenderList items={teachingResources.notes} element={this.state.notes} />
                </div>
            </div>
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