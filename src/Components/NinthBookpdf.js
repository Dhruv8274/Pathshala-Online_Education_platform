import React, { useState } from "react";
import "./Practice.css";
import { useNavigate } from "react-router-dom";
import pdfFile from "../Assets/Resume.pdf";
import Image from "../Assets/ncert-removebg-preview.png";
function NinthBookpdf() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const navigate = useNavigate();
  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const handleBackClick = () => {
    navigate("/cbse");
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
                    <h1 className="generalheading">Class 9th Books </h1>
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
                <span className="menu-text">NCERT</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 1 ? "active" : ""}`}
              onClick={() => handleNavItemClick(1)}
            >
              <a href="/">
                <i className="fas fa-user"></i>
                <span className="menu-text">Oswal Publication</span>
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

export default NinthBookpdf;
