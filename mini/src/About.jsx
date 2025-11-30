import "./styles/about.css";
import myPhoto from "./assets/q.jpg";

const About = () => {
  return (
    <section className="about" id="about">
  <h1 className="about-title">
  ABOUT <span className="highlight-me">ME</span>
</h1>


      <img src={myPhoto} alt="Akarsh Deva" className="about-photo" />

      <div className="about-box">
        Hello! I'm <span>Akarsh Deva</span>, a 
        <span> 3rd-year B.Tech IT student </span> passionate about building dynamic,
        scalable & user-friendly web apps.
        I work with the <span>MERN stack</span> and enjoy solving problems using 
        <span> Java & Data Structures and Algorithms</span>.
        
        I completed a <span>Summer Internship at SoftPROSolutions</span> working
        on MERN-based projects.
        
        My goal is to learn, build, and grow into a professional full-stack
        developer .
      </div>
    </section>
  );
};

export default About;
