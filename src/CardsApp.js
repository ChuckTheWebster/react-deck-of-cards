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

    useEffect(function fetchDeckWhenMounted() {
      shuffleDeck();
    }, []
    );

  async function shuffleDeck() {
    const response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    setDeck({
      id: response.data.deck_id,
      isLoading: false
    });
  }

  async function drawCard() {
    const response = await axios.get(`${BASE_URL}${deck.id}/draw/?count=1`);
    const cardData = response.data.cards[0];

    const card = {
      img: cardData.image,
      code: cardData.code,
      displayAngle: Math.random() * 360 - 720
    };
    setCards(prevCards => [...prevCards, card]);
  }

  function shuffleDeckClearPile() {
    setDeck({
      id: null,
      isLoading: true
    });
    shuffleDeck();
    setCards([]);
  }

  if (deck.isLoading) return <i>Shuffling...</i>;

  return (
    <div>
      <h1>Cards App</h1>
      <button onClick={drawCard}>Get Card!</button>
      <button onClick={shuffleDeckClearPile}>Shuffle the Deck!</button>
      <CardsList cards={cards}/>
    </div>
  );
}

export default CardsApp;