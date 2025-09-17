import React from 'react'
import Logo from "../assets/navbar/logo.svg"

function Newsletter() {
  return (
    <section className="bg-[#FBF6F0] flex flex-col m-10 p-10 md:justify-center items-center">
      <img src={Logo} alt="Whiskers Logo" />
      <span className="text-[#161C2D] opacity-70">
        Fique por dentro das dicas e novidades 🐾
      </span>

      <div className="m-5 p-5 flex flex-col md:flex-row md:justify-between md:space-x-6 w-full max-w-md">
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="focus:outline-0 bg-white text-[#161C2D] mb-4 md:mb-0 px-6 py-5 rounded-xl w-full"
        />
        <button className="bg-[#a73825] text-white px-6 py-5 rounded-2xl w-full md:w-auto">
          Inscreva-se
        </button>
      </div>
    </section>
  )
}

export default Newsletter
