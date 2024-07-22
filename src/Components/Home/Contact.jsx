 import React from 'react';
import '../../index.css';
import Contactbg from '../../assets/contactbg.jpeg';
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative h-full pt-8 pb-20">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0">
        <img 
          src={Contactbg} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      <div className='wrapper'>
        <div className='relative  flex flex-col items-center md:flex-row md:justify-center p-4 md:p-14 '>
          <div className='w-full md:w-1/2 flex flex-col items-center sm:items-center md:items-center lg:items-start lg:ml-4'>
            <div className='mt-10 flex flex-col gap-4 items-center md:items-center lg:items-start'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl text-white font-normal mt-5 text-center lg:text-left'>
                Get connected
                <br />
                <span className='block mt-4 lg:text-left'>with us</span>
              </h1>
              <p className='text-[#CACBCD] text-xl md:text-2xl mt-6 text-center lg:text-left'>
                Reach out and let's turn your ideas into reality
              </p>
            </div>
            <div className='flex mt-10 md:mt-36 justify-center lg:justify-start'>
              <MdLocalPhone className='text-white w-[32px] h-[32px] mt-1' />
              <p className='text-xl md:text-2xl 2xl:!text-3xl text-white ml-5'>+91 000 000 000</p>
            </div>
            <div className='flex mt-4 justify-center lg:justify-start'>
              <IoMdMail className='text-white w-[33px] h-[33px] mt-1' />
              <p className='text-xl md:text-2xl  2xl:text-3xl text-white ml-5'>info@mentally.com</p>
            </div>
          </div>
          <div className='w-full h-auto md:w-[700px] mt-10 md:mt-10 flex justify-center'>
            <div className='backdrop-blur-md w-full h-full bg-[#FFFFFF1A] form'>
              <div className='p-6 md:p-10'>
                <div className='mt-2'>
                  <span className='text-[#E4E4E4] font-normal'>Name</span>
                  <input type='text' placeholder='Enter name' className='w-full h-12 mt-2 placeholder:text-[#8C8C8C] borderr bg-transparent pl-4 text-white' />
                </div>
                <div className='mt-2'>
                  <span className='text-[#E4E4E4] font-normal'>Email</span>
                  <input type='text' placeholder='Enter email' className='w-full h-12 mt-2 placeholder:text-[#8C8C8C] borderr bg-transparent pl-4 text-white' />
                </div>
                <div className='mt-2'>
                  <span className='text-[#E4E4E4] font-normal'>Phone Number</span>
                  <input type='text' placeholder='Enter phone number' className='w-full h-12 mt-2 placeholder:text-[#8C8C8C] borderr bg-transparent pl-4 text-white' />
                </div>
                <div className='mt-2'>
                  <span className='text-[#E4E4E4] font-normal'>Message</span>
                  <textarea placeholder='Enter your message here...' className='w-full h-20 mt-2 placeholder:text-[#8C8C8C] borderr bg-transparent pl-4 text-white'></textarea>
                </div>
                <div className='mt-6 md:mt-16 flex justify-end'>
                  <button className='text-black w-full md:w-1/2 h-12 bg-white font-normal'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
