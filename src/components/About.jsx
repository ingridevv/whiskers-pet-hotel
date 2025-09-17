import React from "react";
import whiskersGallery from "../assets/about/whiskers-gallery.webp";
import vectorDivider from "../assets/about/vector-divider.svg";
import dividerTop from "../assets/about/divider-top.svg";
import petHeart from "../assets/about/pet-heart.svg";

function About() {
  return (
    <section className="w-full py-20 bg-[#1D4985] relative flex flex-col md:flex-col">
      <img
        src={dividerTop}
        alt="vector shape dividing sections"
        className="absolute m-auto top-0 z-[1] w-full"
      />

      <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-2 relative mt-10 md:mt-40 md:mx-70">
        <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="flex md:items-center md:justify-start gap-2">
              <h3
                className="text-white font-bold text-5xl text-center md:text-left"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Sobre Nós
              </h3>
              <img
                src={petHeart}
                alt="heart"
                className="hidden md:block w-8 h-8 md:w-10 md:h-10 translate-y-[-6px]"
              />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[3fr_2fr] ">
          <div className=" p-4 md:py-2 text-center md:text-left sm:flex sm:flex-col sm:justify-center">
            <p className="mt-4 text-lg/8 md:text-sm/6 text-white md:whitespace-pre-line max-w-md sm:max-w-2xl mx-auto md:mx-0">
              {`A Whiskers surge com um propósito especial: cuidar do seu pet com
            carinho, segurança e atenção, oferecendo momentos de alegria e
            conforto enquanto ele está conosco. Sabemos que deixar quem você ama
            em boas mãos é uma decisão importante, e queremos que você se sinta
            tranquilo e confiante ao confiar seu amigo de quatro patas. 
          
            Aqui na Whiskers, cada detalhe do nosso espaço é pensado para
            proporcionar conforto, diversão e bem-estar. Desde ambientes limpos
            e seguros até profissionais dedicados, nosso compromisso é oferecer
            cuidado de qualidade e transparência total. Mais que um hotel ou
            creche, somos um lar temporário, onde seu pet é recebido com amor,
            brincadeiras e atenção individualizada. 
          
            Nossa missão é que cada visita seja uma experiência feliz e acolhedora, 
            para que você possa sair e voltar com a certeza de que seu companheiro está em boas mãos. 
          
            Na Whiskers, tratamos cada pet como se fosse parte da nossa
            família. 💛`}
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <img
              src={whiskersGallery}
              alt="dog smilling and woman holding dog happily"
              className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto"
            />
          </div>
        </div>
      </div>
      <img
        src={vectorDivider}
        alt="vector line dividing sections"
        className="absolute m-auto top-350 md:top-200 z-[1] w-full"
      />
    </section>
  );
}

export default About;
