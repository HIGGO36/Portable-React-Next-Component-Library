import React from 'react';
import CarouselMUIv2 from './CarouselMUIv2';

interface CarouselMUIv2WrapperProps {
  items: string[];
}

const CarouselMUIv2Wrapper: React.FC<CarouselMUIv2WrapperProps> = ({ items }) => {
  return <CarouselMUIv2 items={items} />;
};

export default CarouselMUIv2Wrapper;
