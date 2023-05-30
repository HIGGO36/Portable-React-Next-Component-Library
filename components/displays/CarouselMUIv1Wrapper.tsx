import React from 'react';
import CarouselMUIv1 from './CarouselMUIv1';

interface CarouselMUIv1WrapperProps {
  items: string[];
}

const CarouselMUIv1Wrapper: React.FC<CarouselMUIv1WrapperProps> = ({ items }) => {
  return <CarouselMUIv1 items={items} />;
};

export default CarouselMUIv1Wrapper;
