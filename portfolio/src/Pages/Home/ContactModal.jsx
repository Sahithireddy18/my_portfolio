import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './ContactModal.css'; 

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("process.env.REACT_APP_EMAILJS_SERVICE_I", process.env.REACT_APP_EMAILJS_SERVICE_ID)

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      alert('Email successfully sent!', result.text);
      onRequestClose();
    }, (error) => {
      console.error('Error sending email:', error.text);
    });

    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Contact Me"
    >
      <button className="modal-close-button" onClick={onRequestClose}>&times;</button>
      <h2 className="modal-header">Contact Me</h2>
      <p className="modal-text"> Please include your details to send an email.</p>
      
      <form className="modal-form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </Modal>
  );
};

export default ContactModal;
