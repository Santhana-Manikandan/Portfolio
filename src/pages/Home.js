import "./Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
  document.title = "Santhana | Home";
}, []);
  return (
    <div className="home-container">
      <div className="rainbow-bar-single"></div>

      <div className="hero">
        <div className="avatar-border">
          <img src="avataaars.png" alt="wink me" className="hero-me" />
        </div>
      </div>

      <div className="hero-container">
        <h1 className="home-title">
          <span className="typewriter-text">Hi, I'm Santhana</span>
          <span className="caret">|</span>
        </h1>
      </div>

      <p className="bio-text">
        Student Developer | Frontend Learner with Hands-on Experience | Friendly
        & Curious
      </p>

      <div className="button-group">
        <a href="/about" className="btn">
          About Me
        </a>
      </div>
    </div>
  );
}

export default Home;
