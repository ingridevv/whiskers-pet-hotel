import React from "react";
import photoFrames from "../assets/testimonials/photo-frames.webp";
import pugDog from "../assets/testimonials/pug-dog.webp";
import siberianCat from "../assets/testimonials/siberian-cat.webp";
import claraMendes from "../assets/testimonials/clara-mendes-testi.webp";
import starsCollection from "../assets/testimonials/stars-collection.svg";

function Testimonials() {
  return (
    <section className="w-full px-10 py-40 pt-20 pb-10 md:pb-60 bg-[#F4EADE] relative flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 text-center mb-10">
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          <img
            src={starsCollection}
            alt="bright yellow star"
            className="hidden md:block absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-10 md:top-20 md:right-120 z-5"
          />
          Histórias que Encantam
          <img
            src={starsCollection}
            alt="bright yellow star"
            className="hidden md:block absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-10 md:top-20 md:left-120 z-5"
          />
        </h3>
        <p className="text-center max-w-xl mx-auto mt-4 text-[#161C2D] opacity-70">
          Descubra como cada pet vive momentos de alegria, cuidado e carinho na
          Whiskers.
        </p>
      </div>

      <div className="w-full sm:w-3/4 md:w-[750px] mb-1 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-10 py-10 mx-auto space-y-4 z-5">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={claraMendes}
            alt="Woman dog owner holding dog lovingly"
            className="w-24 h-24 rounded-full object-cover"
          />
          <span className="font-bold text-lg">Clara Mendes</span>
          <p className="text-sm text-gray-500">Mãe da Mel</p>
        </div>

        <p className="text-[#161C2D] opacity-70 font-medium text-sm sm:text-base">
          O local é excelente, limpo e muito bem cuidado. A Fer acolheu meus
          pets com toda atenção e carinho, tornou a hospedagem deles uma
          experiência maravilhosa. Além disso, a equipe é extremamente
          cuidadosa: a minha passou por uma cirurgia recentemente e precisava de
          atenção especial, recebeu todo o cuidado necessário. Recomendo muito!
        </p>
      </div>

      {/* Pets positioning */}

      <img
        src={siberianCat}
        alt="beautiful siberian cat looking up"
        className="hidden md:block absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-150 md:top-10 md:left-0 z-1"
      />
      <img
        src={pugDog}
        alt="cute pug dog licking lips"
        className="hidden md:block absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-120 md:top-10 md:right-0 z-1"
      />
      <img
        src={photoFrames}
        alt="collection of pet owners portraits"
        className="hidden md:block z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:w-32 w-20 md:w-[1000px] mt-40"
      />
    </section>
  );
}

export default Testimonials;
