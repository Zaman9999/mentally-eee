import React from 'react';
import Spotlight from '../../assets/Images/Aboutspot.png'
import grid from '../../assets/Corporate/Spotlightgrid.png'
import { FaArrowRight } from 'react-icons/fa';

const Spotlight2 = () => {
  return (
    <>
    <div className="relative h-[100vh] flex items-center pt-0 ">
   <div className='absolute top-0 left-0 z-10'>
     <img src={grid} className='w-[300px] opacity-15'/>
   </div>
    <div className="absolute inset-0">
        <img 
            src={Spotlight} 
            alt="Contact Background" 
            className="w-full h-full object-cover " 
        />
    </div>
    <div className='wrapper  w-1/2 z-10'>
    <div className="w-full lg:w-1/2 mt-10 md:mt-32 lg:mt-40 flex flex-col gap-9 items-center lg:items-start lg:px-0">
        <p className="text-xl md:text-3xl lg:text-2xl font-medium tracking-wide text-center lg:!text-left text-[white]">
        Let’s Collaborate
            </p>
            <h1 className="text-[28px] sm:text-5xl md:text-6xl lg:text-4xl xl:leading-normal xl:text-6xl font-medium tracking-wide leading-normal sm:leading-normal md:leading-normal lg:leading-normal whitespace-nowrap font-sans text-center lg:!text-left spot spot">
            Building a Healthier<br></br> Mind Together 
            </h1>
            <button className="flex items-center text-blue-500 font-medium py-3 px-6 md:py-3.5 md:px-8 mt-6 lg:mt-5 bg-white">
          Get connected <FaArrowRight className="ml-2 transform -rotate-45 " />
         </button>
        </div>
    </div>
    </div>
    <div className="wrapper p-4 sm:p-6 md:p-10 lg:p-12 xl:!p-28 text-base sm:text-lg md:text-xl lg:text-2xl xl:leading-9 lg:leading-8 leading-2 font-semibold text-[#2A2A2A]">
    <p>Lorem ipsum dolor sit amet consectetur. Vel mi lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Diam ac luctus tortor diam eros adipiscing. We're more than a business; <span className="text-[#969696]">we're a dedicated team fueled by passion and driven by a commitment to redefine industry standards. Join us on our journey.</span></p>
</div>

    </>
  );
}

export default Spotlight2;
