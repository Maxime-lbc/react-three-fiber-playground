import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="Navigation">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/three-cubes-project">
                Three Cubes Project
            </NavLink>
        </div>
    );
}

export default Navigation;