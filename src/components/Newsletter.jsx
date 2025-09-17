import React from "react";
import Logo from "../assets/navbar/logo.svg";

function Newsletter() {
  return (
    <section className="bg-[#FBF6F0] flex flex-col items-center text-center px-6 py-12 m-5">
      {/* Logo */}
      <img src={Logo} alt="Whiskers Logo" className="mb-4 w-32 sm:w-40" />

      {/* Subtitle */}
      <span className="text-[#161C2D] opacity-70 max-w-md mb-6 text-sm sm:text-base">
        Fique por dentro das dicas e novidades 🐾
      </span>

      {/* Input + Button */}
      <div className="flex flex-col md:flex-row w-full max-w-md gap-4">
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="flex-1 focus:outline-none bg-white text-[#161C2D] px-5 py-3 sm:py-4 rounded-xl shadow"
        />
        <button className="bg-[#a73825] text-white px-6 py-3 sm:py-4 rounded-xl shadow hover:bg-[#922f1f] transition">
          Inscreva-se
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
