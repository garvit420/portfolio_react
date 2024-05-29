import React from "react";
import Experience from "./Experience";
import "./ProfessionalExperience.css";
import ub from "../../assets/Coding.svg";

const ProfesionalExperience = () => {
  return (
    <section className="proffesional-experience" id="experience">
      <h1>Professional <br></br> Experience</h1>
      <div className="experience-list">
        <Experience
          tagLine="Teaching Assistant"
          timeline="2024 - Present"
          workPlace="Bangalore, India"
          website="Scaler.com"
          description="Assigned to students for helping them in DSA and taking doubt sessions."
          skills={[
            "doubt solving",
            "teaching",
            "assistance",
            "Problem Solving",
          ]}
          logo={ub}
        />
      </div>
    </section>
  );
};

export default ProfesionalExperience;