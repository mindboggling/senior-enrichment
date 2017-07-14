import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselInstance = () => (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/image/school.jpg" />
      <Carousel.Caption style={{ color: 'red' }}>
        <h3>State of the Art Campus</h3>
        <p>Train in the state of art facilities modeled after legendary superheroes!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/image/marvel.jpg" />
      <Carousel.Caption style={{ color: 'red' }}>
        <h3>Become a Marvel Superhero</h3>
        <p>Is your role model a Marvel Superhero?  We can polish you to train in their ways!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/image/dc.jpg" />
      <Carousel.Caption style={{ color: 'red' }}>
        <h3>Become a DC Superhero</h3>
        <p>Or do you aspire to be someone like Superman!  We can make that happen!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselInstance;
