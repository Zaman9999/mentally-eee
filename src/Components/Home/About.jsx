import React from "react";
import about_image from "../../assets/Images/aboutim.jpg";
import linefull from '../../assets/Images/linefull.png';
import bottom from '../../assets/Images/line-bottom.png';
import logoimg from '../../assets/Images/logoimg.svg';
import mentally from '../../assets/Images/Mentally-e.svg';

function About() {
  return (
    <div className="bg-[#01316A] relative ">
      <div className="hidden xl:block absolute left-[2px] top-0 w-[223px]">
        <img src={linefull} alt="line image" className="w-full h-[301px]" />
      </div>
      <div className="wrapper relative">
        <div className="hidden xl:block absolute top-[112px] left-[24px] w-[178px] z-[1]">
          <img src={bottom} alt="line image" className="w-full h-[240px]" />
        </div>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 justify-center overflow-x-hidden items-center">
          <div className="py-6 sm:py-8 md:py-10 lg:py-10 lg:mt-12">
            <div className="relative group opacity-[89]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 67.14%, rgba(0, 0, 0, 0.2) 100%)' }}>
              <img src={about_image} alt="about-image" className="relative w-full max-w-[2400px] opacity-75" />
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-28 bg-[#161616] from-black to-transparent opacity-80 group-hover:h-32 sm:group-hover:h-36 md:group-hover:h-40 lg:group-hover:h-48 transition-all duration-1000 flex overflow-hidden">
                <div className="flex gap-3 items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[30px]">
                  <div className="w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px]">
                    <img src={logoimg} alt="Logo" className="w-full" />
                  </div>
                  <div className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px]">
                    <img src={mentally} alt="mentally text image" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-16 lg:mt-20 mb-8 sm:mb-10 md:mb-12 lg:mb-12">
            <div>
              <p className="text-md sm:text-lg flex gap-3 items-center text-[#EFEFEF]">
                About Us <div className="h-[1px] bg-[#D4D4D4] w-[10%] sm:w-[15%] md:w-[20%] lg:w-[20%]"></div>
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-[500] text-[#EFEFEF]">Get to know About Us</h2>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 text-[#EFEFEF]">
              <p>
                Mentally-E is a mental health consulting platform designed to
                help individuals optimize their mental well-being and reach
                their full potential. It provides personalized guidance from
                trained professionals, empowering tools and techniques, and
                continuous support, all accessible conveniently through a
                digital platform.
              </p>
              <p>
                Mentally-E prioritizes holistic well-being, offering
                confidential and tailored solutions to help individuals develop
                resilience, manage stress, and foster a positive mindset for a
                fulfilling life. Vestibulum tempus imperdiet sem ac porttitor.
                Vivamus pulvinar commodo orci, suscipit porttitor velit
                elementum non. Fusce nec pellentesque erat, id lobortis nunc.
                Donec dui leo, ultrices quis turpis nec, sollicitudin sodales
                tortor.
              </p>
              <p>
                Aenean dapibus magna quam, id tincidunt quam placerat consequat.
                Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod
                orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus
                ac consequat at, viverra sit amet sem. Aliquam sed vestibulum
                nibh. Phasellus ut lorem pharetra, placerat urna id, tincidunt
                quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
