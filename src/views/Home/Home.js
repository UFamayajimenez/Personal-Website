import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pfp from './amaya_home.jpg';

const Home = () => {
    return (
        <div id="home">
            <div id="title">
                <h1>Hey, I'm Amaya.</h1>
                <img src={pfp} alt="picture of me!" height="400"/>

            </div>
        </div>
    );
}

export default Home;