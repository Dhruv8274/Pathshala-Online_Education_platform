import React from 'react'
import pdfFile from "../Pdf/PhysicsXIIch1.pdf";
import Image from "../Assets/ncert-removebg-preview.png";
function TwelthMathematics() {
  return (
    <div className="pdf">
      <img src={Image} alt="Loading" />
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">
        <div className="pdf-card">
          <button className="pdf-button">View PDF</button>
          <a href={pdfFile} download>
            <button className="pdf-button">Download</button>
          </a>
        </div>
      </a>
    </div>
  )
}

export default TwelthMathematics
