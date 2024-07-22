import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoname from "../../assets/logo name.svg";
import { HiOutlineArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/doctor", label: "Our Doctors" },
    { path: "/contact", label: "Contact Us" },
    { path: "/book-appointment", label: "Book Appointment" },
  ];

  const supportLinks = [
    { path: "/faq", label: "FAQ" },
    { path: "/terms", label: "Terms & Conditions" },
  ];

  const resourcesLinks = [
    { path: "/blog", label: "Blog" },
    { path: "/media", label: "Media" },
    { path: "/login", label: "User Login" },
  ];

  return (
    <div className="pt-24">
    <div className="wrapper  ">
      <div className="grid lg:place-items-start lg:grid-cols-4 sm:grid-cols-2 gap-8 relative">
        <div className="flex flex-col items-center lg:items-start gap-4 xsm:flex-row">
        <NavLink to='/'>
          <div className="flex gap-2 items-center">
            <img className="w-12 h-14 sm:w-12 sm:h-18" src={logo} alt="logo" />
            <img className="w-32 sm:w-36" src={logoname} alt="logoname" />
          </div>
          </NavLink>
          <div className="flex mt-2 gap-3 text-[#494949]">
            <IoLogoInstagram className="w-6 h-6 sm:w-6 sm:h-6" />
            <FaFacebookF className="w-6 h-6 sm:w-6 sm:h-6" />
            <FaTwitter className="w-6 h-6 sm:w-6 sm:h-6" />
            <FaLinkedinIn className="w-6 h-6 sm:w-6 sm:h-6" />
            <FaYoutube className="w-6 h-6 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start xl:ml-6 ">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-[#131313] mb-4 text-lg sm:text-xl font-medium">Company</h2>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-[#494949] text-sm sm:text-base">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start xsm:flex-row ">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-[#131313] mb-4 text-lg sm:text-xl font-medium">Support</h2>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              {supportLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-[#494949] text-sm sm:text-base">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-2 items-center lg:items-start xsm:flex-row ">
          <div className="flex flex-col items-start lg:items-start">
            <h2 className="text-[#131313] mb-4 text-lg sm:text-xl font-medium">Resources</h2>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              {resourcesLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-[#494949] text-sm sm:text-base">
                  {link.label}
                </Link>
              ))}
            </div>
            <div
              className="lg:hidden ml-2 w-14 h-14 border border-gray-700 bg-black flex items-center justify-center hover:cursor-pointer mt-4"
              onClick={scrollTop}
            >
              <HiOutlineArrowUp className="text-white" />
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex  absolute top-0 right-0 w-14 h-14 border border-gray-700 bg-black items-center justify-center hover:cursor-pointer"
          onClick={scrollTop}
        >
          <HiOutlineArrowUp className="text-white" />
        </div>
      </div>

      <div className="mt-10 h-[1px] bg-[#D4D4D4] w-full"></div>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-base font-normal text-center w-full mb-4">
          © 2024 Designed by <span className="font-medium">aromal</span> All rights reserved
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
