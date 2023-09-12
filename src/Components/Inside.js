import React from 'react'
import "./Inside.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Inside() {
  return (
    <>
      <Navbar/>
      <div className="contain"style={{display:"flex",justifyItems:"center"}}>
        <div className="header">
            <h1>notes</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid porro inventore quisquam nulla natus fuga? Delectus, ex nam. Voluptas sed, enim nobis accusamus rerum asperiores eius dolor possimus sequi tempora.</p>
            <ul>
                <li className="card">card1</li>
                <li className="card">card2</li>
                <li className="card">card3</li>
                <li className="card">card4</li>
            </ul>
        </div>
        </div>
      <Footer/>
    </>
  )
}

export default Inside
