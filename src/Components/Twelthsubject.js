import React, { useState } from "react";
import "./Practice.css";
import { Link, useNavigate } from "react-router-dom";
import pdfFile from "../Assets/Resume.pdf";
import Image from "../Assets/ncert-removebg-preview.png";
import Bio1 from "../Pdf/Bio12ch1.pdf";
import Bio2 from "../Pdf/Bio12ch2.pdf";
import Bio3 from "../Pdf/Bio12ch3.pdf";
import Bio4 from "../Pdf/Bio12ch4.pdf";
import Bio5 from "../Pdf/Bio12ch5.pdf";
import Bio6 from "../Pdf/Bio12ch6.pdf";
import Bio7 from "../Pdf/Bio12ch7.pdf";
import Bio8 from "../Pdf/Bio12ch8.pdf";
import Bio9 from "../Pdf/Bio12ch9.pdf";
import Bio10 from "../Pdf/Bio12ch10.pdf";
function Twelthsubject() {
  const [activeNavItem, setActiveNavItem] = useState(4);
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
                    <h1 className="generalheading">Class 12th all subject</h1>
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
                <span className="menu-text">12th English</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 1 ? "active" : ""}`}
              onClick={() => handleNavItemClick(1)}
            >
              <a href="/">
                <i className="fas fa-user"></i>
                <span className="menu-text">12th Mathematics</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 2 ? "active" : ""}`}
              onClick={() => handleNavItemClick(2)}
            >
              <Link to="/Physics">
                <i className="fas fa-file-alt"></i>
                <span className="menu-text">12th Physics</span>
              </Link>
            </li>
            <li
              className={`nav-item ${activeNavItem === 3 ? "active" : ""}`}
              onClick={() => handleNavItemClick(3)}
            >
              <a href="/">
                <i className="fas fa-play"></i>
                <span className="menu-text">12th Chemistry</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 4 ? "active" : ""}`}
              onClick={() => handleNavItemClick(4)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">12th Biology</span>
              </a>
            </li>
            <li
              className={`nav-item ${activeNavItem === 5 ? "active" : ""}`}
              onClick={() => handleNavItemClick(5)}
            >
              <a href="/">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">12th Physical Edu.</span>
              </a>
            </li>
          </ul>
          <div className="pdfcontainer">
          <div className="pdf">
            <h3>Biology</h3>
            <h3>Chapter-1</h3>
            <a href={Bio1} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-2</h3>
            <a href={Bio2} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-3</h3>
            <a href={Bio3} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-4</h3>
            <a href={Bio4} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-5</h3>
            <a href={Bio5} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-6</h3>
            <a href={Bio6} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-7</h3>
            <a href={Bio7} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-8</h3>
            <a href={Bio8} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-9</h3>
            <a href={Bio9} target="_blank" rel="noopener noreferrer">
              <div className="pdf-card">
                <button className="pdf-button">View PDF</button>
                <a href={pdfFile} download>
                  <button className="pdf-button">Download </button>
                </a>
              </div>
            </a>
          </div>
          <div className="pdf">
          <h3>Biology</h3>
            <h3>Chapter-10</h3>
            <a href={Bio10} target="_blank" rel="noopener noreferrer">
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

export default Twelthsubject;
