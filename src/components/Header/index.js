import React from 'react';

/* Import CSS */
import './styles.css';

function Header(props) {
    return (
        <div className="header">
            <h4>{props.children}</h4>
        </div>
    );
}

export default Header;
