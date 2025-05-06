import React from 'react';
import '../Styles/About.css';
// importing profile picture
import profile from '../Assets/profilePic.png'; 

// creating an arrow function to hold the about page
const About = () => {
  //creating a dictionary of techstack. Could be updated anytime
  const techStack = [
     "HTML5", "CSS3", "JavaScript", "PHP", "Python", "MySQL", "MongoDB" 
  ];

  //creaing a dictionary of frameworks
  const frameworks = [
    "React", "Node.js", "Express.js", "Next.js"
 ];

  return (
    // the whole about container 
    <section className="about-container">
{/*       //dividing the container into two  */}
      <div className="about-grid">

{/*         the left side of the container containing the about heading, paragraph, tech stack, frameworks and all */}
        <div className="about"> 
          <h2 className="about-heading"> About Me </h2>
          <p>
            I respond to Mitch😎
          </p>
          <p> 
              I’m a learner currently exploring best global practices and emerging trends in the tech industry.
              System Design and building scalable web applications.🚀
          </p>

          <p>
            Machine Learning, with a focus on Computer Vision
            Healthcare Technology, where I aim to apply ML and CV for real-world impact
            I’m continuously learning, working and growing toward becoming a well-rounded computer engineer who builds solutions that matter.✨
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
            <p> 🤖 tech enthusiast   + 🎵 music head </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

