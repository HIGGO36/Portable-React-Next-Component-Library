import React from "react";
import GlobalCodeCard from "../GlobalCard";

interface GlobalCardWrapperProps {
  title?: string;
  paragraph?: string;
  listItems?: string[];
}

const GlobalCardWrapper: React.FC<GlobalCardWrapperProps> = ({
  title,
  paragraph,
  listItems,
}) => {
  return (
    <GlobalCodeCard
      title={title}
      paragraph={paragraph}
      listItems={listItems}
    />
  );
};

export default GlobalCardWrapper;
