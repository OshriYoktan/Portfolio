import './AppHeader.scss'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AppHeader = () => {
    return (
        <div className="app-header">
            <Link to="/"><div><h1></h1></div></Link>
            <ul className="links">
                <NavLink exact activeClassName="active" to='/'> <li>Home <div className="dot"></div></li></NavLink>
                <NavLink exact activeClassName="active" to='/portfolio'><li>Portfolio <div className="dot"></div></li></NavLink>
            </ul>
        </div>
    )

}
