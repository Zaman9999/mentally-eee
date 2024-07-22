import React from 'react';
import Header from '../Components/Doctors/Header';
import Footer from '../Components/Footer/Footer';
import Spotlight2 from '../Components/Doctors/Spotlight';
import Doctors from '../Components/Home/Doctors';
import Doctors2 from '../Components/Doctors/Doctors2';

const Doctors1 = () => {
  return (
    <div>
      <Header/>
      <Spotlight2/>
      <Doctors2/>
      <Footer/>
    </div>
  );
}

export default Doctors1;
