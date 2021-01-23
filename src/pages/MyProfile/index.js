import React from 'react';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import Loader */
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

/* Import CSS */
import './styles.css';

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        
        return (
            <Consumer>
                {context => {
                    const { involved, toolsSkills, experience, loading, error } = context;
                    const currentJob = involved[this.state.currentIndex];
                    
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
                                Hi <span role="img" aria-label="hand">👋 </span> 
                                I'm Ricardo!!
                            </Header>

                            {/* MY PROFILE */}
                            <section className="myProfile">
                                <div className="myProfile-card">
                                    <div className="myProfile-card-title">title</div>
                                    <div className="myProfile-card-content">
                                        <p>
                                            I'm a frontend developer, I´ve been developing projects using React and 
                                            React Native also I have experience working with Python and Django. 
                                        </p>
                                    </div>
                                </div>

                                <div className="myProfile-card">
                                    <div className="myProfile-card-title">title</div>
                                    <div className="myProfile-card-content">content</div>
                                </div>
                            </section>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
};

export default MyProfile;
