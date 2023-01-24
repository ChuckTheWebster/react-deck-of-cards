import React from 'react'

function Card({ card }) {
  return (
    <img src={card.img} alt={card.code} />
  )
}

export default Card