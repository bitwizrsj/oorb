import React from 'react';
import './StackingCards.css'; // Import your CSS styles
import modern from '../../asset/modern.png'; // Adjust the path as necessary

const StackingCards = () => {
  return (
    <>
    <div className="header">Header</div>
  <div className="cards-container">
    <div className="card">
      <img src={modern}></img>
    </div>
    <div className="card"><div className="card">
      <img src={modern}></img>
    </div></div>
    <div className="card">Card 3</div>
    <div className="card">Card 4</div>
  </div>
  <div className="footer">Footer</div>
    </>
  );
};

export default StackingCards;
