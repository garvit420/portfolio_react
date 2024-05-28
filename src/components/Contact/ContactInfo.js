import React from 'react';
import styles from './Contact.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Available for select freelance opportunities</h2>
      <p>Have an exciting project you need help with? <br></br>Send me an email or contact me via instant message!</p>
      <a href="mailto:tamal@tamalsen.dev" className={styles.email}>garvitjain527@gmail.com</a>
      <div className={styles.socialLinks}>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">Messenger</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  );
};

export default ContactInfo;
