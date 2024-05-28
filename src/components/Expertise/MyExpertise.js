import React from 'react';
import Expertise from './Expertise';
import './MyExpertise.css';
import Coding from "../../assets/Coding.svg";
import ReactIcon from "../../assets/React.svg";
import SpringBoot from "../../assets/SpringBoot.svg";

const MyExpertise = () => {
  return (
    <section id="expertise" className="my-expertise-section">
      <h1>My Expertise</h1>
      <div className="expertise-list">
        <Expertise 
          icon= {Coding} 
          title="Software" 
          highlight="Development" 
          description="Experienced in both functional and OOP: Java, JavaScript. Familiar with Python and C++. Also, have experience in developing RESTful APIs." 
        />
        <Expertise 
          icon={ReactIcon} 
          title="Frontend Dev" 
          highlight="React" 
          description="Passionate about UI/UX. Experience in HTML, CSS, JS and React." 
        />
        <Expertise 
          icon={SpringBoot}
          title="Backend Dev" 
          highlight="Spring Boot" 
          description="Experience in developing Backend projects using SpringBoot applying concepts of OOPs. Also, applying RESTful APIs. " 
        />
      </div>
    </section>
  );
};

export default MyExpertise;