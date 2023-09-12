import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Books from '../Assets/book.png'

function BlackBackground() {
  const history=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerStyle = {
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const boxStyle = {
    backgroundColor: "#f3e9e9",
    padding: "30px",
    paddingLeft: "10px",
    border: "2px solid #FF1744",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    width: "35%",
  };

  const inputStyle = {
    backgroundColor: "#F5F5F5",
    color: "black",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#FF4500",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
  };

  const headingStyle = {
    color: "black",
    marginBottom: "20px",
    textAlign: "center",
  };

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("https://localhost:3000/", {
        email,
        password,
      })
      .then(res=>{
        if(res.data ==='exist'){
          history('/home',{state:{id:email}})
        }
        else if(res.data === "notexist"){
          alert("User is not sign up")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    
    <div  className="loginpage"style={containerStyle}>
    {/* <h1 className="Heading" style={{display:'inline',color:"White",fontWeight:"bold"}}>Student Login</h1> */}
      <div className="heading" style={{ justifyContent: "center", color: "white"}}>
        <img alt="loading" src={Books} style={{width:'20rem',height:"15rem",paddingLeft:'6rem'}}/>
        <div className="text">
        <h1>Welcome to PathShala!</h1>
        </div>
      </div>
      <div className="loginsection"style={boxStyle}>
        <form onSubmit={submit}>
          <h2 style={headingStyle}>Login</h2>
          <input
            type="text"
            style={inputStyle}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            style={inputStyle}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button className="glowing-button" type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
        <p style={{ color: "black" }}>
          Don't have an account? <Link to="/new_registration">Register Now</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default BlackBackground;
