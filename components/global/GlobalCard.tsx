import React from "react";
import { styled } from "@mui/system";

const Card = styled("div")({
  width: "90%",
  minWidth: 320,
  maxWidth: 980,
  backgroundColor: "#AD9933",
  border: "3px inset #444",
  boxShadow: "inset 0 0 0 3px #444",
  borderRadius: "20px",
  margin: "2% auto",
  minHeight: 210,
  padding: "25px",
  background: "linear-gradient(225deg, #E0E0CA, #C6C6AD)",
  "&:hover, &:focus": {
    backgroundColor: "#C2B58D",
    borderColor: "#666",
  },
  "& h3": {
    fontSize: "1.9rem",
    fontWeight: "550",
    margin: "0 0 10px",
    textAlign: "center",
    lineHeight: "1.8",
  },
  "& p": {
    margin: "10px 0",
    textAlign: "center",
    lineHeight: "1.45",
  },
  "& ul": {
    paddingLeft: "20px",
    margin: "10px 0",
  },
  "& li": {
    marginBottom: "5px",
  },
});

const GlobalCard = ({ title, paragraph, listItems }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Handle the action on Enter key press
    }
  };

  return (
    <Card tabIndex={0} onKeyDown={handleKeyDown}>
      {title && <h3>{title}</h3>}
      {paragraph && <p>{paragraph}</p>}
      {listItems && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default GlobalCard;
