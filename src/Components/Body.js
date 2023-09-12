import React from "react"
import Vediobg from "../Assets/intro.mp4";
import { useNavigate } from 'react-router-dom';
function Body() {
  const navigate = useNavigate();

  const handleIcseClick = () => {
    navigate('/icse');
  };
  const handleCbseClick = () => {
    navigate('/cbse');
  };

  return (
    <>
    <div className="videomain">
        <div className="overlay"></div>
        <video src={Vediobg} autoPlay loop muted  width="100%" height="400"/>
        <div className="videocontent">
            <h1>Welcome to PathShala</h1>
            <h3> Education is the most powerful weapon which you can use to change the world.</h3>
            <h2>Select Your Board</h2>
            <div className="board">
            <button type="button" className="btn btn-secondary btn-lg glowing-button"style={{backgroundColor:'#FF4500'}} onClick={handleIcseClick}>ICSE</button>
            <button type="button" className="btn btn-secondary btn-lg glowing-button"style={{backgroundColor:'#FF4500'}} onClick={handleCbseClick}>CBSE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body;
