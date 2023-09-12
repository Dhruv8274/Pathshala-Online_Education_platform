import React from 'react';
import "./Explaination.css";
import Cat from "../Assets/catreadingbook.png";
function Explaination() {
  return (
    <>
      <div className='explaination' >

        <div className="firsthalf"style={{height:"10%"}}>
            <h1>Practice</h1>
            <h3>Practice , indeed makes you perfect ! Once you have covered the concepts of a lessson, make sure that you practice questions using Online Test or DPPs. Do not forget to solve the Sample Papers & Previous years papers before your exams</h3>
        </div>
        <div className="secondhalf" style={{height:"10%"}}>
            <img style={{width:"80%"}} alt='Loading' src={Cat}></img>
        </div>
      </div>
    </>
  )
}

export default Explaination
