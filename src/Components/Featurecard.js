import React from "react";
import "./Featurecard.css";
import Main from "../Assets/main.jpg";
function Featurecard() {
  return (
    <div
      class="contain"
      style={{
        background:
          "linear-gradient(to bottom,rgb(255, 238, 173)10%, rgb(3, 5, 10) 100%)",
        justifyContent: "center",
        alignItems: "center",
        height: "40%",
        width: "100%",
      }}
    >
      <h1 style={{ fontFamily: "cursive", fontSize: "3rem", color: "black" }}>
        Features Of Pathshala
      </h1>
      <div style={{ position: "relative" }}>
        <img src={Main} alt="/" style={{ width: "100%", height: "auto" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2
            style={{ color: "white", fontFamily: "cursive", fontSize: "2rem" ,opacity:0.3}}
          >
            Notes Of all Subject
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={Main} alt="/" style={{ width: "100%", height: "auto" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2
            style={{ color: "white", fontFamily: "cursive", fontSize: "2rem",opacity:0.3 }}
          >
            Video Lecture
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={Main} alt="/" style={{ width: "100%", height: "auto" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: 'grey', fontFamily: 'cursive', fontSize: '2rem', opacity: '1', transformOrigin: 'center', transform: 'perspective(800px) rotateY(25deg)', transition: '0.5s' }}>
  Test Series for all Class
</h2>

        </div>
      </div>
    </div>
  );
}

export default Featurecard;
