import React from 'react';
import '../Styles/About.css';
import profile from '../Assets/profilePic.png'; // Optional image of yourself

const About = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Python', 'C++',
    'Data Structures', 'Algorithms', 'Git'
  ];

  return (
    <section className="about-container">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p>
            I'm a Computer Engineering student with a passion for building innovative solutions
            to complex problems. My journey in technology started when I was young, and I've been
            exploring various aspects of software and hardware development since then.
          </p>
          <p>
            Currently focused on web technologies and embedded systems, I'm always looking to
            expand my knowledge and take on new challenges. When I'm not coding, you can find me
            participating in hackathons, contributing to open source, or exploring the latest tech trends.
          </p>
          <h3 className="skills-heading">Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="about-visuals">
          <img src={profile} alt="Mitch Profile" className="profile-img" />
          <div className="fun-facts">
            <p>🧩 Loves solving puzzles</p>
            <p>🎵 Hip-hop head + tech enthusiast</p>
            <p>🎥 Into videography & photography</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

