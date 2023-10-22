import Project from "../Project";
import "../../styles/Project.css";

export default function Projects() {
  const projectsData = [
    {
      repo: "https://github.com/KClarkDev/password-generator",
      url: "https://kclarkdev.github.io/password-generator/",
      imgUrl: "./src/assets/password-gen.jpeg",
      title: "Password Generator",
      details: "Javascript",
    },
    {
      repo: "https://github.com/KClarkDev/timed-quiz-game",
      url: "https://kclarkdev.github.io/timed-quiz-game/",
      imgUrl: "./src/assets/quiz-question.jpeg",
      title: "Timed Quiz Game",
      details: "Javascript",
    },
    {
      repo: "https://github.com/KClarkDev/puppy-love",
      url: "https://kclarkdev.github.io/puppy-love/",
      imgUrl: "./src/assets/puppy-love-husky.jpg",
      title: "Puppy Love",
      details: "CSS Animations",
    },
    {
      repo: "https://github.com/KClarkDev/pomodoro-timer",
      imgUrl: "src/assets/pomodoro.jfif",
      title: "Pomodoro Timer",
      details: "Python",
    },
    {
      repo: "https://github.com/KClarkDev/weather-underground-web-scraper",
      imgUrl: "src/assets/wu.png",
      title: "Web Scraping",
      details: "Python",
    },
    {
      repo: "https://github.com/KClarkDev/work-day-scheduler",
      url: "https://kclarkdev.github.io/work-day-scheduler/",
      imgUrl: "src/assets/planner.jpeg",
      title: "Workday Scheduler",
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
            imgUrl={project.imgUrl}
            title={project.title}
            details={project.details}
            repo={project.repo}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
