import "./App.css";
import "./styles/Header.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <PortfolioContainer currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
