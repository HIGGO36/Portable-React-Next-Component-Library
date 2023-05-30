import React, { useState, useEffect } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";

const RootBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  // backgroundColor: theme.palette.background.paper,
  backgroundColor: "#FFFFF0",
  width: "90vw",
  margin: "0 auto",
  borderRadius: "10px",
  boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px) brightness(0.8)",
}));


const ItemContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "350px",
  backgroundColor: "#F8E4B5",
  borderRadius: "8px", 
  border: "4px solid #E89F71",
  boxShadow: `
    inset 0px 0px 5px rgba(0, 0, 0, 0.5),
    inset 0px 0px 10px rgba(0, 0, 0, 0.5),
    inset 0px 0px 15px rgba(0, 0, 0, 0.5),
    inset 0px 0px 20px rgba(0, 0, 0, 0.5)
  `,
  perspective: '1000px',
});


const ItemText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  flexGrow: 1,
  textAlign: "center",
  color: "#4F4A4A",
  fontSize: "1.6rem"
}));

const ItemContent = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});



const buttonStyles = {
  backgroundColor: '#D3C092',
  border: '2px solid #B49F6E',
  borderRadius: '10px',
  marginRight: '8px',
  color: '#000000',
  '&:hover, &:focus, &:active': {
    backgroundColor: '#D3C092',
  },
  '&.reset-button': {
    backgroundColor: '#D3C092',
  },
};

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#D3C092",
  border: "2px solid #B49F6E",
  borderRadius: "10px",
  color: "#000000",
  margin: "8px", // Adjust the margin as needed
  padding: "10px", // Adjust the padding as needed
  transition: "background-color 0.3s ease", // Add transition for smooth hover effect
  "&:hover": {
    backgroundColor: "#806536",
  },
}));

const PrevButton = styled(IconButtonWrapper)({
  marginRight: "16px", // Increase the right margin for spacing
});

const NextButton = styled(IconButtonWrapper)({
  marginLeft: "16px", // Increase the left margin for spacing
});



const ResetButton = styled(IconButton)(({ theme }) => ({
  ...buttonStyles,
}));

const PlayButton = styled(IconButton)(({ theme }) => ({
  ...buttonStyles,
}));

const FlipButton = styled(IconButton)(({ theme }) => ({
  ...buttonStyles,
}));


const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [flipIndex, setFlipIndex] = useState<number | null>(null);
   // Track the index of the slide being flipped
  
  items = [
    {front: "Front 1", back: "Back 1"},
    { front: "Front 2", back: "Back 2" },
    { front: "Front 3", back: "Back 3" },
    { front: "Front 4", back: "Back 4" },
    {front: "Front 5", back: "Back 5"},
  // more items...
];


  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleReset = () => {
    setActiveIndex(0);
  };

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Toggle play/pause status
  };

const handleFlip = () => {
  if(flipIndex === activeIndex) {
    setFlipIndex(null);
  } else {
    setFlipIndex(activeIndex);
  }
};


  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, 2000); // Adjust the interval duration as needed
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <RootBox onKeyDown={handleKeyDown} tabIndex={0}>
      <Grid container justifyContent="center" alignItems="center">
    
      <ItemContainer>
  <ItemContent style={{
    transform: flipIndex === activeIndex ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 1s',
  }}>
    <ItemText>{items[activeIndex].front}</ItemText>
  </ItemContent>
  <ItemContent style={{
    transform: flipIndex === activeIndex ? 'rotateY(0deg)' : 'rotateY(180deg)',
    transition: 'transform 1s',
  }}>
    <ItemText>{items[activeIndex].back}</ItemText>
  </ItemContent>
</ItemContainer>

              

<PrevButton onClick={handlePrev}>
  <ArrowBackIcon />
</PrevButton>
<NextButton onClick={handleNext}>
  <ArrowForwardIcon />
              </NextButton>
              

      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <ResetButton onClick={handleReset}>Reset</ResetButton>
        <PlayButton onClick={handlePlay}>
          {isPlaying ? "Pause" : "Play"} {/* Toggle the button text */}
        </PlayButton>
    <FlipButton onClick={handleFlip}>Flip</FlipButton>

      </Grid>
    </RootBox>
  );
};

export default Carousel;
