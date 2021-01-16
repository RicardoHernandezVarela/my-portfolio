import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/* Import Context Consumer */
import { Consumer } from '../../context';

/* Import CSS */
import './styles.css';

/* Import routes */
import * as ROUTES from '../../constants/routes';

/* Import profile image */
import profileImg from '../../assets/img/drops.jpg';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navClass: "sidenav nav-show",
        };

        this.actualPath = '/';
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.outerWidth < 768) {
                this.setState({navClass: "sidenav nav-hide"});
            }
        });
    }

    componentDidUpdate() {
        let newPath = this.props.history.location.pathname;
        let actualPath = this.actualPath;
    
        if (actualPath !== newPath) {
            // SCROLL TO TOP
            window.scrollTo(0, 0);

            if (window.outerWidth < 768) {
                this.setState({navClass: "sidenav nav-hide"});
            }
        }

        this.actualPath = newPath;
    }

    handleShowNavbar = () =>  {
        const navbarState = this.state.navClass;
        this.setState({navClass: navbarState === "sidenav nav-show" ? "sidenav nav-hide" : "sidenav nav-show"});
    }

    render() {
        return (
            <Consumer>
                {context => {
                    const { contact } = context;

                    return (
                        <div>
                            {/* MENU BUTTON */}
                            <span className="menu" onClick={() => this.handleShowNavbar()}>
                                <i className="material-icons">menu</i>
                            </span>

                            {/* SIDENAV BAR */}
                            <div className={this.state.navClass}>
                                {/* SIDENAV IMG */}
                                <img className="sidenav-img" src={profileImg} alt="profile"/>

                                {/* SIDENAV TITLE */}
                                <h3>Ricardo Varela</h3>
                                <h5>Frontend developer</h5>

                                {/* SIDENAV OPTIONS */}
                                <ul className="sidenav-options">
                                    <li>
                                        <NavLink exact to={ROUTES.ABOUT}>About me</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to={ROUTES.WORK}>Experience</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTES.TEACHING}>Teaching</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                                    </li>
                                </ul>

                                {/* SIDENAV FOOTER */}
                                <h5>Get in touch</h5>
                                <h5>Let's build something !!</h5>

                                {/* CONTACT OPTIONS */}
                                {(contact !== undefined) && 
                                    <ContactOptions options={contact} />
                                }
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

const ContactOptions = ({options}) => {
    return (
        <div className="contact-options">

            {options.map((logo, index) => {
                return (
                    <a href={logo.url} key={index} rel="external">
                        <img src={logo.img} alt="logo" />
                    </a>
                );
            })
            }
        </div>
    );
};

export default withRouter(Navigation);