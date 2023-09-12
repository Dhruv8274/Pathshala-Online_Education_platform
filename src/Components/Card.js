import React, { useState } from "react";
import Book from "../Assets/books.png";
import Book1 from "../Assets/books1.png";
const Card = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const currentCard = cards[currentCardIndex];

  return (<>
  <div className="cardmain">
    <div className="image"><img alt="loading" src={Book} style={{width:"64%"}}></img></div>
    <div className="image"><img alt="loading" src={Book1} style={{width:"64%"}}></img></div>
    <div className="card" style={{ background:'white', borderRadius:'2.25rem',border:' 4px solid #FF4500'}}>
      <div className="card-content"style={{ background:'white'}} >
        <h2 style={{fontFamily:'revert-layer',fontWeight:'bold'}}>{currentCard.title}</h2>
        <p style={{fontFamily:'cursive',fontWeight:'bold'}}>{currentCard.content}</p>
        <button type="button" class="btn btn-secondary btn-lg btn-block">
          Go to the Preparation
        </button>
      </div>
      <div className="card-navigation">
        <button
          type="button"
          class="btn btn-secondary btn-lg glowing-button"
          style={{backgroundColor:'#FF4500'}}
          onClick={goToPreviousCard}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-lg glowing-button"
          style={{backgroundColor:'#FF4500'}}
          onClick={goToNextCard}
        >
          Next &rarr;
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Card;
