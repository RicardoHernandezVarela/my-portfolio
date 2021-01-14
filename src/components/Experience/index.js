import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context/context';

/* Import CSS */
import './Experience.css';

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Consumer>
                {context => {
                    const { experience } = context;

                    return (
                        <div className="work-experience">
                            <h4>
                                <span role="img" aria-label="maletin">💼 </span> 
                                Work Experience.
                            </h4>
                            <hr></hr>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Experience;
