import React, { useState } from 'react';
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CarouselTabs = styled(Tabs)({
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-between',
  },
});

const CarouselTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  fontWeight: 'bold',
  '&.Mui-selected': {
    fontWeight: 'bold',
  },
}));

const MainBox = styled(Box)(({ theme }) => ({
  width: '90vw',
  maxWidth: '980px',
  margin: '5% auto 0 auto',
  minHeight: '350px',
  backgroundColor: 'rgba(197, 203, 206, 0.8)',
  border: '4px inset rgba(0, 0, 0, 0.3)',
  borderRadius: '16px',
  position: 'relative',
}));

const InnerBox = styled(Box)(({ theme }) => ({
  minHeight: '350px',
  border: '4px inset rgba(255, 255, 255, 0.8)',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 150, 0.6)',
  boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
}));

const PrevIconButton = styled(IconButton)({
  position: 'absolute',
  left: '10px',
  bottom: '10px',
  fontSize: '1.6rem',
  fontWeight: '600',
  color: 'black',
});

const NextIconButton = styled(IconButton)({
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  fontSize: '1.6rem',
  fontWeight: '600',
  color: 'black',
});

const StyledTypography = styled(Typography)({
  fontSize: '1.6rem',
  fontWeight: '600',
});

interface CarouselMUIv2Props {
  items: string[];
}

const CarouselMUIv2: React.FC<CarouselMUIv2Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleChange = (_, newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <MainBox>
      <PrevIconButton onClick={handlePrev}>
        <ArrowBackIcon fontSize="large" />
      </PrevIconButton>
      <CarouselTabs value={activeIndex} onChange={handleChange}>
        {items.map((item, index) => (
          <CarouselTab key={index} label={`Item ${index + 1}`} />
        ))}
      </CarouselTabs>
      <InnerBox p={2}>
        <StyledTypography>{items[activeIndex]}</StyledTypography>
      </InnerBox>
      <NextIconButton onClick={handleNext}>
        <ArrowForwardIcon fontSize="large" />
      </NextIconButton>
</MainBox>
);
};

export default CarouselMUIv2;