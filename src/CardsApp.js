import React, { useState, useEffect } from 'react';

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
      isLoading:false
    })
  }

  useEffect(function fetchDeckWhenMounted() {
    shuffleDeck()
    }, []
  );

  // useEffect(function fetchCardWhenClicked)

  async function drawCard() {
    const response = axios.get(`${BASE_URL}${deck.id}/draw/?count=1`);



  }




  return (
    <div>
      <h1>Cards App</h1>
      <button onClick={drawCard}>Get Card!</button>
    </div>
  )
}

export default CardsApp