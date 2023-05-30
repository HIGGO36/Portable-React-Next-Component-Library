import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import ReactCardFlip from 'react-card-flip';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  maxWidth: '980px',
  margin: '4% auto 8% auto',
  backgroundColor: '#FFFFCC', 
  border: '10px inset #36454F', 
  borderRadius: '12px',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -10,
    bottom: -10,
    left: -10,
    right: -10,
    background: 'transparent',
    zIndex: -1,
    boxShadow: 'inset 0 0 8px #333',
    borderRadius: '12px',
    backdropFilter: 'blur(4px)',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  minHeight: "80px",
  width: "98%",
  backgroundColor: "#E6E8D6",
  margin: "36px auto 16px auto",
  textAlign: "center",
  fontWeight: "550",
  border: "2px inset #7E806C",
  boxShadow: 'inset 0 0 10px #000',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'radial-gradient(circle at top left, #FFD700, transparent, transparent, transparent), radial-gradient(circle at top right, #FFD700, transparent, transparent, transparent), radial-gradient(circle at bottom left, #FFD700, transparent, transparent, transparent), radial-gradient(circle at bottom right, #FFD700, transparent, transparent, transparent)',
    zIndex: -1,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: "block",
  width: '46%',
  height: '48px',
  margin: "10px auto 20px auto",
  textAlign: "center",
  borderRadius: '8px',
  color: "#F6F8FF",
  fontWeight: "550",
  fontSize: "1.6rem",
  background: 'linear-gradient(to right, #6B5FA9, #483D8B, #B2B6C9) !important',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px darkblue, inset 0px -4px 4px charcoal !important',
  '&:hover': {
    background: 'linear-gradient(to right, #6B5FA9, #483D8B, #B2B6C9, #0000FF) !important',
  },
  '&:focus': {
    outline: 'none !important',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5) !important',
  },
}));


export const GlobalPaper: React.FC = ({ children }) => (
  <StyledBox my={2}>
    {children}
  </StyledBox>
);

interface StyledParagraphProps {
  variant: "h4" | "body1" | "list";
  children: React.ReactNode;
}

export const StyledParagraph: React.FC<StyledParagraphProps> = ({ variant, children }) => {
  if (variant === "list") {
    return (
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        {children}
      </ul>
    );
  }

  return (
    <StyledTypography variant={variant}>
      {children}
    </StyledTypography>
  );
};

const TabBody = ({ content }) => (
  <StyledParagraph variant="body1">
    {content}
  </StyledParagraph>
)

interface TabButtonProps {
  initialContent: string;
  buttonText: string;
}

export const TabButton: React.FC<{ initialContent: string, flippedContent: string, buttonText: string }> = ({ initialContent, flippedContent, buttonText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setContent(content === initialContent ? flippedContent : initialContent);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <StyledButton onClick={handleClick}>{buttonText}</StyledButton>
      <TabBody content={content} />
    </ReactCardFlip>
  )
};