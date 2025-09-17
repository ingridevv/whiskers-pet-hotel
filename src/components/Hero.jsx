import React from "react";
import cat from "../assets/hero/grey-cat.webp";
import dog from "../assets/hero/basenji-dog.webp";
import starTopLeft from "../assets/hero/star-top-left.webp";
import starBottomLeft from "../assets/hero/star-bottom-left.webp";
import starRight from "../assets/hero/star-right.webp";
import portraitLeft from "../assets/hero/portrait-left.webp";
import portraitBottom from "../assets/hero/portrait-bottom.webp";
import portraitRight from "../assets/hero/portrait-right.webp";


const decorations = [
  {
    src: cat,
    alt: "Grey Cat Looking Up",
    className:
      "hidden sm:block absolute bottom-5 sm:bottom-10 left-0 w-32 sm:w-56 md:w-[560px] z-20",
  },
  {
    src: dog,
    alt: "Friendly Basenji Dog",
    className:
      "hidden sm:block absolute bottom-0 sm:bottom-5 right-0 w-40 sm:w-60 md:w-[500px] z-5",
  },
  {
    src: starTopLeft,
    alt: "Bright Yellow Star",
    className:
      "absolute top-5 sm:top-10 left-10 sm:left-16 w-16 sm:w-24 md:w-32 z-[-1]",
  },
  {
    src: starBottomLeft,
    alt: "Bright Yellow Star",
    className:
      "absolute bottom-20 sm:bottom-32 left-10 sm:left-24 w-12 sm:w-16 md:w-24 z-[-1]",
  },
  {
    src: starRight,
    alt: "Bright Yellow Star",
    className:
      "absolute top-5 sm:top-10 right-10 sm:right-20 w-12 sm:w-16 md:w-24 z-[-1]",
  },
  {
    src: portraitLeft,
    alt: "Woman kissing dog lovingly",
    className:
      "absolute top-20 sm:top-32 left-5 sm:left-12 w-24 sm:w-32 md:w-40 z-[-1]",
  },
  {
    src: portraitRight,
    alt: "Woman kissing dog lovingly",
    className:
      "absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-40 z-[-1]",
  },
  {
    src: portraitBottom,
    alt: "Woman kissing dog lovingly",
    className:
      "absolute bottom-10 sm:bottom-20 right-20 sm:right-32 w-20 sm:w-32 md:w-40 z-0",
  },
];

function Hero() {
  return (
    <section className="relative flex flex-col w-full min-h-screen overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 text-center">
        <h1
          className="text-[#1D4985] font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-2xl"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Um lugar seguro e divertido para o seu pet enquanto você viaja ou
          trabalha.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#404040] opacity-70 mt-4 max-w-xl">
          Tranquilidade para você, momentos felizes para ele — hospedagem e
          creche com carinho e segurança.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="text-sm font-bold sm:text-base px-10 py-4 sm:py-5 bg-[#FF9928] text-white rounded-3xl hover:bg-[#fa9017] transition">
            Agendar visita grátis
          </button>

          <button className="text-sm font-bold sm:text-base px-10 py-4 sm:py-5 bg-[#B1E6FF] text-[#161C2D] rounded-3xl hover:bg-[#7fd4fc] transition">
            Reserve sua vaga
          </button>
        </div>
      </div>

      {/* Navy Blue Bottom Bar */}
      <div className="w-full h-12 md:h-36 bg-[#1D4985] mt-auto z-10"></div>

      {/* Decorative Assets */}
      {decorations.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      ))}
    </section>
  );
}

export default Hero;
