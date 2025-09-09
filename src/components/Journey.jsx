import React from "react";
import imageRight from "../assets/journey/img-right.webp";
import imageLeft from "../assets/journey/img-left.webp";

function Journey() {
  return (
    <section className="w-full px-10 py-20 bg-[#FBF6F0] relative flex flex-col">
      <div className="m-30">
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          A Jornada do Seu Pet Conosco
        </h3>
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          <p className="text-center max-w-2xl mx-auto mb-40 mt-4 text-[#161C2D] opacity-70">
            Oferecemos um ambiente acolhedor e seguro, garantindo que seu pet se
            sinta em casa enquanto você estiver ausente — com acomodações
            confortáveis e cuidado personalizado.
          </p>
        </div>

        <div className="grid md:gap-20 md:grid-cols-2">
          <div>
            <h3
              className="text-[#1D4985] font-bold text-4xl"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Um cantinho que é quase como o lar do seu pet
            </h3>
            <p className="md:max-w-2xl mx-auto md:mb-40 mt-4 text-[#161C2D] opacity-70">
              Nosso serviço de hospedagem foi pensado para que seu pet se sinta
              acolhido e feliz, como se estivesse em casa. Com caminhas
              confortáveis, momentos de brincadeira e muito carinho, garantimos
              uma estadia tranquila e cheia de afeto enquanto você estiver fora.
            </p>
          </div>
          <img src={imageRight} alt="" className="w-[400px]" />
        </div>

        <div className="grid mt-20 md:gap-20 md:grid-cols-2">
          <img src={imageLeft} alt="" className="w-[400px]" />
          <div>
            <h3
              className="text-[#1D4985] font-bold text-4xl"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Um cantinho que é quase como o lar do seu pet
            </h3>
            <p className="md:max-w-2xl mx-auto md:mb-40 mt-4 text-[#161C2D] opacity-70">
              Nosso serviço de hospedagem foi pensado para que seu pet se sinta
              acolhido e feliz, como se estivesse em casa. Com caminhas
              confortáveis, momentos de brincadeira e muito carinho, garantimos
              uma estadia tranquila e cheia de afeto enquanto você estiver fora.
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col justify-center items-center mb-40">
      <button className="text-sm font-bold sm:text-base px-5 py-5 sm:py-5 bg-[#FF9928] text-white rounded-3xl hover:bg-[#fa9017] transition">
        Faça uma reserva
      </button>
      </div>
      
    </section>
  );
}

export default Journey;
