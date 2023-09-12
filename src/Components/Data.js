import React from 'react';
import "./Data.css";
function Data() {
  return (
    <>
    <div style={{ paddingTop:"3rem",display:"flex",justifyContent:'center', color: "white", fontStyle: 'italic', fontSize: "1rem" }}>
          <h1 style={{color:'black',fontFamily:'monospace',fontWeight:'2rem'}}>Our Connection</h1>
        </div>
      <div className="skills">
        <div className="skillscard">
          <ul>
            <li style={{justifyContent:"center",alignItems:"center"}}>
                <h1 style={{border:"2px solid orangered"}}>100+</h1>
                <h3>School<br/>Registered</h3>
            </li>
            <li> 
                <h1 style={{border:"2px solid orangered"}}>1000+</h1><i className="fa fa-percent"></i>
                <h3>Student<br/>Login</h3>
            </li>
            <li>
                <h1 style={{border:"2px solid orangered"}}>10+</h1><i className="fa fa-percent"></i>
                <h3>Cities<br/>Reached</h3>
            </li>
          </ul>
        </div>
      </div>
      
      
    </>
  )
}

export default Data
