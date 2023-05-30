import React from "react";
import GlobalCard from "./GlobalCard";

const GlobalCardsMultiple = ({ count, cardProps }) => {
  const renderGlobalCards = () => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(<GlobalCard key={i} {...cardProps} />);
    }
    return cards;
  };

  return <>{renderGlobalCards()}</>;
};

export default GlobalCardsMultiple;
