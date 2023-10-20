import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <p className="contact-info-container">
          <span className="contact-info">
            <a href="https://github.com/KClarkDev" className="contact-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
          <span className="contact-info">
            <a
              href="https://www.linkedin.com/in/kclark-gis/"
              className="contact-link"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-info">
            <a
              href="https://community.esri.com/t5/user/viewprofilepage/user-id/232739"
              className="contact-link"
            >
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
