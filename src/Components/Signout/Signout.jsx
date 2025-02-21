import React from 'react';
import { NavLink } from 'react-router-dom';

const Signout = () => {
    return (
        <div>
            <h1>signout</h1>
            <NavLink className="btn" to="/signin">Signin</NavLink>
        </div>
    );
};

export default Signout;