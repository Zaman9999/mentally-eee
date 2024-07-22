import React, { useState } from 'react';

import Mentallybg from '../assets/Images/Mentallybg.jpeg';
import Input from '@mui/material/Input';
import grid2 from '../assets/Images/gridsignup.png';
import google from '../assets/Images/Google.svg';
import apple from '../assets/Images/Apple.svg';
import meta from '../assets/Images/Meta.svg';
import microsoft from '../assets/Images/Microsoft.svg';
import { NavLink } from "react-router-dom";
import logo1 from "../assets/Images/logo1.svg";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const Signup = () => {
    const ariaLabel = { 'aria-label': 'description' };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [lastName, setLastName] = useState('');
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [selectedGender, setSelectedGender] = useState('');

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(true);
    };

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
        setIsValidFirstName(true);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
        setIsValidLastName(true);
    };

    const handleChangePhoneNumber = (value) => {
        setPhoneNumber(value);
        setIsValidPhoneNumber(true);
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleClick = (e) => {
        let valid = true;
        if (!emailRegex.test(email)) {
            setIsValidEmail(false);
            valid = false;
        }
        if (firstName.trim() === '') {
            setIsValidFirstName(false);
            valid = false;
        }
        if (lastName.trim() === '') {
            setIsValidLastName(false);
            valid = false;
        }
        if (phoneNumber.trim() === '') {
            setIsValidPhoneNumber(false);
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    };

    return (
        <div className="relative min-h-screen pt-0 md:!pt-12 bg-[#01316A]">
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
                    <div className='bg-white p-8 rounded-lg shadow-lg w-full lg:w-[445px] xl:w-[665px] relative z-20'>
                        <h2 className="text-2xl lg:text-3xl font-semibold leading-8">Create Your Account</h2>
                        <p className='text-[#6A7683] mt-1 text-sm'>to start your Mentally-e session</p>
                        <form>
                            <div className='flex flex-col  lg:flex-row lg:gap-8'>
                                <div className="mb-4 mt-6">
                                    <span className={`text-[#6A7683] ${!isValidFirstName ? 'text-red-500' : ''}`}>First Name*</span>
                                    <br></br>
                                    <Input 
                                        placeholder="your first name here" 
                                        inputProps={ariaLabel} 
                                        className='mt-2 w-full xl:w-[260px]' 
                                        value={firstName}
                                        onChange={handleChangeFirstName}
                                        error={!isValidFirstName}
                                       
                                    />
                                    {!isValidFirstName && <p className="text-red-500 text-sm mt-1">First name is required</p>}
                                </div>
                                <div className="mb-4 mt-6">
                                    <span className={`text-[#6A7683] ${!isValidLastName ? 'text-red-500' : ''}`}>Last Name*</span>
                                    <br></br>
                                    <Input 
                                        placeholder="your last name here" 
                                        inputProps={ariaLabel} 
                                        className='mt-2 w-full xl:w-[300px]'
                                        onChange={handleChangeLastName}
                                        error={!isValidLastName}
                                      
                                    />
                                    {!isValidLastName && <p className="text-red-500 text-sm mt-1">Last name is required</p>}
                                </div>
                            </div>
                            <div className='flex flex-col  lg:flex-row lg:gap-8'>
                                <div className="mb-4 mt-1">
                                    <span className={`text-[#6A7683] ${!isValidEmail ? 'text-red-500' : ''}`}>Email*</span>
                                    <br></br>
                                    <Input 
                                        placeholder="your email here" 
                                        inputProps={ariaLabel} 
                                        className='mt-2 lastname w-full xl:w-[260px]' 
                                        value={email}
                                        onChange={handleChangeEmail}
                                        error={!isValidEmail}
                                        
                                    />
                                    {!isValidEmail && <p className="text-red-500 text-sm mt-1">Email is invalid</p>}
                                </div>
                                <div className="mb-4 mt-1">
                                    <span className={`text-[#6A7683] ${!isValidPhoneNumber ? 'text-red-500' : ''}`}>Phone*</span>
                                    <br></br>
                                    <PhoneInput
                                        country={'in'}
                                        placeholder='Enter phone number'
                                        value={phoneNumber}
                                        onChange={handleChangePhoneNumber}
                                        countryCodeEditable={false}
                                        className=''
                                        
                                    />
                                    {!isValidPhoneNumber && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
                                </div>
                            </div>
                            <div className='flex flex-col  lg:flex-row lg:gap-8'>
                                <div className="mb-4 mt-1">
                                    <span className='text-[#6A7683]'>Age*</span>
                                    <br></br>
                                    <Input 
                                        placeholder="your age here" 
                                        inputProps={ariaLabel} 
                                        className='mt-2 w-full xl:!w-[260px]' 
                                        
                                    />
                                </div>
                                <div className="mb-4 mt-1 ">
                                    <span className='text-[#6A7683]' >Gender*</span>
                                    <br></br>
                                    <RadioGroup 
                                        name="use-radio-group" 
                                        value={selectedGender}
                                        onChange={handleGenderChange}
                                        className='flex flex-row  lg:gap-2 xl:!gap-4'
                                    >
                                        <FormControlLabel 
                                            value="Male" 
                                            control={<Radio />} 
                                            label="Male" 
                                            style={{ color: selectedGender === 'Male' ? '#1A50A2' : '#AFAFAF' }}
                                        />
                                        <FormControlLabel 
                                            value="Female" 
                                            control={<Radio />} 
                                            label="Female" 
                                            style={{ color: selectedGender === 'Female' ? '#1A50A2' : '#AFAFAF' }}
                                        />
                                        <FormControlLabel 
                                            value="Other" 
                                            control={<Radio />} 
                                            label="Other" 
                                            style={{ color: selectedGender === 'Other' ? '#1A50A2' : '#AFAFAF' }}
                                        />
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className='flex '>
                                <Checkbox {...label} defaultChecked />
                                <p className='mt-2 text-sm md:text-base font-medium text-black'>I agree to the <span className='text-[#1A50A2]'> Terms of Service </span>  &<span className='text-[#1A50A2]'> Privacy Policy.</span> </p>
                            </div>
                            <NavLink 
                                to="/otp" 
                                className={`w-full inline-block py-3 mt-4 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white text-center ${(!isValidEmail || !isValidFirstName || !isValidLastName || !isValidPhoneNumber) ? 'bg-[#C9D2DB]' : 'bg-[#1A50A2] hover:bg-[#01316A]'}`}
                                onClick={handleClick}
                            >
                                Continue
                            </NavLink>
                        </form>
                        <div className="mt-6 flex flex-col items-center ">
                            <div className='flex gap-0 md:!gap-4'>
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
                    <div className="mt-6 mb-4">
                        <p className="text-sm text-white  text-center">Already have an Account? <NavLink to="/signin" className="text-[#05A6F0] font-semibold"> Sign In</NavLink></p>
                    </div>
                </div>
            </div>
           
            <div className='absolute top-0 right-0 hidden xl:block w-full xl:w-[747px]'>
                <img src={grid2} alt='gridimage' className='w-full lg:h-[600px] xl:h-[720px]' />
            </div>
           
        </div>
    );
}

export default Signup;
