import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Project Countries",
    description: "Project Countries",
    route: "/projectcountries",
  },
  {
    id: 2,
    title: "Project Game",
    description: "Project Game",
    route: "/projectgame",
  },
  {
    id: 3,
    title: "This Project",
    description: "This project",
    route: "/projectport",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <ul className="projects-list">
        {projectsData.map((project) => (
          <li key={project.id} className="project-item">
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <button
              className="project-button"
              onClick={() => navigate(project.route)}
            >
              View Project
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;