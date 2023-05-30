import React from 'react';
import Carousel from './Carousel';

interface CarouselWrapperProps {
  items: { front: string; back: string }[];
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ items }) => {
  return <Carousel items={items} />;
};

export default CarouselWrapper;
