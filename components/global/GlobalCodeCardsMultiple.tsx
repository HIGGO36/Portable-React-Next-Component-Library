import React from "react";
import GlobalCodeCard from "./GlobalCodeCard";

type GlobalCodeCardsMultipleProps = {
  count: number;
  cardProps: {
    title: string;
    paragraph: string;
    listItems: string[];
    codeExample: string[];
  };
};

const GlobalCodeCardsMultiple: React.FC<GlobalCodeCardsMultipleProps> = ({
  count,
  cardProps,
}) => {
  const renderGlobalCards = () => {
    const cards: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      cards.push(
        <GlobalCodeCard
          key={i}
          title={cardProps.title}
          paragraph={cardProps.paragraph}
          listItems={cardProps.listItems}
          codeExample={cardProps.codeExample}
        />
      );
    }
    return cards;
  };

  return <>{renderGlobalCards()}</>;
};

export default GlobalCodeCardsMultiple;
