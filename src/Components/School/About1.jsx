import React from 'react';
import Aboutbg from '../../assets/Corporate/Aboutbg.png';
import building from '../../assets/Corporate/buildings.png';
import flower from '../../assets/Corporate/flower.svg';
import Aboutimg from '../../assets/Corporate/Aboutimg.png';

const About1 = () => {
  return (
    <div className="relative h-full flex pt-4 pb-10">
      <div className='absolute inset-0 corabt'></div>
      <div className="absolute inset-0">
        <img 
          src={Aboutbg} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-5" 
        />
      </div>
      <div className='wrapper flex flex-col lg:flex-row z-10'>
        <div className='w-full lg:w-1/2 pt-4 lg:pt-36'>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex gap-2 items-center text-white">
              Services
              <div className="h-[1px] bg-[#D4D4D4] w-[20%]"></div>
            </p>
            <h2 className="text-white mt-3 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] font-[500] leading-normal">
              Get to Know our service
            </h2>
          </div>
          <div className='mt-12'>
            <p className='text-[#EFEFEF]'>
              Mentally-E is a mental health consulting platform designed to help individuals optimize their mental well-being and reach their full potential. It provides personalized guidance from trained professionals, empowering tools and techniques, and continuous support, all accessible conveniently through a digital platform.
            </p>
            <div className='mt-6 lg:mt-24 flex flex-col lg:flex-row lg:gap-4'>
              <div className='border backdrop-blur-md !border-gray-400 w-full lg:w-1/2'>
                <div className='p-4'>
                  <div className='flex gap-2'>
                    <img src={building} alt='' className='w-8 h-8 lg:w-12 lg:h-12'/>
                    <span className='text-white'>Features</span>
                  </div>
                  <div className='mt-4'>
                    <p className='text-white'>
                      Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div className='backdrop-blur-md border !border-gray-400 w-full lg:w-1/2 mt-8 lg:mt-0'>
                <div className='p-4'>
                  <div className='flex gap-2'>
                    <img src={flower} alt='' className='w-8 h-8 lg:w-12 lg:h-12'/>
                    <span className='text-white'>Features</span>
                  </div>
                  <div className='mt-4'>
                    <p className='text-white'>
                      Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 mt-14 lg:mt-0 flex justify-center lg:justify-end'>
          <img src={Aboutimg} alt='' className='w-[300px] lg:w-[500px] h-auto'/>
        </div>
      </div>
    </div>
  );
}

export default About1;
