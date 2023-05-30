import React from 'react';
import GlobalCarousel from '../GlobalCarousel';

interface GlobalCarouselWrapperProps {
  slides: { front: React.ReactElement; back: React.ReactElement; }[];
}

const GlobalCarouselWrapper: React.FC<GlobalCarouselWrapperProps> = ({ slides }) => {
  return <GlobalCarousel slides={slides} />;
};

export default GlobalCarouselWrapper;
