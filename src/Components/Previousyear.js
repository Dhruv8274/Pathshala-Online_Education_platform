import React, { useState } from "react";
import "./Practice.css";
import { useNavigate } from "react-router-dom";
import pdfFile from "../Assets/Resume.pdf";
import Image from "../Assets/ncert-removebg-preview.png";
function Previousyear() {
  const [activeNavItem, setActiveNavItem] = useState(4);
  const navigate = useNavigate();
  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="items">
          <ul>
            <li>
                <button className="pracback" onClick={handleBackClick}>
                  Back
                </button>
            </li>
            <li className="pracheading">
                <div className="pracheading2" >
                    <h1>Previous Year Questions</h1>
                </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="practicecontainer">
        <nav className="side-nav" style={{ display: "flex" }}>
          <ul className="nav-menu">
            <li
              className={`nav-item ${activeNavItem === 0 ? "active" : ""}`}
              onClick={() => handleNavItemClick(0)}
            >
              <a href="/">
                <i className="fas fa-tachometer-alt"></i>
                <span className="menu-text">12th Physics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 1 ? "active" : ""}`}
              onClick={() => handleNavItemClick(1)}
            >
              <a href="/">
                <i className="fas fa-user"></i>
                <span className="menu-text">12th Chemistry</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 2 ? "active" : ""}`}
              onClick={() => handleNavItemClick(2)}
            >
              <a href="/">
                <i className="fas fa-file-alt"></i>
                <span className="menu-text">12th Mathematics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 3 ? "active" : ""}`}
              onClick={() => handleNavItemClick(3)}
            >
              <a href="/">
                <i className="fas fa-play"></i>
                <span className="menu-text">10th Physics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 4 ? "active" : ""}`}
              onClick={() => handleNavItemClick(4)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">10th Chemistry</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 5 ? "active" : ""}`}
              onClick={() => handleNavItemClick(5)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">10th Mathematics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 6 ? "active" : ""}`}
              onClick={() => handleNavItemClick(6)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">10th English</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 7 ? "active" : ""}`}
              onClick={() => handleNavItemClick(7)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">9th Physics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 8 ? "active" : ""}`}
              onClick={() => handleNavItemClick(8)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">9th Chemistry</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 9 ? "active" : ""}`}
              onClick={() => handleNavItemClick(9)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">9th Math</span>
              </a>
            </li>
          </ul>
          <div className="pdfcontainer">
          <div className="pdf">
            <img src={Image} alt="Loading" />
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
            <img src={Image} alt="Loading" />
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
            <img src={Image} alt="Loading" />
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
            <img src={Image} alt="Loading" />
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Previousyear;
