import React, { useEffect, useRef, useState } from "react";
import group from "../../assets/Images/Group.png";
import procedureimage from "../../assets/Images/procedure-img.png";

function Procedure2() {
  const navRef = useRef(null);
  const [scrollMarginTop, setScrollMarginTop] = useState("-mt-[135px]"); 

  const itemList = [
    { id: 1, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 2, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 3, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 4, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 5, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 6, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 7, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 8, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 9, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." },
    { id: 10, title: "Child by the Age of Six", description: "Education can help in drawing out the best talents in a student. Hence it is important to understand the interests and passion of a child, which when identified correctly could be channeled in the right direction. This leads him to a career that helps to derive happiness and satisfaction in life." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 2400) {
        setScrollMarginTop("-mt-[50px]");
      } else {
        setScrollMarginTop("-mt-[135px]");
      }
    };

  
    const setInitialMarginTop = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrollMarginTop("-mt-[50px]");
      } else {
        setScrollMarginTop("-mt-[135px]");
      }
    };
    setInitialMarginTop();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full transition-bg duration-slow"
      style={{
        backgroundImage: "linear-gradient(204.39deg, #01316A 0%, #02609D 98.73%)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="wrapper">
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-6 lg:!pt-36 text-white">
          <div className="w-full md:w-full lg:w-1/2">
            <div className="mb-14 mt-4 lg:!mt-0 flex flex-col gap-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex gap-2 items-center">
                Procedure
                <div className="h-[1px] bg-[#D4D4D4] w-[20%]"></div>
              </p>
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] font-[500] leading-normal">
                Know more about
                <br /> our procedures
              </h2>
            </div>
            <div className="mb-28" ref={navRef}>
              <nav>
                <ul>
                  {itemList.map((list, index) => (
                    <li key={list.id} className="flex gap-4 font-sans">
                      <div className="relative flex flex-col items-center z-0">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
                          <span className="font-medium text-black">
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                        </div>
                        <div>
                          {index < itemList.length - 1 && (
                            <div
                              className="absolute top-0 h-full border-1 border-dashed border-white border-opacity-100"
                              style={{
                                borderImage:
                                  "repeating-linear-gradient(white, white 10px, transparent 10px, transparent 20px) 1"
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                      <div className="mb-7">
                        <h2 className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-medium">{list.title}</h2>
                        <p className="text-[#F5F9FF] mt-2 text-[13px] sm:text-[14px] md:text-[15px] font-normal">
                          {list.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="block md:block lg:hidden w-full">
            <div className="z-0 sticky top-[40px] flex">
              <div className="relative w-full">
                <img src={procedureimage} alt="line image" className="w-full" />
              </div>
            </div>
          </div>
          <div className="hidden md:hidden lg:block w-1/2">
            <div className="z-0 sticky top-[40px] flex">
              <div className="relative top-0 right-0 procedimg">
                <img
                  src={group}
                  alt="line image"
                  className={`w-full h-[838px] lg:ml-[91px] xl:!ml-[108px]  ${scrollMarginTop}`}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Procedure2;





