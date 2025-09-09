import React from "react";
import benefitIcon1 from "../assets/benefit-icon-1.svg";
import benefitIcon2 from "../assets/benefit-icon-2.svg";
import benefitIcon3 from "../assets/benefit-icon-3.svg";
import yorkshireDog from "../assets/yorkshire-dog.webp";

function Benefits() {
  const Card = ({ icon, title, description }) => {
    return (
      <div
        className="group p-6 bg-white rounded-2xl shadow flex flex-col items-center text-center w-full sm:w-80
                    hover:bg-[#1D4985] transition-colors duration-200"
      >
        {icon && <img src={icon} alt={title} className="w-16 h-16 mb-4" />}
        <h4 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-white transition-colors duration-200">
          {title}
        </h4>
        <p className="text-gray-700 group-hover:text-white text-sm transition-colors duration-200">
          {description}
        </p>
      </div>
    );
  };

  const cards = [
    {
      icon: benefitIcon1,
      title: "Proteção e tranquilidade",
      description:
        "Ambiente seguro e higienizado, com monitoramento constante e equipe treinada. Seu pet fica protegido e você fica tranquilo.",
    },
    {
      icon: benefitIcon2,
      title: "Proteção e tranquilidade",
      description:
        "Ambiente seguro e higienizado, com monitoramento constante e equipe treinada. Seu pet fica protegido e você fica tranquilo.",
    },
    {
      icon: benefitIcon3,
      title: "Proteção e tranquilidade",
      description:
        "Ambiente seguro e higienizado, com monitoramento constante e equipe treinada. Seu pet fica protegido e você fica tranquilo.",
    },
  ];

  return (
    <section className="w-full px-10 py-20 bg-[#FBF6F0] relative flex flex-col">
      <div>
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Mais que um hotel: um lar cheio de cuidado e carinho
        </h3>
        <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
          <p className="text-center max-w-xl mx-auto mt-4 text-[#161C2D] opacity-70">
            Cada pet recebe cuidado individual, diversão e socialização em um
            ambiente seguro e acolhedor, garantindo bem-estar e tranquilidade
            para todos.
          </p>
        </div>
      </div>

      {/* Benefits Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 py-[80px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <img
        src={yorkshireDog}
        alt="Yorkshire dog playing with a ball"
        className="absolute top-40 sm:top-60 right-5 sm:right-12 w-20 sm:w-32 md:w-80 md:top-10 md:right-0 z-1"
      />
    </section>
  );
}

export default Benefits;
