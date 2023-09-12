import React from "react";
import "./Details.css";
import { useNavigate } from "react-router-dom";
import Boy from "../Assets/boy.png";
import NCERT from "../Assets/ncert-removebg-preview.png";
import SAMPLE from "../Assets/sampleparer-removebg-preview.png";
import PREVIOUS from "../Assets/sample-removebg-preview.png";
import QUIZES from "../Assets/quizes-removebg-preview.png";
import PRACTICE from "../Assets/Practice_set-removebg-preview.png";
function Details() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login2");
  };
  return (
    <>
      <div className="fulldetails" >
        <div className="details" >
          <div className="content" >
            <h1>
              Lagging Behind in Exam
              <br />
              Preparation ?
            </h1>
            <h2>Login our site for Important Update </h2>
            <button
              type="button"
              className="btn btn-secondary glowing-button"
              style={{ backgroundColor: "#FF4500", width: "11rem" }}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <div className="image" >
            <img alt="loading" src={Boy} />
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(228, 255, 188)"}}><p>NCERT SOLUTION<img alt="loading" src={NCERT} style={{width:"6rem",height:"6rem" ,marginLeft:"1rem"}}/></p></div>
          
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(236, 199, 236)"}}><p>PREVIOUS YEAR<img alt="loading" src={PREVIOUS} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(216, 216, 255)"}}><p>SAMPLE PAPER<img alt="loading" src={SAMPLE} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(241, 255, 226)"}}><p>QUIZES<img alt="loading" src={QUIZES} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"bisque"}}><p>PRACTICE SET<img alt="loading" src={PRACTICE} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
          
        </div>
        </div>
    </>
  );
}

export default Details
