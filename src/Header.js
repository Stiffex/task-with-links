import React from 'react';
import {NavLink} from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";

function Header(props) {
    return (
        <div className="header justify-content-between">
            <div className="name">Cover</div>
                <ul className="nav">
                    <li className="item">
                        <NavLink exact to="/" activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/features" activeClassName="selected">
                            Features
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/contact" activeClassName="selected">
                            Contact
                        </NavLink>
                    </li>
                </ul>
        </div>
    );
}

export default Header;