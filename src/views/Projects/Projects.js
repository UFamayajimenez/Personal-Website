import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import wheelMap from './Wheel_map.jpeg';
import HW1 from './HW1.png';
import kanyeBot from './kanyeBot.png'


const Projects = () => {
    return (
        <body class="projectsPage">
        <div id="projects">
            <h1>Projects</h1>
           <div id="content">
               <p>Here you can find the projects I am most proud of. 
            They are categorized as either educational or personal projects. Educational projects are projects that were required for my coursework at the University of Florida.</p>
            <p>If you'd like information about any projects I've worked on at my internships at either Slack or Amazon, you can checkout my <a href="https://www.linkedin.com/in/amaya-jimenez15/"> LinkedIn</a>.</p>
            <div id="project-content">
            <h2>Educational</h2>
                <h3>Heavenly Writing Horoscopes 🔮</h3>

                <div id="project">
                    <img src={HW1} alt="Princess Sampson, Anton Panis, Kevin Villanueva, and Amaya Jimenez pictured" height="300"/>
                    <div id="project-description">
                        <p><a href="https://heavenly-writing-horoscopes.herokuapp.com/Home"> This website</a> was created during the 2020 spring semester alongside James Boultinghouse, Joshua Chan, and Logan Welsh for our Software Engineering course.</p>
                        <p>We developed a website that will email horoscopes to users. The admin of the website can also add and edit the horoscopes they want to send to certain users.</p>
                        <p>As the "SCRUM Master" it was my job to handle pull requests and to keep our repository organized. It was also my responsibility to lead our stand up and sprint retrospective meetings.
                        Finally, James and I were the two developers on the team focused on frontend development. The home page pictured above was both designed and developed by me.
                        </p>
                    </div>
                </div>
                
                <h2>Personal</h2>                
                <h3>Wheel Map ♿</h3>
                <div id="project">
                    <img src={wheelMap} alt="Princess Sampson, Anton Panis, Kevin Villanueva, and Amaya Jimenez pictured" height="300"/>
                    <div id="project-description">
                        <p>This project was completed alongside Princess Sampson, Anton Panis, and Kevin Villanueva over a span of 48 hours during a hackathon for Amazon interns.</p>
                        <p>We developed an Amazon Alexa Skill that can tell a user if a certain location is wheelchair accessible. At the end of the hackathon we won "People's Choice". </p>
                    </div>
                </div>
                <h3>Kanye Slackbot 🎤</h3>
                <div id="project">
                    <img src={kanyeBot} alt="Princess Sampson, Anton Panis, Kevin Villanueva, and Amaya Jimenez pictured" height="300"/>
                    <div id="project-description">
                        <p>This project is a Slackbot that sends a Kanye West quote whenever the word "Kanye" is sent in a Slack channel.</p>
                        <p>Although this project was on the simpler side, it was really fun testing the bot alongside friends and seeing the random quote return.</p>
                        <p>This project was my first experience working with JavaScript and Slack's Slackbot API.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    );
}

export default Projects;