import React from "react";
import { styled } from "@mui/system";

const CodeCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  minWidth: 320,
  maxWidth: 980,
  backgroundColor: "#C3C880",
  border: "3px inset #444",
  boxShadow: "inset 0 0 0 3px #444",
  borderRadius: "20px",
  margin: "2% auto",
  minHeight: 210,
  padding: "25px",
  background: "linear-gradient(225deg, #E0E0CA, #C3C880)",
  "&:hover, &:focus": {
    backgroundColor: "#C2B58D",
    borderColor: "#666",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const TopSide = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingRight: "16px",
});

const BottomSide = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
});

const TextContent = styled("div")(({ theme }) => ({
  "& h3": {
    fontSize: "1.9rem",
    fontWeight: "bold",
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
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const CodeFormat = styled("pre")({
  flex: 1,
  padding: "16px",
  overflow: "auto",
  border: "2px inset #8C8C43",
  boxShadow: "inset 0 0 0 3px #444",
  borderRadius: "20px",
  margin: "2% auto",
  minHeight: 210,
  background: "linear-gradient(225deg, #E0E0CA, #E8EACD)",
  "&:hover, &:focus": {
    backgroundColor: "#C2B58D",
    borderColor: "#666",
  },
  fontFamily: "Courier New, monospace",
});

type GlobalCodeCardProps = {
  title?: string;
  paragraph?: string;
  listItems?: string[];
  codeExample?: string[];
};

const GlobalCodeCard: React.FC<GlobalCodeCardProps> = ({
  title,
  paragraph,
  listItems,
  codeExample,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      // Handle the action on Enter key press
    }
  };

  const getFirstWord = (text: string) => {
    const words = text.split(" ");
    return words[0];
  };

  return (
    <CodeCard tabIndex={0} onKeyDown={handleKeyDown}>
      <TopSide>
        <TextContent>
                   {title && <h3>{title}</h3>}
          {paragraph && <p>{paragraph}</p>}
          {listItems && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>
                  <span style={{ fontWeight: "bold" }}>{getFirstWord(item)}</span>
                  {item.slice(getFirstWord(item).length)}
                </li>
              ))}
            </ul>
          )}
        </TextContent>
      </TopSide>
      <BottomSide>
        <CodeFormat>
          {codeExample &&
            codeExample.map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
        </CodeFormat>
      </BottomSide>
    </CodeCard>
  );
};

export default GlobalCodeCard;

