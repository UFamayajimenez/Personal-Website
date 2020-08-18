import React from 'react';
import './Navbar.css';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-custom">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/About-Me">About me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Portfolio">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default NavBar;