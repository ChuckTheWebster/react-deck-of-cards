import React from 'react';
import Card from './Card';

function CardsList({ cards }) {
  return (
    <div>
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