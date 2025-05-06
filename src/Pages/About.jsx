import React from 'react';
import '../Styles/About.css';
import profile from '../Assets/profilePic.png'; // Optional image of yourself

const About = () => {
  const techStack = [
     "HTML5", "CSS3", "JavaScript", "PHP", "Python", "MySQL", "MongoDB" 
  ];

  const frameworks = [
    "React", "Node.js", "Express.js", "Next.js"
 ];

  return (
    <section className="about-container">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p>
            I respond to Mitch. 
          </p>
          <p> 
              I’m a passionate learner currently exploring best practices and emerging trends in the tech industry. My interests lie in:
              System Design and building scalable web applications. 
          </p>

          <p>
            Machine Learning, with a focus on Computer Vision
            Healthcare Technology, where I aim to apply ML and CV for real-world impact
            I’m continuously growing, experimenting, and working toward becoming a well-rounded computer engineer who builds solutions that matter.
          </p>

          <h3 className="skills-heading"> Tech Stack </h3>
          <div className="skills-list">
            {techStack.map((stack, index) => (
              <span className="skill-framework-tag" key={index}>{stack}</span>
            ))}
          </div>

          <h3 className = "frameworks-heading"> Frameworks </h3>
          <div className = "frameworks-list">
            {frameworks.map((framework, index) => (
              <span className = "skill-framework-tag" key={index}>{framework}</span>
            ))}
          </div>
        </div>

        <div className="about-visuals">
          <img src={profile} alt="Mitch Profile" className="profile-img" />
          <div className="fun-facts">
            <p>🎵 Hip-hop head + tech enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

