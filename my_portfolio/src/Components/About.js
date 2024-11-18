import React from 'react';
import Person from '../assets/Person.png'

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="about-container">
        <div className="about-image">
          <img 
            src={Person}
            alt="Your Profile"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          Hi, I'm Mohammed Haneef, an undergraduate student pursuing Artificial Intelligence and Data Science at Saveetha School of Engineering, graduating in 2025. As a passionate software developer, I specialize in React, Python, and web development. I focus on creating user-friendly web applications, data visualizations, and backend APIs. I am always eager to learn and implement new technologies to enhance the user experience and performance of the applications I build.
          </p>
          <p>
            Currently, I am working on several projects that combine my knowledge of front-end and back-end technologies. I'm also continuously exploring opportunities to develop new skills and contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
