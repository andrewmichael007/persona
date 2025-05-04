import React from 'react';
import '../Styles/Learning.css';

const learningItems = [
  {
    title: 'Machine Learning by Andrew Ng',
    platform: 'Coursera',
    status: 'In Progress',
    link: 'https://www.coursera.org/learn/machine-learning'
  },
  {
    title: 'Full Stack MERN Development',
    platform: 'Personal Project',
    status: 'Building',
    link: '#'
  },
  {
    title: 'Clean Code by Robert C. Martin',
    platform: 'Book',
    status: 'Reading',
    link: '#'
  },
  {
    title: 'CS50 - Harvard Intro to CS',
    platform: 'edX',
    status: 'Exploring',
    link: 'https://cs50.harvard.edu/x/'
  }
];

const Learning = () => {
  return (
    <section className="learning-container">
      <div className="learning-intro">
        <h2>What I'm Learning</h2>
        <p>
          I’m constantly evolving and pushing boundaries in both software and hardware. Below are some of the things I’m diving into right now —
          from online courses to hands-on projects and technical books.
        </p>
      </div>

      <div className="learning-cards">
        {learningItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="learning-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{item.title}</h3>
            <p className="platform">{item.platform}</p>
            <span className={`status ${item.status.toLowerCase().replace(" ", "-")}`}>
              {item.status}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Learning;

