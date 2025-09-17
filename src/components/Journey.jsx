import React from "react";
import imageRight from "../assets/journey/img-right.webp";
import imageLeft from "../assets/journey/img-left.webp";

function Journey() {
  return (
    <section className="w-full px-6 md:px-40 py-20 bg-[#FBF6F0] flex flex-col">
      <div className="mb-16 text-center">
        <h3
          className="text-[#1D4985] font-bold text-4xl"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          A Jornada do Seu Pet Conosco
        </h3>
        <p className="mt-4 text-[#161C2D] opacity-70 max-w-2xl mx-auto">
          Oferecemos um ambiente acolhedor e seguro, garantindo que seu pet se
          sinta em casa enquanto você estiver ausente — com acomodações
          confortáveis e cuidado personalizado.
        </p>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h3
            className="text-[#1D4985] font-bold text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Um cantinho que é quase como o lar do seu pet
          </h3>
          <p className="text-[#161C2D] opacity-70 md:max-w-md mx-auto md:mx-0">
            Nosso serviço de hospedagem foi pensado para que seu pet se sinta
            acolhido e feliz, como se estivesse em casa. Com caminhas
            confortáveis, momentos de brincadeira e muito carinho, garantimos
            uma estadia tranquila e cheia de afeto enquanto você estiver fora.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={imageRight}
            alt="woman with a cat"
            className="w-full max-w-sm rounded-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <div className="order-1 md:order-1 flex justify-center md:justify-start">
          <img
            src={imageLeft}
            alt="dog licking lips"
            className="w-full max-w-sm rounded-lg"
          />
        </div>
        <div className="order-2 md:order-2 text-center md:text-left">
          <h3
            className="text-[#1D4985] font-bold text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Um cantinho que é quase como o lar do seu pet
          </h3>
          <p className="text-[#161C2D] opacity-70 md:max-w-md mx-auto md:mx-0">
            Nosso serviço de hospedagem foi pensado para que seu pet se sinta
            acolhido e feliz, como se estivesse em casa. Com caminhas
            confortáveis, momentos de brincadeira e muito carinho, garantimos
            uma estadia tranquila e cheia de afeto enquanto você estiver fora.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <button className="md:text-xl sm:text-base px-8 py-4 bg-[#FF9928] text-white rounded-3xl hover:bg-[#fa9017] transition">
          <a href="#">Faça uma reserva</a>
        </button>
      </div>
    </section>
  );
}

export default Journey;
