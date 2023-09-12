import React from "react";
import "./About.css";
import Member1 from "../Assets/member1.png";
import Member2 from "../Assets/member2.png";
function About() {
  return (
    <>
      
      <div className="aboutmain"style={{paddingTop:'0px',backgroundColor:'#FF4500'}}>
        <h1 style={{ fontFamily: "bold", fontWeight: "20%" }}>About Us</h1>
        <hr
          color="red"
          size="200"
          width="20%"
          style={{ borderTop: "3px solid red" }}
        />
      </div>
      <div className="aboutcontainer">
        <div className="container1">
          <h2>Our Motive</h2>
          <hr
            color="red"
            size="200"
            width="100%"
            style={{ borderTop: "3px solid red" }}
          />

          <p className="para">
          Pathshala is a comprehensive educational website designed to provide students with a wide range of resources for their academic studies, specifically targeting students in classes 12th, 10th, and 9th. The main objective of Pathshala is to facilitate learning by offering easy access to high-quality study materials such as notes, PDFs, and video lectures.
          </p>
          <p className="para">
          By compiling subject-specific notes and PDFs, Pathshala aims to provide students with a structured and organized resource that can assist them in understanding and revising their curriculum effectively. These study materials are designed to cover the entire syllabus of each respective class, ensuring that students have access to all the necessary information required for their examinations.
          </p>
          <p className="para">
          In addition to textual materials, Pathshala recognizes the growing importance of visual and audio content in modern education. To cater to diverse learning preferences, the website also offers video lectures. These lectures serve as a supplementary resource, enabling students to grasp complex concepts more easily through visual demonstrations and explanations.
          </p>
          <p className="para">
          Overall, Pathshala strives to support students' academic growth by providing them with a centralized platform where they can find comprehensive study materials, including notes, PDFs, and video lectures. By offering these resources, the website aims to enhance students' understanding, retention, and performance in their respective classes, ultimately empowering them to achieve their educational goals.
          </p>
          
        </div>
        <div className="container2">
          <h2>Our Members</h2>
          <hr
            color="red"
            size="200"
            width="100%"
            style={{ borderTop: "3px solid red" }}
          />
          <div className="owners">
            <h3 style={{ display: "inline", padding: "1px", fontSize: "30px" }}>
              Satish Sao
            </h3>
            <img
              src={Member1}
              alt="Loading..."
              style={{ height: "160px", width: "160px" }}
            />
            <p>
              <b>Owner :</b>
            </p>
            <p>
            Driven by a desire to empower young minds, I Myself exudes warmth and enthusiasm, uplifting those around him with his infectious optimism. My dedication to providing comprehensive study materials, including notes, PDFs, and video lectures, stems from a profound belief in the transformative power of education
            </p>
          </div>
          <hr
            color="red"
            size="200"
            width="100%"
            style={{ borderTop: "3px solid red" }}
          />
          <div className="owners">
            <h3 style={{ display: "inline", padding: "1px", fontSize: "30px" }}>
              Arun Patel
            </h3>
            <img
              src={Member2}
              alt="Loading..."
              style={{ height: "160px", width: "160px" }}
            />
            <p>
              <b>Guide :</b>
            </p>
            <p>
            Myself Arun, the guiding light behind the Pathshala app. With my wealth of knowledge and unwavering dedication, I will serves as a beacon of wisdom and support for students navigating their academic journey.
            My passion for education shines through my every interaction. I possesses a deep understanding of the challenges that students face and is committed to empowering them to overcome obstacles and reach their full potential.
            </p>
          </div>
          <hr
            color="red"
            size="200"
            width="100%"
            style={{ borderTop: "3px solid red" }}
          />
        </div>
      </div>

    </>
  );
}

export default About;
