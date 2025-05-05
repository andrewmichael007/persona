
// src/pages/Contact.jsx
import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your full name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Type your message here..."></textarea>
        </div>

        <button className="send-button" disabled>Send Message</button>
        <p className="note">(Static for now — functional version coming soon!)</p>
      </div>
    </section>
  );
};

export default Contact;
