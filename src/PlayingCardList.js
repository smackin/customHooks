import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from './hooks'

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const data = useAxios("https://deckofcardsapi.com/api/deck/new/draw/"); 
  if(data.isLoading) {
    return <div> Please wait, LOADING .....</div>
  }
  if(data.error) {
    return <div>Ooops, something went wrong, please try again. </div>
  }
  
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);



const cardData = data.response
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={useAxios}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
};

CardTable.defaultProps = {};

export default CardTable;
