import React from "react";
import "./Bodycard.css";
import Teacher1 from "../Assets/teacher1.png";
import Teacher2 from "../Assets/teacher2.png";
import Teacher3 from "../Assets/teacher3.png";
import Teacher4 from "../Assets/teacher4.png";
function Bodycard() {
  return (
    <div className="teacherimg" style={{ backgroundColor: "rgba(3,5,10,255)"}}>
      <h1 style={{fontFamily:'sans-serif',textAlign:'center',color:'#FF4500'}}>Our Best Transformative Mentors</h1>
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                src={Teacher1}
                alt="loading"
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Abhimanyu Singh</h3>
          <div>
            I have done my Bachelor's Degree in Education (B.Ed),From St. Xavier's College - Mumbai, Maharashtra
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                src={Teacher2}
                alt="loading"
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Rahul Rai</h3>
          <div>
            I have done my Master's Degree in Mathematics , from Banaras Hindu University (BHU) - Varanasi, Uttar Pradesh
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                src={Teacher3}
                alt="loading"
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>ChandraShekher Azad</h3>
          <div>
            I have completed my B.Tech Degree from Indian Institute of Science and Technology-Kanpur
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                src={Teacher4}
                alt="loading"
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Angel Priya</h3>
          <div>
            I have done my Postgraduate Diploma in Teaching From SRM Institute Of Science and Technology
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodycard;
