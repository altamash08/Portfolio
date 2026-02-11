import React from "react";
import "./ChromaGrid.scss";

import justbuyy from "../../assets/images/justbuyy.png";
import quickbite from "../../assets/images/quickbite.png";

const projects = [
  {
    title: "JustBuyy",
    image: justbuyy,
    link: "https://justbuyy-in.onrender.com/",
  },
  {
    title: "QuickBite",
    image: quickbite,
    link: "https://quickbite-eat.onrender.com/",
  },
];

const ChromaGrid = () => {
  return (
    <div className="chroma-grid-wrapper">
      <div className="chroma-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="chroma-card"
            onClick={() => window.open(p.link, "_blank")}
          >
            <div className="image-wrapper">
              <img src={p.image} alt={p.title} />
            </div>

            {/*  PROJECT NAME */}
            <div className="card-footer">
              <span>{p.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChromaGrid;
