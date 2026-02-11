import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import ChromaGrid from "../ChromaGrid/ChromaGrid";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [projects, setProjects] = useState([]);

  // title animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(snapshot.docs.map(doc => doc.data()));
  };

  // 🔥 ChromaGrid items (EXACT format)
  const chromaItems = projects.map(project => ({
    image: project.image,
    title: project.name,
    subtitle: project.description,
    handle: "@project",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: project.url
  }));

  // old cards (unchanged)
  const renderProjects = projects => (
    <div className="images-container">
      {projects.map((project, idx) => (
        <div className="image-box" key={idx}>
          <img
            src={project.image}
            className="portfolio-image"
            alt="project"
          />
          <div className="content">
            <p className="title">{project.name}</p>
            <h4 className="description">{project.description}</h4>
            <button
              className="btn"
              onClick={() => window.open(project.url)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Projects".split("")}
            idx={15}
          />
        </h1>

        {/* OLD PROJECT LAYOUT */}
        {renderProjects(projects)}

        {/* 🔥 SAME CHROMA GRID (EXACT LIKE SKILLS) */}
        <div style={{ height: "600px", position: "relative" }}>
          <ChromaGrid
            items={chromaItems}
            radius={300}
            columns={3}
            rows={2}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
      <div>{renderProjects(projects)}</div>

<ChromaGrid />


      <Loader type="pacman" />
    </>
  );
};

export default Projects;
