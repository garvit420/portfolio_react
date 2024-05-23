import React from 'react';
// import './Expertise.css';

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <h2>My Expertise</h2>
      <div className="expertise-items">
        <div className="expertise-item">
          <h3>Software Development</h3>
          <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
        </div>
        <div className="expertise-item">
          <h3>Frontend Dev</h3>
          <p>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
        </div>
        <div className="expertise-item">
          <h3>Flutter Dev</h3>
          <p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
