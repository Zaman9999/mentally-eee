import React, { useRef,useState } from 'react';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import arrow from '../../assets/Arrow.png'
import arrow2 from '../../assets/Arrow2.png'
import user from '../../assets/user.svg';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog1.png';
import blog5 from '../../assets/blog1.png';
import blog6 from '../../assets/blog1.png';
import date from '../../assets/date.svg';

const Blogs = () => {
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


  const blogs = [
    {
      img: blog1,
      title: "Innovate to Elevate",
      author: "Nibin",
      date: "mar-16-2021",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    },
    {
      img: blog2,
      title: "Entrepreneurial Insights",
      author: "Libin",
      date: "jan-16-2022",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    },
    {
      img: blog3,
      title: "Strategies for Success",
      author: "Sreekanth",
      date: "jan-16-2022",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    },
    {
      img: blog4,
      title: "Corporate Campus",
      author: "Ajish",
      date: "jan-16-2022",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    },
    {
      img: blog5,
      title: "Startup Spotlight",
      author: "Nibin",
      date: "jan-16-2022",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    },
    {
      img: blog6,
      title: "Mastering the Market",
      author: "Libin",
      date: "jan-16-2022",
      desc: "In this dynamic space, we explore the latest trends, strategies, and success stories that emp..."
    }
  ];

  return (
    <div className='pt-24 pb-24 '>
      <div className='wrapper'>
        <div className='flex items-center w-full'>
          <p className='text-gray-400 font-medium text-lg md:text-xl'>Blogs</p>
          <div className="ml-2 h-[1px] bg-[#D4D4D4] w-16 md:w-24"></div>
        </div>
        <div className='my-4 flex justify-between'>
          <h2 className='text-black font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-normal '>
            Go Through Our <span className='text-[#3283FF]'>Blogs</span>
          </h2>
          <div className='flex gap-2'>
            <div
              onClick={handleScrollLeft}
              className='w-10 h-10 md:w-14 outline  outline-1 outline-[#D3E2F7] md:h-14 border-[1px] border-[#7474741A] flex items-center justify-center hover:cursor-pointer active:bg-gray-900 duration-300 ml-2'
            >
              <img src={arrow} className='w-1/2 h-1/2' alt=''/>
            </div>
            <div
              onClick={handleScrollRight}
              className='w-10 h-10 md:w-14 md:h-14 border-[1px] border-[#7474741A] flex items-center justify-center bg-[#3182FF] hover:cursor-pointer hover:bg-[#3182FF] hover:text-[#F6F5F8] active:bg-gray-900 duration-300 ml-2'
            >
             <img src={arrow2} className='w-1/2 h-1/2' alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mt-16 lg:ml-24 sm:ml-4 sm:mt-2 md-:mt-2 '>
        <div ref={scrollRef} className='flex gap-3 overflow-x-auto scroll-smooth custom-scrollbar' onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {blogs.map((blog, index) => (
            <div key={index} className='blog-card w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 m-2'>
              <div className='mb-4 overflow-hidden'>
                <img className='blog-image duration-500 w-full' src={blog.img} alt='blogimg' />
              </div>
              <div className='flex flex-col gap-2 md:gap-4'>
                <h1 className='text-lg font-medium md:text-xl lg:text-2xl'>{blog.title}</h1>
                <p className='text-xs font-normal md:text-sm lg:text-base text-[#626262]'>{blog.desc}</p>
                <div className='flex justify-between md:flex md:flex-wrap'>
                  <div className='flex items-center text-xs md:text-sm lg:text-base text-[#626262]'>
                    <img src={user} alt='userimg' className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' />
                    <p className='ml-1'>{blog.author}</p>
                  </div>
                  <div className='flex items-center mt-1 text-xs md:text-sm lg:text-base text-[#626262]'>
                    <img src={date} alt='dateimg' className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' />
                    <p className='ml-1'>{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
