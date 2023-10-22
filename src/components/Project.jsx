import "../styles/Project.css";
import placeholderImage from "../assets/placeholder_1200x800.png";

// If img is not specified in props, default placeholder is used
export default function Project({
  repo,
  url,
  imgUrl = placeholderImage,
  title,
  details,
}) {
  // Adding an inline project style to dynamically include the background image based on props
  const projectStyle = {
    background: `url(${imgUrl})`,
    backgroundSize: "cover",
  };
  return (
    <div className="project" style={projectStyle}>
      <h3>{title}</h3>
      <p>{details}</p>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
      {url ? ( // Conditionally render the link only if url is provided. Not all repos have a deployed application.
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Application
        </a>
      ) : null}
    </div>

    // <div class="project project-container">
    //   <a href={url} target="_blank">
    //     <img src={imgUrl} alt="project card image" />
    //   </a>
    //   <div class="project-text">
    //     <div class="project-title">{title}</div>
    //     <div class="project-details">{details}</div>
    //   </div>
    // </div>
  );
}
