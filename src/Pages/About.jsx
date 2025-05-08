import React from 'react';
import '../Styles/About.css';
// importing profile picture
import profile from '../Assets/profilePic.png'; 

// creating an arrow function to hold the about page
const About = () => {
  //creating a dictionary of techstack. Could be updated anytime
  const techStack = [
     "HTML5", "CSS3", "JavaScript", "PHP", "Python", "MySQL", "MongoDB",

     "React", "Node.js", "Express.js", "Next.js", "Numpy", "Matplotlib", "Pandas", 

     "Vercel", "Git"

  ];

  //creaing a dictionary of frameworks
//   const frameworks = [
//     "React", "Node.js", "Express.js", "Next.js"
//  ];

  return (
    // the whole about container 
    <section className="about-container">
      <div className="about-grid">
        <div className="about">
          <div className = "persona">
            <h2 className="about-heading"> About Me </h2>
            <p>
              I respond to Mitch😎
            </p>
            <p> 
                I’m a learner currently exploring best global practices and emerging trends in the tech industry.
                Data modelling, system design and building scalable web applications.🚀
            </p>

            <p>
              Machine Learning, with a focus on Computer Vision
              Healthcare Technology, where I aim to apply ML and CV for real-world impact
              I’m continuously learning, working and growing toward becoming a well-rounded computer engineer who builds solutions that matter.✨
            </p>
          </div>
                   
          {/* <h3 className = "stack-heading"> Tech Stack </h3> */}
          <div className = "techstack-container">
            <h3 className = "stack-heading"> Tech Stack </h3>
            <div className="techstack-list">
              {techStack.map((stack, index) => (
                <span className="techstack-tag" key={index}>{stack}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="visuals">
          <img src={profile} alt="Mitch Profile" className="profile-img" />
          <div className="fun-facts">
            <p> 🙇 GodSpeed </p>
            <p> 🤖 tech enthusiast  </p>
            <p> 🎵 music head </p>
            <p> 🎹 pianist + 🥁drummer </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

