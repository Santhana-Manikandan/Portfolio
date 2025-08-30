// src/pages/Project.js
import React from 'react';
import './Project.css'; 
import { useEffect } from "react";


const ProjectCard = ({ title, description, image, link }) => {
   useEffect(() => {
  document.title = "Santhana | Projects";
}, []);
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project →
      </a>
    </div>
  );
};

const projects = [
  {
    title: "Portfolio ",
    description: "My personal portfolio website built with react",
    image: "/images/mine.png",
    link: "https://santhana.vercel.app/",
  },
  {
    title: "Personal Blog ",
    description: "A personal Blog built with HTML, CSS, Javascript and FastAPI.",
    image: "/images/Blog.png",
    link: "https://santhana.vercel.app/",
  },
{
  title: "Gamozo",
  description: (
    <>
      A gaming platform where users can play and have fun.<br />
      Built with HTML, CSS, and JavaScript.
    </>
  ),
  image: "/images/Gamozo.png",
  link: "https://gamozo.vercel.app/",
},

    {
    title: "Blog",
    description: "Basic blog website built using HTML and CSS.",
    image: "/images/Blog2.png",
    link: "https://santhana-m.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="main-heading">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
