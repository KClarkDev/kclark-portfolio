import "../styles/Header.css";
import { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-container">
      <header className="header">
        <h1 className="header-text">KC</h1>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      {/* Here we are calling the renderPage method which will return a component */}
      {/* <main className="mx-3">{renderPage()}</main> */}
    </div>
  );
}

export default Header;
