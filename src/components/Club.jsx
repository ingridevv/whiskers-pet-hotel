import React from "react";
import clubHero from "../assets/club/club-hero.webp";
import icon1 from "../assets/club/icon-card-1.svg";
import icon2 from "../assets/club/icon-card-2.svg";
import icon3 from "../assets/club/icon-card-3.svg";
import vectorTop from "../assets/club/vector-top.svg";
import WhiskersClub from "../assets/pricing/whiskers-club-logo.svg";
import Polygon from "../assets/club/polygon-deco.svg";

// Card component
function Card({ icon, title, description }) {
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
}

function Club() {
  const cards = [
    {
      icon: icon1,
      title: "Economia",
      description:
        "Assine o plano VIP e garanta até 15% de desconto em diárias extras, aproveitando hospedagens frequentes com custo reduzido.",
    },
    {
      icon: icon2,
      title: "Bônus exclusivos",
      description:
        "Além de mimos e brincadeiras extras, receba fotos e vídeos diários, para acompanhar cada momento do seu pet com carinho.",
    },
    {
      icon: icon3,
      title: "Flexibilidade total",
      description:
        "Ajuste suas datas conforme sua rotina e a do seu pet, garantindo que ele tenha hospedagem quando precisar, sem limitações ou burocracia.",
    },
  ];

  return (
    <>
      {/* Club Section */}
      <section className="relative bg-[#1D4985] overflow-hidden">
        {/* Curved divider at the top */}
        <img
          src={vectorTop}
          alt=""
          className="absolute top-0 left-0 w-full z-10 pointer-events-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pt-10 md:pt-16">
          <div className="flex flex-col justify-center items-center md:items-start min-h-[300px] md:min-h-screen px-4 md:px-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <img src={WhiskersClub} alt="whiskers club logo" className="w-48 md:w-[500px] h-auto"/>
              <h3
                className="text-white font-bold text-2xl md:text-4xl mt-5"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Assine e economize no hotelzinho do seu pet
              </h3>
              <p className="max-w-md md:max-w-2xl text-white opacity-70 text-sm md:text-base">
                Garanta até 15% de desconto na hospedagem com nosso plano de
                assinatura. Você escolhe a frequência, nós cuidamos do resto — 
                conforto e tranquilidade para você e seu melhor amigo.
              </p>
              <button className="text-base md:text-lg text-[#2C2D2D] font-medium rounded-2xl py-3 md:py-4 px-4 my-4 bg-white">
                <a href="#">Faça parte do Clube!</a>
              </button>
            </div>
          </div>
          <img
            src={clubHero}
            alt="cool dog with glasses"
            className="w-full max-w-xs md:max-w-full mb-[-40px] md:mb-[-100px]"
          />
        </div>

        {/* Polygon decoration at the bottom left */}
        <img
          src={Polygon}
          alt=""
          className="absolute left-0 bottom-0 w-24 md:w-40 lg:w-60 z-10 pointer-events-none"
        />
      </section>

      {/* Club Benefits Section */}
      <section className="relative flex flex-col justify-center items-center px-4 md:p-20 bg-[#E2F5FF]">
        <div>
          <h3
            className="text-[#2C2D2D] font-bold text-2xl md:text-4xl text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Junte-se ao Clube do Seu Pet 💛
          </h3>
          <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
            <p className="text-center max-w-md md:max-w-xl mx-auto mt-4 text-[#161C2D] opacity-70 text-sm md:text-base">
              Faça parte de uma comunidade que oferece cuidado, atenção e
              momentos de alegria para seu melhor amigo.
            </p>
          </div>
        </div>

        {/* Club Benefits Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 py-10 md:py-[80px]">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Club;
