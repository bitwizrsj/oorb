import React from 'react';
import './style.scss';

interface CardProps {
  src: string;
  link: string;
  color: string;
  i: number;
}

const Card: React.FC<CardProps> = ({ color, i, src, link }) => {
  return (
    <div className="cardContainer">
      <div
        className="card"
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="imageContainer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={src} alt="Project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
