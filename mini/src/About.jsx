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
        <span> Full Stack Developer passionate about building dynamic,  
scalable & user-friendly web applications.  
I work with the <span>Full Stack MERN ecosystem</span> and enjoy building intelligent systems using  
<span>AI, RAG pipelines & Dockerized deployments</span>.</span>.
        
        I completed a <span>Summer Internship at SoftPROSolutions</span> working
        on MERN-based projects.
        
        My goal is to learn, build, and grow into a professional full-stack  
developer while continuously exploring modern technologies and contributing  
to real-world impactful projects.
      </div>
    </section>
  );
};

export default About;
