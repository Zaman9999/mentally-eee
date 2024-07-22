import React, { useRef, useState } from 'react';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import rating from '../../assets/rating.png';
import arrow from '../../assets/Arrow.png';
import arrow2 from '../../assets/Arrow2.png';
import grid2 from '../../assets/grid2.png';
import grid3 from '../../assets/testigrid.png';

const Doctors = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const doctors = [
    {
      img: doctor1,
      name: "Dr Aleena John",
      designation: "Cardiologist",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    },
    {
      img: doctor2,
      name: "Dr Patricia Sanders",
      designation: "Neurologist",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    },
    {
      img: doctor3,
      name: "Dr Vincent Jacob",
      designation: "Pediatrician",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    },
    {
      img: doctor1,
      name: "Dr David Elson",
      designation: "Dermatologist",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    },
    {
      img: doctor2,
      name: "Dr Emily Carter",
      designation: "Orthopedic",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    },
    {
      img: doctor3,
      name: "Dr John Smith",
      designation: "General Practitioner",
      desc: "Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit."
    }
  ];

  return (
    <div className='pt-14 pb-14 bg-[#F4F8FF] w-full h-auto'>
      <div className='wrapper'>
        <div className='flex items-center w-full'>
          <p className='text-gray-400 font-normal text-xl'>Doctors</p>
          <div className="ml-2 h-[1px] bg-[#D4D4D4] w-24"></div>
        </div>
        <div className='my-2 flex justify-between'>
          <h2 className='text-black font-semibold text-2xl md:text-3xl lg:text-4xl leading-normal'>
            Get to Know Our<span style={{ color: '#3283FF' }}> Doctors</span>
          </h2>
          <div className='flex gap-2'>
            <div
              onClick={handleScrollLeft}
              className='w-10 h-10 md:w-14 outline outline-1 outline-[#D3E2F7] md:h-14 border-[1px]  flex items-center justify-center hover:cursor-pointer  duration-300 ml-2'
            >
              <img src={arrow} className='w-1/2 h-1/2' alt=''/>
            </div>
            <div
              onClick={handleScrollRight}
              className='w-10 h-10 md:w-14 md:h-14 border-[1px] outline-[#7474741A] flex items-center justify-center bg-[#3182FF] hover:cursor-pointer  active:bg-[white] active:text-[#3182FF]  duration-300 ml-2'
            >
             <HiArrowRight className='w-1/2 h-1/2 text-[white]'/>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 lg:ml-24 sm:ml-0'>
        <div
          ref={scrollRef}
          className='flex gap-4 overflow-x-auto scroll-smooth custom-scrollbar'
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className='bg-[#F2F5FC] border-0  w-[280px] sm:w-[340px] md:w-[380px] lg:w-[380px] h-[400px] sm:h-[450px] md:h-[500px] relative flex-shrink-0 card hover:duration-1000 ml-2'
            >
              <img src={doctor.img} className='w-full h-[150px] sm:h-[180px] md:h-[230px]' alt='doctorimg' />
              <div className='lg:flex mt-4 justify-between pl-6 pr-4 sm:flex-wrap'>
                <img src={grid2} className='absolute bottom-0 right-0 w-1/4 h-1/4 opacity-55' alt=''/>
                <h4 className='text-base font-medium md:text-lg'>{doctor.name}</h4>
                <img src={rating} className='w-1/3 h-auto sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-[120px]' alt='rating' />
              </div>
              <div className='pl-6'>
                <p className='mt-1 text-sm md:text-sm text-[#7D7E80]'>{doctor.designation}</p>
                <div className="mt-6 h-[1px] bg-[#E9EBEF] w-1/2"></div>
              </div>
              <div className='mt-6 flex flex-col gap-2.5 pl-6 pr-4'>
                <p className='text-sm md:text-base text-gray-500'>{doctor.desc}</p>
                <button className='text-white w-1/2 h-8 md:h-12 bg-[#1A50A2] text-xs md:text-sm lg:text-base'>Book Appointment</button>
              </div>
              <img 
                src={grid3} 
                className='absolute right-0 bottom-10 opacity-100 w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/4 lg:w-1/3 lg:h-1/3 xl:w-1/3 xl:h-1/3' 
                alt='' 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
