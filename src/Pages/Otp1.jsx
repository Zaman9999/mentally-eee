import React, { useState } from 'react';
import grid2 from '../assets/Images/gridsignup.png';
import Mentallybg from '../assets/Images/Mentallybg.jpeg';
import { NavLink } from "react-router-dom";
import logo1 from "../assets/Images/logo1.svg";
import TextField from '@mui/material/TextField';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) { 
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const isAllZeroOrEmpty = otp.every(digit => digit === '' || digit === '0');
    if (isAllZeroOrEmpty) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <div className="relative h-[100vh] md:!pt-28 pt-0 bg-[#01316A]">
      <div className="absolute inset-0">
        <img 
          src={Mentallybg} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-30" 
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-0">
        <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'>
          <NavLink to="/">
            <img src={logo1} alt="Logo" className='w-[400px]' />
          </NavLink>
        </div>
        <div className='w-full md:w-1/2 mt-10 md:mt-0'>
        <div className={`bg-white p-8 rounded-lg shadow-lg w-full lg:w-[445px] xl:w-[665px] relative z-20 ${isInvalid ? 'border border-red-500' : ''}`}>
  <h2 className="text-2xl lg:text-3xl font-semibold leading-8">Please Enter the OTP</h2>
  <p className='text-[#6A7683] mt-1 text-sm'>Enter the OTP received on your phone number</p>
  <div className='flex gap-5 mt-16 justify-center'>
    {otp.map((digit, index) => (
      <TextField
        key={index}
        id={`otp-input-${index}`}
        value={digit}
        onChange={(e) => handleChange(e, index)}
        variant="standard"
        inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: "30px", marginBottom: "4px" } }}
        style={{ borderBottom: isInvalid ? '1px solid #FF5A4F' : '1px solid gray' }}
      />
    ))}
  </div>
  <div className='mt-4 flex justify-end'>
    <p className={`${isInvalid ? 'text-[#FF5A4F]' : 'text-[#6A7683]'} text-xs`}>
      {isInvalid ? 'Invalid OTP,' : 'Didn’t receive OTP?'} <span className='text-[#1A50A2]'>Resend OTP</span>
    </p>
  </div>
  <button
    onClick={handleSubmit}
    className={`w-full inline-block py-3 mt-4 px-5 border border-transparent rounded-md shadow-sm text-xs font-medium text-white text-center ${isInvalid ? 'bg-[#C9D2DB]' : 'bg-[#1A50A2]'}`}
  >
    Submit
  </button>
</div>
     </div>
      </div>
      <div className='absolute top-0 right-0 hidden xl:block w-full xl:w-[747px]'>
        <img src={grid2} alt='gridimage' className='w-full lg:h-[600px] xl:h-[720px]' />
      </div>
    </div>
  );
}

export default Otp;
