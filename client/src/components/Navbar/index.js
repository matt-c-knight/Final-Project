import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="container">
            <ul>
                <li className="nav"><Link to="/contacts">Contacts</Link></li>
                <li className="nav"><Link to="/">Will</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;