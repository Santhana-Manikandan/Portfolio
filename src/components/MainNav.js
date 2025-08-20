import {Link} from "react-router-dom";
import './layout/MainNav.css';
function MainNav(){
return (
    <div id="mySidenav" className="sidenav">
      <div className="logo-container">
        <img src= "/images/portfoli.png" alt="Logo" className="logo" />
      </div>

      <Link to="/" id="home">Home</Link>
      <Link to="/about" id="about">About</Link>
      <Link to="/project" id="projects">Projects</Link>
      <Link to="/contact" id="contact">Contact</Link>
    </div>
  );


}
export default MainNav;