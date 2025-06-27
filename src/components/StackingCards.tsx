import React from 'react';
import './StackingCards.css'; // Import your CSS styles

const StackingCards = () => {
  return (
    <>
    <div className="header">Header</div>
  <div className="cards-container">
    <div className="card">Card 1</div>
    <div className="card">Card 2</div>
    <div className="card">Card 3</div>
    <div className="card">Card 4</div>
  </div>
  <div className="footer">Footer</div>
    </>
  );
};

export default StackingCards;
