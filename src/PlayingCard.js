import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks";

/* Renders a single playing card. */
/* The state is determining if the card is face up or not T/F */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleFlip] = useFlip()
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  ) ;
};


export default PlayingCard;
