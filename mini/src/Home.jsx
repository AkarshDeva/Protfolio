import "./styles/Home.css";
import myPhoto from "./assets/q.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Home = () => {
  return (
      <div className="home">
        <div className="write">
            <h1>Hi, I'm Akarsh Deva</h1>
            <h3>MERN Developer & Java DSA Practitioner</h3>
           <p> I build web applications using the MERN stack and write efficient solutions
            using Java and Data Structures & Algorithms. I enjoy creating, solving
            problems, and growing as a developer every day.</p>
            <a href="/Resume.pdf" download className="resume-btn">
  Resume
</a>

             
                 <div className="socials">
                   <a
                     href="https://www.linkedin.com/in/akarsh-deva-ab894a2b6/"
                     target="_blank"
                     rel="noreferrer"
                     className="social-icon"
                   >
                     <FaLinkedin />
                   </a>
             
                   <a
                     href="https://github.com/AkarshDeva"
                     target="_blank"
                     rel="noreferrer"
                     className="social-icon"
                   >
                     <FaGithub />
                   </a>
             
                   <a
                     href="https://twitter.com/YOUR_USERNAME"
                     target="_blank"
                     rel="noreferrer"
                     className="social-icon"
                   >
                     <FaTwitter />
                   </a>
             
                   <a
                     href="https://leetcode.com/u/akarshdeva/"
                     target="_blank"
                     rel="noreferrer"
                     className="social-icon"
                   >
                     <SiLeetcode />
                   </a>
                 </div>
              
             
          
             
        </div>
       
            <div className="photo">
  <img src={myPhoto} alt="Akarsh Deva" />
</div>

      
      </div>
  );
};

export default Home;
