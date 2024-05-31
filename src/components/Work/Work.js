import React from 'react';
import './Work.css'; 
import phone from '../../assets/phone.webm';

const Work = () => {
  return (
    <section className='Work'>
      <div className="My-work">
        <div className="work-text">
          <h1>My Work</h1>
          {/* <p>
            Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
            Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
          </p> */}
        </div>
        {/* <div className="work-media">
          <video className="project-video" autoPlay loop muted>
            <source src={phone} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="featured-project">
            <h2>Featured Project</h2>
            <h3>Tryotel App</h3>
            <button>View Project</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Work;
