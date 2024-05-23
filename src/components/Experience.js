import React from 'react';
// import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <div className="experience-item-info">
            <h3>Software Engineer @ Somon Global Ltd</h3>
            <span>Dhaka, Bangladesh <a href='saimonglobal.com'> saimonglobal.com </a> </span>
            <p>Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.</p>
            <span>Javascript Dart React NextJS Redux Flutter</span>
        </div>
        <div className="experience-item-img">
            <img src="saimon-global.png" alt="Saimon Global Ltd" />
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-item-info">
            <h3>Web Developer @ influenceTHIS Canada2018-2019</h3>
            <span>Remote (Toronto, Canada) <a href='saimonglobal.com'>influencethis.ca</a> </span>
            <p>Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.</p>
            <span>JS GULP SCSS Nodejs</span>
        </div>
        <div className="experience-item-img">
            <img src="influencethis.png" alt="influenceTHIS Canada" />
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-item-info">
            <h3>Top Rated Web Developer @ Upwork Inc. 2017 - Present</h3>
            <span>Dhaka, Bangladesh <a href='saimonglobal.com '>saimonglobal.com </a> </span>
            <p>Top-Rated developer on Upwork specializing in Front-end (React, WordPress) technologies with a 100% job success rate and client satisfaction rating (based on 150+ Jobs, 2500+ hours).</p>
            <span>Javascript Dart React NextJS Redux Flutter</span>
        </div>
        <div className="experience-item-img">
            <img src="upwork.png" alt="Upwork Inc." />
        </div>
      </div>

    </section>
  );
};

export default Experience;
