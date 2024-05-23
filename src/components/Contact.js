import React from 'react';
// import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Available for select freelance opportunities</h2>
        <p>Have an exciting project you need help with? Send me an email or contact me via instant message!</p>
        <p><a href="mailto:garvitjain527@gmail.com">garvitjain527@gmail.com</a></p>
        <ul>
          <li><a href="https://messenger.com">Messenger</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://github.com">Github</a></li>
        </ul>
      </div>
      <div className="testimonials">
        <div className="testimonial">
            <img src="mark-green.jpg" alt="Mark Greenspan" />
            <p>
                Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he’s been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he’s provided us with great advice to stay on top of the current changes in web technologies. He’s also implemented effective project management and Q&A processes. As a result Tamal has been an highly valued and impactful member of our team.
            </p>
            <p>- Mark Greenspan, Founder at influenceTHIS Canada</p>
        </div>
        <div className="testimonial">
            <img src="wilfried-hajek.jpg" alt="Wilfried Hajek" />
            <p>
                Tamal is AMAZING! If you have any doubt about hiring him, ask me – I am really impressed by this guy!
            </p>
            <p>- Wilfried Hajek, Agile Coach | Speaker | Trainer</p>
        </div>
        <div className="testimonial">
            <img src="jonathan-castro.jpg" alt="Jonathan Castro" />
            <p>
                Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.
            </p>
            <p>- Jonathan Castro, CEO & Founder at The Cliff</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
