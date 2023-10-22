import portraitImage from "../../assets/portrait-nagel.png";
import "../../styles/Pages.css";

const styles = {
  imageStyle: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default function Home() {
  return (
    <div className="container">
      <div className="row" />
      <div className="row">
        <div className="col-6">
          <img
            src={portraitImage}
            style={styles.imageStyle}
            alt="Self-portrait in Patrick Nagel style"
          />
        </div>
        <div className="col-6 title-card">
          <h1 className="title-name">Katherine</h1>
          <h1 className="title-name special-text">Clark</h1>
          <p className="title-text">
            GIS ANALYST<br></br>&<br></br>
            DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}
