import React from 'react';
import Header from '../Components/Corporate/Header';
import Header1 from '../Components/Header/Header'
import Spotlight from '../Components/Corporate/Spotlight1';
import About1 from '../Components/Corporate/About1';
import Procedure2 from '../Components/Home/Procedure';
import Gallery from '../Components/Corporate/Gallery'
import Testimonial2 from '../Components/Corporate/Testimonial2';
import Search from '../Components/Corporate/Search';
import Footer from '../Components/Footer/Footer';
const Corporate = () => {
  return (
    <div>
      <Header/>
      <Spotlight/>
      <About1/>
      <Gallery/>
      <Testimonial2/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default Corporate;
