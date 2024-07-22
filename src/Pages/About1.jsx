import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import Spotlight2 from '../Components/About/Spotlight';
import About from '../Components/Home/About';
import Blogs from '../Components/Home/Blogs';

const About1 = () => {
  return (
    <div>
      <Header/>
      <Spotlight2/>
      <About/>
      <Blogs/>
      
      <Footer/>
    </div>
  );
}

export default About1;
