import React from 'react';
import './Card.css';

function Card({ card }) {
  return (
    <img
      className='Card'
      src={card.img}
      alt={card.code}
      style={{
        transform: `rotate(${card.displayAngle}deg)`
      }} />
  );
}

export default Card;