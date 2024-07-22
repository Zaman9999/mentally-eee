import React from 'react';
import Header from '../Components/Header/Header'
import About from '../Components/Home/About'
import Procedure from '../Components/Home/Procedure'
import Testimonial from '../Components/Home/Testimonial'
import Blogs from '../Components/Home/Blogs'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Footer/Footer'
import Faq from '../Components/Home/Faq'
import Doctors from '../Components/Home/Doctors'
import Spotlight from '../Components/Home/Spotlight'

const Home = () => {
  return (
    <div>
   <Header/>
   <Spotlight/>
   <About/>
   <Doctors/>
   <Procedure/>
   <Testimonial/>
   <Faq/>
   <Blogs/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default Home;
