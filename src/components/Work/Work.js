import React from 'react';
import './Work.css'; 
import phone from '../../assets/phone.webm';

const Work = () => {
  return (
    <section className='Work'>
      <div className="My-work">
        <div className="work-text">
          <h1>My Work</h1>
          <p>
            I have worked on a variety of projects from frontend to backend. Here are some of my works.
          </p>
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
