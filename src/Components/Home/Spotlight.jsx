import React from "react";
import verifyIcon from "../../assets/icons/verify.svg";
import emailIcon from "../../assets/icons/email.svg";
import messageIcon from "../../assets/icons/message.svg";
import spotlight from "../../assets/Images/spotlight1.png";

function Spotlight() {
  return (
    <>
      <div className="w-full h-auto mb-4 lg:!mb-36 flex flex-col lg:flex-row lg:justify-between relative">
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="w-full lg:w-1/2 mt-10 md:mt-32 lg:mt-40 flex flex-col !gap-5 md:!gap-9 items-center lg:items-start lg:px-0">
            <p className="text-xl md:text-3xl lg:text-2xl font-medium tracking-wide text-center lg:text-left">
              Welcome to <span className="text-blue-600">Mentally-E</span>
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl xl:leading-normal xl:text-6xl font-medium tracking-wide leading-normal sm:leading-normal md:leading-normal lg:leading-normal whitespace-nowrap font-sans text-center lg:!text-left">
              Your <span className="text-blue-600">Compassionate</span> <br />
              Path to Mental <span className="text-blue-600">Wellness</span>
            </h1>
            <p className="text-base md:text-lg font-normal leading-relaxed text-[#7D7E80] text-center lg:!text-left">
              Mentally-E is a mental health consulting platform designed to help
              individuals<br />optimize their mental well-being and reach their full
              potential.
            </p>
            <button
              className="py-3 px-6 md:py-3.5 md:px-8 mt-6 lg:mt-5 button1"
            >
              Book an appointment
            </button>
            <div className=" !inline md:!flex flex-row !gap-0 md:!gap-7 py-2 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                  <img src={verifyIcon} alt="verification icon" className="md:w-10 w-7" />
                <span className="text-sm  md:text-base font-sans text-[#7D7E80]">Verified Doctors</span>
              </div>
              <div className="flex items-center gap-1">
                  <img src={emailIcon} alt="email icon" className="md:w-10 w-7" />
                <span className="text-sm md:text-base text-[#7D7E80]">Digital Prescription</span>
              </div>
              <div className="flex items-center gap-1">
                  <img src={messageIcon} alt="message icon" className="md:w-10 w-7" />
                <span className="text-sm md:text-base text-[#7D7E80]">Free Follow</span>
              </div>
            </div>
          </div>
          <div className="w-full h-auto lg:w-1/2 mt-10 lg:mt-24 flex justify-center lg:absolute lg:top-0 lg:right-0">
            <img src={spotlight} alt="spotlight" className="w-full h-auto xl:w-[647px] lg:w-[600px] sm:w-[674px] lg:absolute lg:top-0 lg:right-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Spotlight;
