import React from 'react';
import Header from '../Components/School/Header';
import Header1 from '../Components/Header/Header'
import Spotlight from '../Components/School/Spotlight1';
import About1 from '../Components/Corporate/About1';
import Procedure2 from '../Components/Home/Procedure';
import Gallery from '../Components/School/Gallery'
import Testimonial2 from '../Components/Corporate/Testimonial2';
import Search from '../Components/School/Search';
import Footer from '../Components/Footer/Footer';
const School = () => {
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
export default School;