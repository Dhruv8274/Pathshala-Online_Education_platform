import React from 'react'
import "./School.css";
import { useNavigate } from "react-router-dom";
import Schoolphoto from "../Assets/school (2).png";
import Register from "../Assets/register.png";
import Upload from "../Assets/upload.png";
import Access from "../Assets/give access.png";
import Render from "../Assets/access notes.png";
function School() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate("/");
    };
  return (
    <>
      <div className="school" >
        <div className="schooldetails" >
          <div className="schoolcontent" >
            <h1>
              Register Your School
              <br />
              and Start Uploading<br/>
              Notes and Video Lectures
            </h1>
            <button
              type="button"
              className="btn btn-secondary glowing-button"
              style={{ backgroundColor: "purple", width: "11rem" }}
              onClick={handleLoginClick}
            >
              Register School
            </button>
          </div>
          <div className="imag" >
            <img alt="loading" src={Schoolphoto} style={{width:'27vw',height:'45vh'}} />
          </div>
        </div>
        <div className="car">
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(228, 255, 188)"}}><p>REGISTER<br/>SCHOOL<img alt="loading" src={Register} style={{width:"6rem",height:"6rem" ,marginLeft:"1rem"}}/></p></div>
          
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(236, 199, 236)"}}><p>UPLOAD NOTES<br/>VIDEO LECTURE<img alt="loading" src={Upload} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(216, 216, 255)"}}><p>GIVE ACCESS<br/>TO STUDENTS<img alt="loading" src={Access} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        <div className="bookcard">
          <div className="books" style={{backgroundColor:"rgb(241, 255, 226)"}}><p>RENDER NOTES<img alt="loading" src={Render} style={{width:"6rem",height:"6rem",marginLeft:"1rem"}}/></p></div>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default School
