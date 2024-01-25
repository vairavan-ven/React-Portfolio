// Contact.jsx
import React, { useState } from 'react';
import '../styling/contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
