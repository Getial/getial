import React, { useState } from "react";
import "../styles/cardCarrousel.css";
import { habilitys } from "../utils/habilitys";

export default function CardCarrousel() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % habilitys.length);
  };

  const prevCard = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + habilitys.length) % habilitys.length
    );
  };

  return (
    <div className="card-carousel">
      <button onClick={prevCard}>&lt;</button>
      <div className="card">
        <img
          src={habilitys[currentCard].image}
          alt={habilitys[currentCard].title}
        />
        <h2>{habilitys[currentCard].title}</h2>
        <p>{habilitys[currentCard].description}</p>
      </div>
      <button onClick={nextCard}>&gt;</button>
    </div>
  );
}
