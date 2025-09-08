import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (

    <nav className='flex p-4 mx-3 mt-4 justify-between items-center'>
        {/* Logo */}
        <img src={logo} alt="Whiskers Logo" className="h-10 w-30"/>

        <div className='hidden md:block text-xs space-x-10 text-[#1D4985]'>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300"> Benefícios</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Depoimentos</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Sobre nós</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Planos</a>
        </div>

        <button className='hidden md:block text-xs font-medium duration-200 px-4 py-3 bg-[#FF9928] hover:bg-[#fa9017] text-white rounded-2xl'>
            Contate-nos</button>

        {/* Mobile Navbar */}
        <div className="md:hidden text-[#1D4985]">
            <button  onClick={toggleNavbar}>
                {open ? <FaTimes /> : <FaBars /> }
            </button>
        </div>

        {/* Menu Mobile */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white text-[#1D4985] shadow-md p-6 flex flex-col space-y-4 md:hidden">
          <a href="#" onClick={closeNavbar}>Benefícios</a>
          <a href="#" onClick={closeNavbar}>Depoimentos</a>
          <a href="#" onClick={closeNavbar}>Sobre nós</a>
          <a href="#" onClick={closeNavbar}>Planos</a>
          <button className="px-4 py-2 bg-[#FF9928] text-white rounded-xl hover:bg-[#fa9017]">
            Contate-nos
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar