import React, { useState } from 'react';
import Mentallybg from '../assets/Images/Mentallybg.jpeg';
import grid2 from '../assets/Images/gridsignup.png';
import Input from '@mui/material/Input';
import google from '../assets/Images/Google.svg';
import apple from '../assets/Images/Apple.svg';
import meta from '../assets/Images/Meta.svg';
import microsoft from '../assets/Images/Microsoft.svg';
import { NavLink } from "react-router-dom";
import logo1 from "../assets/Images/logo1.svg";

const Signin = () => {
    const ariaLabel = { 'aria-label': 'description' };
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const handleChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(true);
    };

    const handleClick = (e) => {
        if (!emailRegex.test(email)) {
            e.preventDefault(); 
            setIsValidEmail(false);
        }
    };

    return (
        <div className="relative h-[100vh] flex items-center pt-0 ">
            <div className='absolute inset-0 bg-[#01316A]'></div>
            <div className="absolute inset-0">
                <img 
                    src={Mentallybg} 
                    alt="Contact Background" 
                    className="w-full h-full object-cover opacity-30" 
                />
            </div>
           
                <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center  w-full px-6 sm:px-0">
                    <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'>
                        <NavLink to="/">
                            <img src={logo1} alt="Logo" className='w-[400px]' />
                        </NavLink>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <div className='bg-white p-8 rounded-lg shadow-lg !w-full lg:!w-[445px] xl:!w-[665px] '>
                            <h2 className="text-3xl font-bold leading-10">Sign in</h2>
                            <p className='text-[#6A7683] mt-1'>to start your Mentally-e session</p>
                            <form className="mt-6">
                                <div className="mb-4">
                                    <span className={`text-[#6A7683] ${!isValidEmail ? 'text-red-500' : ''}`}>Email</span>
                                    <br />
                                    <Input 
                                        fullWidth 
                                        placeholder="Your email here" 
                                        inputProps={ariaLabel} 
                                        className='mt-2' 
                                        value={email}
                                        onChange={handleChange}
                                        error={!isValidEmail}
                                    />
                                    {!isValidEmail && <p className="text-red-500 text-sm mt-1">Enter a valid email address</p>}
                                </div>
                                <NavLink 
                                    to="/next" 
                                    className={`w-full inline-block py-3 mt-4 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white text-center ${!isValidEmail ? 'bg-[#C9D2DB]' : 'bg-[#1A50A2] hover:bg-[#01316A]'}`}
                                    onClick={handleClick}
                                >
                                    Next
                                </NavLink>
                            </form>
                            <div className="mt-6 flex flex-col items-center">
                                <div className='flex gap-0 md:!gap-4 '>
                                    <h3 className="mt-2 text-sm text-black font-semibold">Or Sign in Using</h3>
                                    <div className="flex justify-center">
                                        <NavLink to="/google" className="inline-flex justify-center items-center p-2 rounded">
                                            <img src={google} alt="Google" width={24} height={24} />
                                        </NavLink>
                                        <NavLink to="/apple" className="inline-flex justify-center items-center p-2">
                                            <img src={apple} alt="Apple" width={24} height={24} />
                                        </NavLink>
                                        <NavLink to="/meta" className="inline-flex justify-center items-center p-2">
                                            <img src={meta} alt="Meta" width={24} height={24} />
                                        </NavLink>
                                        <NavLink to="/microsoft" className="inline-flex justify-center items-center p-2">
                                            <img src={microsoft} alt="Microsoft" width={24} height={24} />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-sm text-white text-center font-normal">Don’t have an account? <NavLink to="/signup" className="text-[#05A6F0] font-semibold">Create account</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 right-0 hidden xl:block w-full xl:w-[747px]'>
                    <img src={grid2} alt='gridimage' className='w-full  lg:h-[600px] xl:h-[720px]' />
                </div>
          
        </div>
    );
}

export default Signin;
