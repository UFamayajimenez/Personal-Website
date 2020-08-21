import React from 'react';
import './Footer.css';
import github from './github.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';

const Footer = () => {
    return (
        <body class="footer">
    <div id="footer">
        <div id="row">
            <div id="column">
                <a href="https://github.com/UFamayajimenez">
                    <img src={github} height="30"/>
                </a>
            </div>
            <div id="column">
                <a href="mailto:amayanicolejimenez@gmail.com">
                    <img src={gmail} height="30"/>
                </a>
            </div>
            <div id="column">
                <a href="https://www.linkedin.com/in/amaya-jimenez15/">
                    <img src={linkedin} height="30"/>
                </a>
            </div>
            <div>
                
            </div>
        </div>
        <div id="row">
            <div id="attribute">
                <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
            </div>
        </div>
        </div>
        </body>
    );
}

export default Footer;