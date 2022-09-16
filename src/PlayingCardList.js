import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from './hooks'
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"); 
  // if(data.isLoading) {
  //   return <div> Please wait, LOADING .....</div>
  // }
  // if(data.error) {
  //   return <div>Ooops, something went wrong, please try again. </div>
  // }
  
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);



// const cardData = data.response

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table. </button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
};

CardTable.defaultProps = {};

export default CardTable;
