import Project from "../Project";
import "../../styles/Project.css";
import passwordGen from "../../assets/password-gen.jpeg";
import quizGame from "../../assets/quiz-question.jpeg";
import puppyLove from "../../assets/puppy-love-husky.jpg";
import pomodoro from "../../assets/pomodoro.jfif";
import weatherUnderground from "../../assets/wu.png";
import planner from "../../assets/planner.jpeg";
import npsHikes from "../../assets/nps.jpg";

export default function Projects() {
  const projectsData = [
    {
      repo: "https://github.com/KClarkDev/nps-trail-viewer",
      url: "https://nps-trail-viewer-493315c88a96.herokuapp.com/",
      imgUrl: npsHikes,
      title: "NPS Trail Viewer",
      details: "ArcGIS API for Javascript",
    },
    {
      repo: "https://github.com/KClarkDev/password-generator",
      url: "https://kclarkdev.github.io/password-generator/",
      imgUrl: passwordGen,
      title: "Password Generator",
      details: "Javascript",
    },
    {
      repo: "https://github.com/KClarkDev/timed-quiz-game",
      url: "https://kclarkdev.github.io/timed-quiz-game/",
      imgUrl: quizGame,
      title: "Timed Quiz Game",
      details: "Javascript",
    },
    {
      repo: "https://github.com/KClarkDev/puppy-love",
      url: "https://kclarkdev.github.io/puppy-love/",
      imgUrl: puppyLove,
      title: "Puppy Love",
      details: "CSS Animations",
    },
    {
      repo: "https://github.com/KClarkDev/pomodoro-timer",
      imgUrl: pomodoro,
      title: "Pomodoro Timer",
      details: "Python",
    },
    {
      repo: "https://github.com/KClarkDev/weather-underground-web-scraper",
      imgUrl: weatherUnderground,
      title: "Web Scraping",
      details: "Python",
    },
    {
      repo: "https://github.com/KClarkDev/work-day-scheduler",
      url: "https://kclarkdev.github.io/work-day-scheduler/",
      imgUrl: planner,
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
