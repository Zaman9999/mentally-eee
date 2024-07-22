import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { SlArrowDown } from 'react-icons/sl';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  {
    label: "Collab",
    subLinks: [
      { path: "/collab/school", label: "School Collab" },
      { path: "/collab/corporate", label: "Corporate Collab" },
    ],
  },
  { path: "/doctor", label: "Our Doctors" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact Us" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const handleLinkClick = () => {
    setProductsOpen(false);
    setMenuOpen(false);
  };

  const isCollabActive = () => {
    return navLinks.find(link => link.label === "Collab").subLinks.some(subLink => location.pathname.includes(subLink.path));
  };

  return (
    <header className="bg-white w-full z-50 md:fixed">
      <div className="wrapper">
        <div className="py-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <NavLink to="/">
              <img src={logo} alt="Logo" width={178} height={64} />
            </NavLink>
          </div>
          <div className="hidden md:flex lg:flex lg:gap-12 md:gap-7 items-center">
            <nav className="flex lg:gap-8 md:gap-4 items-center">
              {navLinks.map(({ path, label, subLinks }) => (
                <div key={label} className="relative group">
                  {path ? (
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black pb-2 text-base font-medium leading-7 relative after:content-[''] after:block after:w-[20px] after:border-b-[3.5px] after:border-black after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2"
                          : "text-[#747474] hover:text-black pb-2 text-base font-medium leading-5 duration-300 relative after:content-[''] after:block after:w-[20px] after:border-b-[3.5px] after:border-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 hover:after:border-black"
                      }
                      onClick={handleLinkClick}
                    >
                      {label}
                    </NavLink>
                  ) : (
                    <>
                      <button
                        className={`text-base font-medium leading-5 duration-300 flex items-center ${isCollabActive() ? 'text-black' : 'text-[#747474] hover:text-black'}`}
                        onClick={toggleProducts}
                      >
                        {label}
                        <SlArrowDown className="ml-2" />
                      </button>
                      {productsOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white border shadow-xl dropdown">
                          {subLinks.map(({ path, label }) => (
                            <NavLink
                              key={path}
                              to={path}
                              className="block px-4 py-2 sublink"
                              onClick={handleLinkClick}
                            >
                              {label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
            <NavLink to="/signup">
              <button className="border-1 border-black rounded text-black py-2 px-6 md:px-4 md:py-1 lg:px-6 lg:py-2 lg:text-base">
                Sign Up
              </button>
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute w-full top-0 left-0 flex flex-col items-center bg-white shadow-lg py-4 z-20">
            <div className="flex justify-between items-center w-full px-4">
              <NavLink to="/">
                <img src={logo} alt="Logo" width={178} height={64} />
              </NavLink>
              <button onClick={toggleMenu}>
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4 items-center mt-4">
              {navLinks.map(({ path, label, subLinks }) => (
                <div key={label} className="relative w-full flex justify-center">
                  {path ? (
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black pb-2 text-base font-medium leading-7 border-b-1 relative after:content-[''] after:block after:w-[20px] after:border-b-[3.5px] after:border-black after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2"
                          : "text-[#747474] hover:text-black pb-2 text-base font-medium leading-5 duration-500 relative after:content-[''] after:block after:w-[20px] after:border-b-[3.5px] after:border-transparent hover:after:border-black hover:after:rounded-full hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2"
                      }
                      onClick={handleLinkClick}
                    >
                      {label}
                    </NavLink>
                  ) : (
                    <>
                      <button
                        className={`text-base font-medium leading-5 duration-300 flex items-center ${isCollabActive() ? 'text-black' : 'text-[#747474] hover:text-black'}`}
                        onClick={toggleProducts}
                      >
                        {label}
                        <SlArrowDown className="ml-2" />
                      </button>
                      {productsOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white border shadow-xl dropdown">
                          {subLinks.map(({ path, label }) => (
                            <NavLink
                              key={path}
                              to={path}
                              className="block px-4 py-2 sublink"
                              onClick={handleLinkClick}
                            >
                              {label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
            <NavLink to="/signup" className="mt-4">
              <button className="border-1 border-black rounded text-black py-2 px-6 text-base">
                Sign Up
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
