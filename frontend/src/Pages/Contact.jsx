// src/pages/Contact.jsx
import React, { useState } from 'react';
//import axios  library to make http request to express
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import '../Styles/Contact.css';

// contact component uses useState Hook - helps to store and update form data and status
const Contact = () => {
  //handling form data states before the data is been sent
  // form - is a state value, setForm - updates the form state
  const [form, setForm] = useState({
    // set initial state values to empty strings
    name: '',
    email: '',
    message: '',
    recaptchaToken: ''
  });

  // handling the status of data
  const [status, setStatus] = useState({
    // status is a state value, setStatus updates the status
    submitting: false,
    submitted: false,
    msg: '',
    success: null
  });

  //handling changes
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ submitting: true });

    //handling recaptcha in the handling submit
    if(!form.recaptchaToken){
      setStatus({ success: false, submitted: true, msg: "complete the recaptcha"});
      return;
    };

    try {
      const res = await axios.post("http://localhost:8080/api/contact" , form);
      if (res.data.success) {
        setStatus({
          submitted: true,
          submitting: false,
          success: true,
          msg: res.data.msg
        });
        setForm({ name: '', email: '', message: '' }); // reset
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitted: true,
        submitting: false,
        success: false,
        msg: 'Something went wrong. Try again later.'
      });
    }
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            // placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            // placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message here..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <ReCAPTCHA
        className="my-custom-recaptcha"
        //this is the real site key
        sitekey="6LfT51UrAAAAAO7sBjRXfuHDnTRj8fwaAQNqk3nz"
        //onchange
        onChange={(token) => setForm(prev => ({ ...prev, recaptchaToken: token }))}

        onExpired={() => setForm(prev => ({ ...prev, recaptchaToken: '' }))}

        onLoad={() => console.log("recaptcha Loaded!")}  

        onError={() => console.log("recaptcha Error!")}    
            
        theme="dark"
        />

        <button 
        className="send-button" 
        type="submit" 
        disabled={status.submitting}
        > 
        {status.submitting ? 'Sending...' : "Send"}
        </button>

        {status.submitted && (
          <p className={status.success ? 'success-msg' : 'error-msg'}>
            {status.msg}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;