import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
           <div id="content">
               <p>Here you can find the projects I am most proud of. 
            They are categorized as either personal or educational projects. Educational projects are those completed while attending the University of Florida.</p>

            <div id="project-content">
                <h2>Personal</h2>

                <h3>This Website ✨</h3>
                    <h3>Wheel Map ♿</h3>
                <h3>Kanye Slackbot 🎤</h3>
                <h2>Educational</h2>
                <h3>Heavenly Writing Horoscopes 🔮</h3>
            </div>
        </div>
    </div>
    );
}

export default Projects;