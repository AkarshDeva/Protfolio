import React from "react";
import "./styles/Skills.css";


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        {/* Technical Skills */}
        <div className="skills-box">
          <h3 className="skill-heading">Technical Skills</h3>

          <div className="skill-bar"><span>Java</span><div className="progress-bar"><div style={{ width: "85%" }}></div></div></div>

          <div className="skill-bar"><span>JavaScript</span><div className="progress-bar"><div style={{ width: "80%" }}></div></div></div>

          <div className="skill-bar"><span>Node.js</span><div className="progress-bar"><div style={{ width: "75%" }}></div></div></div>

          <div className="skill-bar"><span>Express.js</span><div className="progress-bar"><div style={{ width: "70%" }}></div></div></div>

          <div className="skill-bar"><span>React.js</span><div className="progress-bar"><div style={{ width: "75%" }}></div></div></div>

          <div className="skill-bar"><span>Python</span><div className="progress-bar"><div style={{ width: "60%" }}></div></div></div>

          <div className="skill-bar"><span>HTML & CSS</span><div className="progress-bar"><div style={{ width: "85%" }}></div></div></div>
        </div>


        {/* Technologies & Domains */}
        <div className="skills-box">
          <h3 className="skill-heading">Technologies / Domains</h3>

          <div className="skill-bar"><span>Full Stack Web Development</span><div className="progress-bar"><div style={{ width: "90%" }}></div></div></div>

          <div className="skill-bar"><span>REST APIs</span><div className="progress-bar"><div style={{ width: "85%" }}></div></div></div>

          <div className="skill-bar"><span>Databases (MongoDB / MySQL)</span><div className="progress-bar"><div style={{ width: "75%" }}></div></div></div>

          <div className="skill-bar"><span>Data Structures & Algorithms (Java)</span><div className="progress-bar"><div style={{ width: "70%" }}></div></div></div>

          <div className="skill-bar"><span>Version Control (Git & GitHub)</span><div className="progress-bar"><div style={{ width: "85%" }}></div></div></div>

          <div className="skill-bar"><span>Deployment (Render / Vercel)</span><div className="progress-bar"><div style={{ width: "60%" }}></div></div></div>

          <div className="skill-bar"><span>VS Code </span><div className="progress-bar"><div style={{ width: "80%" }}></div></div></div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
