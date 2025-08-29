import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>Say hi, I don’t bite </p>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="contact-socials">
          <a
            href="https://github.com/Santhana-Manikandan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/santhana2006"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:msanthana2006@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
