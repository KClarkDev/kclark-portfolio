import pdfFile from "../../assets/KClark_Resume_2023.pdf";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="title-name">Resume</h1>
      <a
        href={pdfFile}
        download="Katherine_Clark_Resume.pdf"
        className="download-link"
      >
        Download
      </a>
      <h2>Technical Skills</h2>
      <p className="resume-details">
        <b>Esri Suite</b> ArcGIS Online, Enterprise Portal, Pro, ArcMap, Web App
        Builder, Experience Builder, Field Applications Suite
        <br></br>
        <b>APIs/Extensions </b>
        ArcPy, ArcGIS API for Python, Spatial Analyst and 3D Analyst extensions
        <br></br>
        <b>Programming Languages/Tools</b> Python, Javascript, CSS, HTML, Git,
        node.js
        <br></br>
        <b>Productivity Tools</b> Microsoft Office Suite, GitHub, GitLab
      </p>
      <p className="divider"></p>
      <h2>Professional Experience</h2>
      <p className="resume-details">
        <b>Geospatial Analyst III</b> - Resource Environmental Solutions, LLC
        (2017 - present)
        <br></br>
        <b>Fish Ecology Lab Research Assistant </b>- George Mason University
        (2015-2016)
        <br></br>
      </p>
    </div>
  );
}
