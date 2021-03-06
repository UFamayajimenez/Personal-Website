import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <body class="nav-stuff">
        <nav className="navbar navbar-expand-lg nav-custom">
        <a class="navbar-brand" href="/home">Amaya Jimenez</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="mailto:amayanicolejimenez@gmail.com">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
</body>
    );
}

export default NavBar;