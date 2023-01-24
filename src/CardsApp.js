import React, { useState, useEffect } from 'react';
import CardsList from './CardsList';
import axios from 'axios';

const BASE_URL = "https://deckofcardsapi.com/api/deck/";

function CardsApp() {
  const [deck, setDeck] = useState({
    id: null,
    isLoading: true
  });
  const [cards, setCards] = useState([]);

  async function shuffleDeck() {
    const response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    setDeck({
      id: response.data.deck_id,
      isLoading: false
    });
  }

  useEffect(function fetchDeckWhenMounted() {
    shuffleDeck();
  }, []
  );

  async function drawCard() {
    const response = await axios.get(`${BASE_URL}${deck.id}/draw/?count=1`);
    const cardData = response.data.cards[0];

    const card = {
      img: cardData.image,
      code: cardData.code,
    };
    setCards(prevCards => [...prevCards, card]);
  }

  if (deck.isLoading) return <i>Shuffling...</i>;

  return (
    <div>
      <h1>Cards App</h1>
      <CardsList cards={cards}/>
      <button onClick={drawCard}>Get Card!</button>
    </div>
  );
}

export default CardsApp;