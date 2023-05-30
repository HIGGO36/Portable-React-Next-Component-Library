import React from "react";
import GlobalCodeCard from "../GlobalCodeCard";

interface GlobalCodeCardWrapperProps {
  title?: string;
  paragraph?: string;
  listItems?: string[];
  codeExample?: string[];
}

const GlobalCodeCardWrapper: React.FC<GlobalCodeCardWrapperProps> = ({
  title,
  paragraph,
  listItems,
  codeExample,
}) => {
  return (
    <GlobalCodeCard
      title={title}
      paragraph={paragraph}
      listItems={listItems}
      codeExample={codeExample}
    />
  );
};

export default GlobalCodeCardWrapper;
