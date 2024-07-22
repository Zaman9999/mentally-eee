import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Gallerybig1 from '../../assets/Corporate/Gallerybig1.png';
import Gallerybig2 from '../../assets/Corporate/Gallerybig2.png';
import Gallerybig3 from '../../assets/Corporate/Gallerybig3.png';
import Gallerysmall1 from '../../assets/Corporate/Gallerysmall1.png';
import Gallerysmall2 from '../../assets/Corporate/Gallerysmall2.png';
import Gallerysmall3 from '../../assets/Corporate/Gallerysmall5.png';
import Gallerysmall4 from '../../assets/Corporate/Gallerysmall1.png'; 
import Gallerysmall5 from '../../assets/Corporate/Gallerysmall5.png'; 

const largeImages = [Gallerybig1, Gallerybig2, Gallerybig3];
const smallImages = [Gallerysmall1, Gallerysmall2, Gallerysmall3, Gallerysmall4, Gallerysmall5];

const Gallery = () => {
  const largeImageSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const smallImageSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='wrapper pt-20'>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <div className='w-full lg:w-[40%] pt-10'>
          <div className='flex flex-col gap-2'>
            <p className="text-[#747474] text-base sm:text-lg md:text-xl lg:text-2xl flex gap-2 items-center ">
              Gallery
              <div className="h-[1px] bg-[#D4D4D4] w-[20%]"></div>
            </p>
            <h2 className="text-black mt-3 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] font-[500] leading-normal">
            Glimpse from our recent <br/><span className='text-[#3283FF]'>Workshops</span>
            </h2>
            <p className='text-[#525557] font-normal text-base sm:text-lg'>It provides personalized guidance from trained professionals, empowering tools and techniques, and continuous support, all accessible conveniently through a digital platform.</p>
          </div>
        </div>
        <div className='w-full lg:w-[60%]'>
          <Slider {...largeImageSettings}>
            {largeImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt='' className='w-full h-auto' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='w-full mt-8'>
        <Slider {...smallImageSettings}>
          {smallImages.map((image, index) => (
            <div key={index} className='px-1'>
              <img src={image} alt='' className='w-full object-cover ' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
