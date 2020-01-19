import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/* Importar CSS */
import './Navigation.css';

/* Importar rutas */
import * as ROUTES from '../../constants/routes';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClass: "nav-show",
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
        navbarState === "nav-show" ?
            this.setState({navClass: "nav-hide"}):
            this.setState({navClass: "nav-show"});
    }

    componentDidUpdate() {
        let newPath = this.props.history.location.pathname;
        let actualPath = this.actualPath;
    
        if (actualPath !== newPath) {
            if (window.outerWidth < 768) {
                this.setState({navClass: "nav-hide"});
            }
        }

        this.actualPath = newPath;
    }

    render() {
        return (
            <div className="nav-bar">
                <span onClick={this.handleShowNavbar}>
                    <i className="material-icons menu">menu</i>
                </span>
    
                <div className={this.state.navClass}>
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
            </div>
        );
    }
}

export default withRouter(Navigation);