import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from './Data';
import Pricing from '../../Pricing/Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home;
