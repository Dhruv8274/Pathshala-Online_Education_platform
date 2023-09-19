import React from "react";
import Navbar from "./Navbar";
import Photo from "../Assets/main.jpg";
import { useNavigate } from 'react-router-dom';
function Cbse() {
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
        <div className="heading10">
      <div className="back-button10">
        <button className="cardbutton10" onClick={handleBackClick}>Back</button>
      </div>
      <h1 style={{paddingRight:"50%",marginTop:'4rem'}}>CBSE</h1>
    </div>
        <div className="heading100" style={{ margin: "0px" }}>
          <h1>CBSE Class 12 Syllabus: </h1>
          <p>Empowering Success with Extensive Curriculum Coverage</p>
        </div>
        <ul className="options10" >
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>12th all notes</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all subject notes of class 12th in One drive.
              </p>
            </div>
            <button className="cards__button10">Go to Drive</button>
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>12th Video lecture</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button10">Go to Site</button>
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
            <article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>12th Book Pdf</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all books pdf like NCERT, Rs.Aggarwal etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button10">Visit Library</button>
          </div>
        </article>
          </li>
        </ul>
        <div className="heading100" style={{ margin: "0px" }}>
          <h1>CBSE Class 10 Syllabus: </h1>
          <p>Unlocking Academic Excellence with Comprehensive Course Content</p>
        </div>
        <ul className="options10" >
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>10th all notes</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all subject notes of class 12th in One drive.
              </p>
            </div>
            <button className="cards__button10">Go to Drive</button>10
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>10th Vedio Lectutre</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button10">Go to Site</button>
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
            <article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>10th Book Pdf</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all books pdf like NCERT, Rs.Aggarwal etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button10">Visit Library</button>
          </div>
        </article>
          </li>
        </ul>
        <div className="heading100" style={{ margin: "0px" }}>
          <h1>Complete CBSE Class 9 Syllabus: </h1>
          <p>A Comprehensive Guide to Class 9th Curriculum</p>
        </div>
        <ul className="options10" >
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>9th all notes</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all subject notes of class 12th in One drive.
              </p>
            </div>
            <button className="cards__button10">Go to Drive</button>
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
<article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>9th Video Lectures</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Render all the vedio of important topics and all subjects.
              </p>
            </div>
            <button className="cards__button10">Go to Site</button>
          </div>
        </article>
          </li>
          <li className="classoption10" style={{width:'100%',height:'70%'}}>
            <article className="cards10">
          <img className="cards__background10" src={Photo} alt="Loading" style={{ width: '100%', height: '100%',    transform:'perspective(800px) rotateY(0deg)'}} />
          <div className="cards__content10 | flow">
            <div className="cards__content10--container | flow">
              <h2 className="cards__title10"style={{color:'White'}}>9th Book pdf</h2>
              <p className="cards__description10"style={{color:'White'}}>
              Get all books pdf like NCERT, Rs.Aggarwal etc... so that You can simply go through and Bookmark them.
              </p>
            </div>
            <button className="cards__button10">Visit Library</button>
          </div>
        </article>
          </li>
        </ul>
      </div>
    </>
    
  );
}

export default Cbse;
