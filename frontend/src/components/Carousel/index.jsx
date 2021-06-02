import React from 'react';
import Carousel from 'react-elastic-carousel';
import blastoise from './pics/blastoise.png';
import flareon from './pics/flareon.png';
import pikachu from './pics/pikachu.jpg';

function Slider() {
  return (
    <Carousel>
      <img src={blastoise} alt="blastoise" />
      <img src={flareon} alt="flareon" />
      <img src={pikachu} alt="flareon" />
    </Carousel>
  );
}
export default Slider;
