import React from 'react';
import '../Styles/Learning.css';

const learningItems = [
  {
    title: "Revived1.0: Portfolio",
    platform: "Personal Project",
    status: 'In Progress',
    link: "https://www.coursera.org/learn/machine-learning"
  },
  {
    title: "Health-labs1.0 : AI-Powered Health Chatbot",
    platform: "Personal Project",
    status: 'Building',
    link: "https://www.coursera.org/learn/machine-learning"
  },
  {
    title: "Machine Learning",
    platform: "Coursera",
    status: 'In Progress',
    link: "https://www.coursera.org/learn/machine-learning"
  },
  {
    title: "Full Stack MERN Development",
    platform: "Book",
    status: "Learning",
    link: '#'
  },
  {
    title: "CRUD App",
    platform: "Youtube",
    status: "Building",
    link: '#'
  },
  {
    title: "Designing Data Intensive Applications by Martin Kleppmann",
    platform: "Book",
    status: "Reading",
    link: '#'
  },
  {
    title: 'Clean Code by Robert C. Martin',
    platform: 'Book',
    status: 'Reading',
    link: '#'
  },
  {
    title: "Head First Design Patterns: Building Extensible and Maintainable Softwares",
    platform: "Book",
    status: "Reading",
    link: '#'
  },
  {
    title: "Computational Science Distilled by  Wladston Ferreira Filho",
    platform: "Book",
    status: "Reading",
    link: '#'
  },
  {
    title: "Mastering System Design",
    platform: "Online Article",
    status: "Learning",
    link: "https://blog.algomaster.io/p/30-system-design-concepts"
  },
];

const Learning = () => {
  return (
    <section className="learning-container">
      <div className="learning-intro">
        <h2> Learning Me </h2>
        <p>
          I’m currently learning and exploring the following topics. ....
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

