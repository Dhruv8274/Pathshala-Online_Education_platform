import React from "react";
import "./Icse.css";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Photo from "../Assets/main.jpg";
import {  useNavigate } from 'react-router-dom';
function ICSE() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <>
      <Navbar />

      <div
        className="pagebody"
        style={{
          display: "inline",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: "100% ",
        }}
      >
        <div className="heading" style={{ margin: "0px",backgroundColor:'orangered',textAlign:'center',borderBottom:'2px solid black',display:"flex" }}>
          <div style={{display:'flex',paddingLeft:'0px',paddingTop:'10px',height:'50%'}}>
        <button className="cardbutton" onClick={handleBackClick}>Back</button>
          </div>
          <div style={{paddingLeft:'35%'}}>
            <h1>ICSE</h1>
          <p>Central Board of Secondary Education</p>
          </div>
          
        </div>
        <div className="heading1" style={{ margin: "0px" }}>
          <h1>ICSE Class 12 Syllabus: </h1>
          <p>Empowering Success with Extensive Curriculum Coverage</p>
        </div>
        <ul className="options" >
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>12th all notes</h2>
              <p className="cards__description"style={{color:'White'}}>
                Get all subject notes of class 12th in One drive.
              </p>
            </div>
            <button className="cards__button">Go To Drive</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>12th Video Lectures</h2>
              <p className="cards__description"style={{color:'White'}}>
                Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button">Go to site</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
            <article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>12th Book pdf</h2>
              <p className="cards__description"style={{color:'White'}}>
                Get all books pdf like SELINA,Ms.Manoj etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button">Visit library</button>
          </div>
        </article>
          </li>
        </ul>
        <div className="heading1" style={{ margin: "0px" }}>
          <h1>ICSE Class 10 Syllabus: </h1>
          <p>Unlocking Academic Excellence with Comprehensive Course Content</p>
        </div>
        <ul className="options" >
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>10th all notes</h2>
              <p className="cards__description"style={{color:'White'}}>
              Get all subject notes of class 10th in One drive.
              </p>
            </div>
            <button className="cards__button">Go to Drive</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>10th Video Lectures</h2>
              <p className="cards__description"style={{color:'White'}}>
              Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button">Go to Site</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
            <article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>10th Book pdf</h2>
              <p className="cards__description"style={{color:'White'}}>
              Get all books pdf like SELINA,Ms.Manoj etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button">Visit Library</button>
          </div>
        </article>
          </li>
        </ul>
        <div className="heading1" style={{ margin: "0px" }}>
          <h1>Complete ICSE Class 9 Syllabus: </h1>
          <p>A Comprehensive Guide to Class 9th Curriculum</p>
        </div>
        <ul className="options" >
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>9th all notes</h2>
              <p className="cards__description"style={{color:'White'}}>
              Get all subject notes of class 9th in One drive.
              </p>
            </div>
            <button className="cards__button">Go To Drive</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
<article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>9th Vedio Lecture</h2>
              <p className="cards__description"style={{color:'White'}}>
              Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button">Go to Site</button>
          </div>
        </article>
          </li>
          <li className="classoption" style={{width:'100%',height:'70%'}}>
            <article className="cards">
          <img className="cards__background" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content | flow">
            <div className="cards__content--container | flow">
              <h2 className="cards__title"style={{color:'White'}}>9th Book Pdf</h2>
              <p className="cards__description"style={{color:'White'}}>
              Get all books pdf like SELINA,Ms.Manoj etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button">Visit Library</button>
          </div>
        </article>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ICSE;
