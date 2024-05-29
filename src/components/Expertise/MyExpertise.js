import React from 'react';
import Expertise from './Expertise';
import './MyExpertise.css';
import Coding from "../../assets/Coding.svg";
import ReactIcon from "../../assets/React.svg";
import SpringBoot from "../../assets/SpringBoot.svg";

const MyExpertise = () => {
    const expertiseData = [
        {
          icon: Coding,
          title: "Software",
          highlight: "Development",
          description: "Experienced in both functional and OOP: Java, JavaScript. Familiar with Python and C++. Also, have experience in developing RESTful APIs."
        },
        {
          icon: ReactIcon,
          title: "Frontend Dev",
          highlight: "React",
          description: "Passionate about UI/UX. Experience in HTML, CSS, JS and React."
        },
        {
          icon: SpringBoot,
          title: "Backend Dev",
          highlight: "Spring Boot",
          description: "Experience in developing Backend projects using SpringBoot applying concepts of OOPs. Also, applying RESTful APIs."
        }
    ];
    
    return (
    <section id="expertise" className="my-expertise-section">
        <h1>My Expertise</h1>
        <div className="expertise-list">
        {expertiseData.map((expertise, index) => (
            <Expertise 
            key={index}
            icon={expertise.icon} 
            title={expertise.title} 
            highlight={expertise.highlight} 
            description={expertise.description} 
            />
        ))}
        </div>
    </section>
    );
};

export default MyExpertise;