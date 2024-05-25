import React from 'react';
import './Home.css';
import TypingAnimation from '../../hooks/TypingAnimation';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <h1 className='name'>GARVIT J.</h1>
        <p className='name-info'>
          <TypingAnimation
            className="name-info-text" 
            text = "SOFTWARE ENGINEER, FRONT END & APP DEVELOPER."
          />
        </p>
      </div>
    </section>
  );
};

export default Home;
