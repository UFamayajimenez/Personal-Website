import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pfp from './amaya_home.jpg';

const Home = () => {
    return (
        <body class="home">
            <div id="home">
                <div id="left-side">
                    <div id="title">
                        <h1>Hey, I'm Amaya Jimenez.</h1>
                    </div>
                    <div id="picture">
                        <img src={pfp} alt="picture of me!" height="400"/>
                    </div>
                </div>

                <div id="right-side">
                    <div id="description">
                        <p>Hello! 👋 Welcome to my website! Thanks for stopping by! 🙇🏽‍♀️ </p>
                        <p>Here you can find information about me, projects I've worked on, and my past work experience.</p>
                        <p> I am currently a 3rd year undergraduate student at the University of Florida studying computer science. 
                        When I'm not focusing on my own studies, I also work as a teaching assistant for University of Florida's Programming 1 course.
                        I've also had the opportunity to intern at both Slack and Amazon over the past two summers.</p>
                        <p>Currently, I have a liking for both frontend and backend development. The programming languages that I am most familiar with include Java, PHP/Hack, C++, JavaScript, and HTML/CSS.</p>
                        <p>Outside of work, I really love to listen to new music, attend concerts, and spend quality time with my friends.</p>
                    </div>
                </div>
                <div id="clear"></div>
        </div>
        </body>
    );
}

export default Home;