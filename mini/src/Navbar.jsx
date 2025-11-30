import "./styles/Navbar.css";

const Navbar =() => {
 return (
    <nav className="navbar">
  <h3 className="logo">Akarsh.</h3>
  <ul className="nav-links">
    <li><a href="#home" className="active">HOME</a></li>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#skills">SKILLS</a></li>
    <li><a href="#contact">CONTACT</a></li>
  </ul>
</nav>

 );
};

export default Navbar;