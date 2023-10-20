import Project from "../Project";
import "../../styles/Project.css";

export default function Projects() {
  const projectsData = [
    {
      url: "https://github.com/KClarkDev/password-generator",
      title: "Password Generator",
      details: "Javascript",
    },
    {
      url: "https://github.com/KClarkDev/timed-quiz-game",
      title: "Timed Quiz Game",
      details: "Javascript",
    },
    {
      url: "https://github.com/KClarkDev/weather-underground-web-scraper",
      title: "Weather Underground Web Scraper",
      details: "Python",
    },
    {
      url: "https://github.com/KClarkDev/logo-generator",
      title: "Logo Generator",
      details: "Javascript",
    },
    {
      url: "https://github.com/KClarkDev/employee-tracker",
      title: "Employee Tracker",
      details: "Javascript",
    },
    {
      url: "https://github.com/KClarkDev/note-taker-app",
      title: "Note Taker",
      details: "Javascript",
    },
    // Add more project objects here
  ];

  return (
    <div className="portfolio">
      <h1 className="title-name">Portfolio</h1>
      <div className="project-grid">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            details={project.details}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
