import "./About.css";
import { FaArrowDown } from "react-icons/fa";
import { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";



function About() {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
  document.title = "Santhana | About";
}, []);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    Language: [
      {
        name: "HTML",
        img: "https://img.icons8.com/?size=100&id=20909&format=png",
      },
      {
        name: "CSS",
        img: "https://img.icons8.com/?size=100&id=21278&format=png",
      },
      {
        name: "JavaScript",
        img: "https://img.icons8.com/?size=100&id=108784&format=png",
      },
      {
        name: "C",
        img: "https://img.icons8.com/?size=100&id=40670&format=png",
      },
      {
        name: "C++",
        img: "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png",
      },
      {
        name: "Python",
        img: "https://img.icons8.com/?size=100&id=13441&format=png",
      },
      {
        name: "Java",
        img: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png",
      },
    ],
    Databases: [
      {
        name: "MySQL",
        img: "https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png",
      },
    ],
    Frameworks: [
      {
        name: "React",
        img: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png",
      },
    ],
    Technologies: [
      {
        name: "VSCode",
        img: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png",
      },
      {
        name: "Git",
        img: "https://img.icons8.com/?size=100&id=20906&format=png",
      },
      {
        name: "Linux",
        img: "https://img.icons8.com/?size=100&id=fG5Tnj4ARIoI&format=png",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Language");

  return (
    <div>
      {/* About Section */}
      <div className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate student with a strong ambition to pursue a career in
          computer science, particularly as a software developer. I have a keen
          eye for detail and always strive to deliver my best in everything I
          do.
          <br />I enjoy solving problems, learning new technologies, and turning
          ideas into real-world solutions through code. I value teamwork and
          meaningful connections and yes, I’m always up for a good coffee chat!
        </p>
      </div>
      <div className="scroll-down" onClick={() => scrollTo(educationRef)}>
        <FaArrowDown />
      </div>

      {/* Education Section */}
      <div className="education-section" ref={educationRef}>
        <h2>Education</h2>
        <div className="edu-card college-card">
          <h3>SRM Institute of Science and Technology, Ramapuram</h3>
          <p>
            <strong style={{ color: "orange" }}>Degree:</strong> B.Sc. Computer
            Science
          </p>
          <p>
            <strong style={{ color: "orange" }}>Duration:</strong> 2024 – 2027
          </p>
          <p>
            <strong style={{ color: "orange" }}>CGPA:</strong> 9.38 (Upto 2nd
            semester)
          </p>
          <div className="edu-location">
            <a
              href="https://maps.app.goo.gl/Xo6NRkdGfuEr6MeEA"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> Chennai
            </a>
          </div>
        </div>

        {/* HSC and SSLC */}
        <div className="cards-row">
          <div className="edu-card">
            <h3>Higher Secondary Certificate</h3>
            <p>
              <strong style={{ color: "orange" }}>Institution:</strong>{" "}
              Vidyodaya Matriculation Academy
            </p>
            <p>
              <strong style={{ color: "orange" }}>Year:</strong> 2023 – 2024
            </p>
            <p>
              <strong style={{ color: "orange" }}>Group:</strong> Maths with
              Computer Science
            </p>
            <p>
              <strong style={{ color: "orange" }}>Percentage:</strong> 77.5%
            </p>
            <div className="edu-location">
              <a
                href="https://maps.app.goo.gl/w9dJXvB68Be18QQu6"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i> Chennai
              </a>
            </div>
          </div>

          <div className="edu-card">
            <h3>Secondary School Certificate</h3>
            <p>
              <strong style={{ color: "orange" }}>Institution:</strong>{" "}
              Vidyodaya Matriculation Academy
            </p>
            <p>
              <strong style={{ color: "orange" }}>Year:</strong> 2020 – 2021
            </p>
            <p>
              <strong style={{ color: "orange" }}>Percentage:</strong> 80%
            </p>
            <div className="edu-location">
              <a
                href="https://maps.app.goo.gl/w9dJXvB68Be18QQu6"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i> Chennai
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down" onClick={() => scrollTo(experienceRef)}>
        <FaArrowDown />
      </div>

      {/* Experience Section */}
      <div className="experience-container" ref={experienceRef}>
        <h2>Professional Experience</h2>
        <div className="procards-container">
          <div className="pro-card">
            <h3>Approtech R&D Solutions Pvt. Ltd.</h3>
            <p>
              <strong style={{ color: "orange" }}>Role:</strong> Full Stack
              Developer Intern
            </p>
            <p>
              <strong style={{ color: "orange" }}>Duration:</strong> May 2025 –
              June 2025
            </p>
            <ul className="experience-list">
              <li>
                Built a blog system using <i>HTML</i>, <i>CSS</i>,{" "}
                <i>JavaScript</i>
              </li>
              <li>
                Developed backend with <i>FastAPI</i> & <i>SQLite3</i>
              </li>
              <li>Focused on responsive design and clean integration</li>
            </ul>
          </div>
          <div className="exp-location">
            <a
              href="https://maps.app.goo.gl/gSeHziZ78hBCP35N9"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> Chennai
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-down" onClick={() => scrollTo(skillsRef)}>
        <FaArrowDown />
      </div>

      {/* Skills Section */}
      <div className="skills-section" id="skills" ref={skillsRef}>
        <h2 className="skills-title">Technical Skills</h2>

        <div className="tabs">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`tab-button ${activeTab === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeTab].map((skill, index) => (
            <div className="skill-card" key={index} title={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <div className="resume-heading">
            <i className="fas fa-eye"></i>
            <span>View CV</span>
          </div>

          <div className="resume-viewer">
            <iframe
              src="/Santhana Resume.pdf"
              title="My Resume"
              width="100%"
              height="600px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
