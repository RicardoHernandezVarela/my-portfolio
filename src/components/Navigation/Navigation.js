import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/* Importar CSS */
import './Navigation.css';

/* Import routes */
import * as ROUTES from '../../constants/routes';

/* Import profile image */
import profileImg from '../../img/flower.jpg';

/* Profile info Bring from context then */
import { logos } from '../../info/info';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClass: "sidenav nav-show",
        };

        this.actualPath = '/';
    }

    handleShowNavbar = () =>  {
        const navbarState = this.state.navClass;
        navbarState === "sidenav nav-show" ?
            this.setState({navClass: "sidenav nav-hide"}):
            this.setState({navClass: "sidenav nav-show"});
    }

    componentDidUpdate() {
        let newPath = this.props.history.location.pathname;
        let actualPath = this.actualPath;
    
        if (actualPath !== newPath) {
            if (window.outerWidth < 768) {
                this.setState({navClass: "sidenav nav-hide"});
            }
        }

        this.actualPath = newPath;
    }

    render() {
        return (
            <Fragment>
                <span class="menu" onClick={this.handleShowNavbar}>
                    <i className="material-icons">menu</i>
                </span>

                <div className={this.state.navClass}>
                    <img className="sidenav-img" src={profileImg} alt="profile"/>
                    <h3>Ricardo Varela</h3>
                    <h5>Front-end developer</h5>
                    <ul className="navegacion">
                        <li>
                            <NavLink exact to={ROUTES.HOME}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.LEARNING}>Learning</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.TEACHING}>Teaching</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                        </li>
                    </ul>

                    <h5>Get in touch</h5>
                    <h5>Let's build something !!</h5>
                    <MultipleLogos logos={logos} />
                </div>
            </Fragment>

        );
    }
}

const MultipleLogos = (props) => {
    const logos = props.logos;
    return (
        <div className="contact-options">

            {logos.map((logo, index) => {
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