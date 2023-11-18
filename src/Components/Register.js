import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import Books from '../Assets/book.png'
function BlackBackground() {
  const history=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber,setPhonenumber]=useState("");
  const [dateofbirth,setDob]=useState("");
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
      await axios.post("https://localhost:8000/signup", {
        email,
        password,
        phonenumber,
        dateofbirth,
      })
      .then(res=>{
        if(res.data==="exist"){
          history('/home',{state:{id:email}})
        }
        else if(res.data==="notexist"){
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
    <div className="loginpage"style={containerStyle}>
      <div className="heading" style={{ justifyContent: "center", color: "white",marginRight:"34rem"}}>
        <img alt="loading" src={Books} style={{width:'20rem',height:"15rem",paddingLeft:'6rem'}}/>
        <div className="text">
        <h1>Welcome to PathShala!</h1>
        </div>
      </div>
      <div className="register" style={boxStyle}>
        <form onSubmit={submit }>
            <h2 style={{headingStyle}}>Sign Up</h2>
            <input type="text" style={inputStyle} onChange={(e) => {setEmail(e.target.value)}}placeholder="Email" />
            <input type="number" style={inputStyle} onChange={(e) => {setPhonenumber(e.target.value)}}placeholder="Phone Number" />
            <input type="date" style={inputStyle} onChange={(e) => {setDob(e.target.value)}} placeholder="Date of Birth" />
            <select type="Class" name="class" style={inputStyle}>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
            <input type="password" style={inputStyle} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
            <button className="glowing-button"type="submit" style={buttonStyle}>Submit</button>
          </form>
        <p style={{color:"black"}}>Already have a account <Link to='/login2'>Login</Link></p>
      </div>
    </div>
  );
}

export default BlackBackground;


