import React, { useState, useEffect, useRef } from 'react';

import arrow from '../../assets/Arrow.png'
import arrow2 from '../../assets/Arrow2.png'
import testimonial from '../../assets/testimonial.svg';
import testimonial2 from '../../assets/testi.svg';
import person1 from '../../assets/person1.png';

import person2 from '../../assets/person2.png';
import person3 from '../../assets/person1.png';
import person4 from '../../assets/person2.png';
import person5 from '../../assets/person3.png';
import person6 from '../../assets/person1.png';
import person7 from '../../assets/person2.png';
import person8 from '../../assets/person1.png';
import person9 from '../../assets/person3.png';
import grid3 from '../../assets/testigrid.png';

const Testimonial2 = () => {
    const [hoveredCards, setHoveredCards] = useState({});
    const [centerCardIndex, setCenterCardIndex] = useState(1);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleCardHover = (index, isHovered) => {
        setHoveredCards(prevState => ({
            ...prevState,
            [index]: isHovered,
        }));
    };

    const handleScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth / 2;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
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

    const persons = [person1, person2, person3, person4, person5, person6, person7, person8, person9];

    useEffect(() => {
        const container = scrollRef.current;
        const handleScrollEvent = () => {
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const centerPosition = scrollLeft + containerWidth / 2;
            const cardWidth = containerWidth / 3;
            const newCenterCardIndex = Math.floor(centerPosition / cardWidth);
            setCenterCardIndex(newCenterCardIndex);
        };
        container.addEventListener('scroll', handleScrollEvent);
        return () => {
            container.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <div className=' pt-24 pb-24'>
            <div className='wrapper'>
            <div className='flex items-center w-full'>
                <p className='text-gray-400 font-normal text-xl'>Reviews</p>
                <div className="ml-2 h-[1px] bg-[#D4D4D4] w-24"></div>
            </div>
            <div className='my-4 flex justify-between items-center'>
                <h2 className='text-black font-semibold text-3xl md:text-4xl leading-normal'>See what Our <span style={{ color: '#3283FF' }}>Clients Say</span></h2>
                <div className='flex gap-2'>
                    <div
                        className='w-10 h-10 md:w-14 md:h-14 outline  outline-1 outline-[#D3E2F7] border-[1px] border-[#7474741A] flex items-center justify-center hover:cursor-pointer  hover:text-[#F6F5F8] active:bg-gray-900 duration-300'
                        onClick={() => handleScroll('left')}
                    >
                       <img src={arrow} className='w-1/2 h-1/2' alt=''/>
                    </div>
                    <div
                        className='w-10 h-10 md:w-14 md:h-14 border-[1px] border-[#7474741A] flex items-center justify-center bg-[#3182FF] hover:cursor-pointer hover:bg-[#3182FF] hover:text-[#F6F5F8] active:bg-gray-900 duration-300'
                        onClick={() => handleScroll('right')}
                    >
                         <img src={arrow2} className='w-1/2 h-1/2' alt=''/>
                    </div>
                </div>
            </div>
            </div>
            <div className='ml-4 mr-4  lg:ml-24 sm:ml-4 sm:mt-2 md-:mt-2' >
            <div ref={scrollRef}  className='flex overflow-x-scroll gap-4 pt-12 custom-scrollbar'onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove} style={{ scrollBehavior: 'smooth' }}>
                {persons.map((person, index) => (
                    <div
                        key={index}
                        className={` flex-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-1/6 border relative transform transition duration-700 testi ${hoveredCards[index] ? 'bg-[#1A50A2]' : (centerCardIndex === index ? 'bg-[#1A50A2]' : 'bg-[#FAFAFA]')}`}
                        onMouseEnter={() => handleCardHover(index, true)}
                        onMouseLeave={() => handleCardHover(index, false)}
                    >
                        <div className='p-4 md:p-8'>
                            <div className='w-full flex items-start'>
                                <div className='w-10/12'>
                                    <p className={`transition-colors duration-300 custom-scrollbar ${hoveredCards[index] ? 'text-white' : (centerCardIndex === index ? 'text-white' : 'text-gray-500')}`}>
                                        Vestibulum tempuscxcds imperdiet sem ac porttitor. Vivamus pulvinardc commodo orci, suscipit porttitor velit elementum non. Fusce nec estibulum tempus imperdiet dkaj sem ac porttitor. Vivamus pulvinar commodo orci,
                                    </p>
                                </div>
                                {hoveredCards[index] || centerCardIndex === index ? (
                                    <img src={testimonial2} className='top-0 right-0 ml-10 ' alt='sideimg' />
                                ) : (
                                    <img src={testimonial} className='top-0 right-0 ml-10' alt='sideimg1'/>
                                )}
                            </div>
                            <div className="mt-6 h-[1px] bg-[#E9EBEF] w-1/2"></div>
                            <div className='flex gap-4 mt-6'>
                                <img src={person} alt='cardimage' className='w-10 h-10 md:w-12 md:h-12'/>
                                <div className='mt-2'>
                                    <p className={`transition-colors duration-300 ${hoveredCards[index] ? 'text-white' : (centerCardIndex === index ? 'text-white' : 'text-gray-500')}`}>Viswa Jithinathan</p>
                                    <p className={`transition-colors duration-300 ${hoveredCards[index] ? 'text-white' : (centerCardIndex === index ? 'text-white' : 'text-gray-500')}`}>22 June 2023</p>
                                </div>
                            </div>
                            <img src={grid3} className='absolute w-[100px] right-0 bottom-0 opacity-100  sm:w-[150px] md:w-[198px] lg:w-[198px]' alt='' />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
export default Testimonial2;
