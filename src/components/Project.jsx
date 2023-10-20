import "../styles/Project.css";
import placeholderImage from "../assets/placeholder_1200x800.png";

// If img is not specified in props, default placeholder is used
export default function Project({
  url,
  img = placeholderImage,
  title,
  details,
}) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{details}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}
