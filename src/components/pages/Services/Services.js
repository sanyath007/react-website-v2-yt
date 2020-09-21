import React from 'react';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from './Data';
import Pricing from '../../Pricing/Pricing';
import HeroSection from '../../HeroSection/HeroSection';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Services;
