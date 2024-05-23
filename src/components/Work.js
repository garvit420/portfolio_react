import React from 'react';
// import './Work.css';

const Work = () => {
  return (
    <section id="work" className="work">
      <h2>My Work</h2>
      <div className="work-items">
        <div className="work-item">
          <img src="tryotel-app.png" alt="Tryotel App" />
          <h3>Tryotel App</h3>
          <p>Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization..</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Work;
