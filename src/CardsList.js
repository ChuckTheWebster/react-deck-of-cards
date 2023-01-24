import React from 'react';
import Card from './Card';
import './CardsList.css';

function CardsList({ cards }) {
  return (
    <div className='CardsList'>
      {cards.map(card =>
        <Card
          key={card.code}
          card={card}
        />
      )}
    </div>
  );
}

export default CardsList;