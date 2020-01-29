import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/* Importar CSS */
import './Navigation.css';

/* Importar rutas */
import * as ROUTES from '../../constants/routes';
import profileImg from '../../img/flower.jpg';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClass: "sidenav nav-show",
        };

        this.actualPath = '/';
        this.activeStyle = {
            fontWeight: "bold",
            color: "#80deea",
            fontSize: '1.1em',
        };
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
                            <NavLink exact activeStyle={this.activeStyle} to={ROUTES.HOME}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.PROJECTS}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.LEARNING}>Learning</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.TEACHING}>Teaching</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.CONTACT}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>

        );
    }
}

export default withRouter(Navigation);