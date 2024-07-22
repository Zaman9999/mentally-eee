import React from 'react';
import searchbg from '../../assets/Corporate/Searchbg.jpeg';

const Search = () => {
  return (
    <div className="relative flex items-center pt-0">
      <img 
        src={searchbg} 
        alt="Contact Background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      <div className="wrapper flex flex-col lg:flex-row relative z-10 text-white p-4 lg:p-8">
        <div className='w-full lg:w-1/2 flex flex-col gap-4 mb-8 lg:mb-0'>
          <h2 className='text-white font-normal text-2xl lg:text-3xl leading-normal'>
            Get daily updates delivered <br /> 
            straight to your inbox
          </h2>
          <p className='text-[#E3E3E3] font-light text-base lg:text-lg leading-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae ipsa vel vitae autem deserunt!
          </p>
        </div>
        <div className='w-full lg:w-1/2 flex items-center'>
          <div className="relative w-full">
            <input 
              type="email" 
              placeholder="Enter your mailid" 
              className="text-black p-4 lg:p-6 w-full h-12 lg:h-20 text-base lg:text-xl placeholder-[#BFBDB9]" 
            />
            <button className="absolute h-10 lg:h-12 px-4 lg:px-6 top-1/2 lg:right-3 md:right-2 right-1 transform -translate-y-1/2 corabtt text-sm lg:text-base ">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
