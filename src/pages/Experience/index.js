import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Components */
import Header from '../../components/Header';

/* Import CSS */
import './styles.css';

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
                        <div>
                            {/* HEADER */}
                            <Header>
                                <span role="img" aria-label="maletin">💼 </span> 
                                Work Experience
                            </Header>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Experience;
