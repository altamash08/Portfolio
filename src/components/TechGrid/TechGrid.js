import "./TechGrid.scss";
import icons from "../../assets/icons";

const techs = [
  { name: "HTML", className: "html", icon: icons.html },
  { name: "CSS", className: "css", icon: icons.css },
  { name: "JavaScript", className: "js", icon: icons.js },
  { name: "TypeScript", className: "ts", icon: icons.typescript },
  { name: "React", className: "react", icon: icons.react },
  { name: "Node.js", className: "node", icon: icons.nodejs },
  { name: "Express.js", className: "express", icon: icons.express },
  { name: "MongoDB", className: "mongo", icon: icons.mongodb },
  { name: "Docker", className: "docker", icon: icons.docker },
  { name: "Git", className: "git", icon: icons.git },
  { name: "GitHub", className: "github", icon: icons.github },
  { name: "Python", className: "python", icon: icons.python },
  { name: "C", className: "c", icon: icons.c },
  { name: "C++", className: "ccc", icon: icons.ccc },
  { name: "Java", className: "java", icon: icons.java }
];

const TechGrid = () => {
  return (
    <section className="tech-section">
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div className={`tech-card ${tech.className}`} key={index}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default TechGrid;
