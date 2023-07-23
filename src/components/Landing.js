import React from 'react'
import Check from './check/Check';
import FAQ from './faq/FAQ';
import Footer from './Footer';
import Header from './header/Header';

import Our from './our/Our';
import Testimonial from './testimonial/Testimonial';
import Why from './why/Why';


const Landing = () => {
  return (
      <>
         
      <Header />
      <Why />
      <Our />
      <Check />
      <Testimonial />
      <FAQ />
      <Footer />
   
      </>
    
  )
}

export default Landing