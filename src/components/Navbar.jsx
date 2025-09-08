import React from 'react'
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (

    <nav className='flex p-4 mx-3 mt-5 justify-between items-center'>
        <img src={logo} alt="Whiskers Logo" className="h-10 w-30"/>

        <div className='text-xs space-x-10 text-[#1D4985]'>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300"> Benefícios</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Depoimentos</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Sobre nós</a>
            <a href="#" className="hover:text-[#0c3772] hover:font-bold duration-300">Planos</a>
        </div>

        <button className='text-xs font-medium duration-200 px-4 py-3 bg-[#FF9928] hover:bg-[#fa9017] text-white rounded-2xl'>Contate-nos</button>

    </nav>
  )
}

export default Navbar