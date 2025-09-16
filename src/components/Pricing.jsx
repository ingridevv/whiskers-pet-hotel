import React from "react";
import whiskersClub from "../assets/pricing/whiskers-club-logo.svg";
import promoCard from "../assets/pricing/promo-card.svg";

function Pricing() {
  const PricingCard = ({ label, price, features, popular, labelColor }) => {
    return (
      <div
        className={`rounded-2xl shadow-lg flex flex-col items-center py-15 pb-0.5
        ${popular ? "bg-[#FFECB9] h-2xl" : "bg-white"}
      `}
      >
        <img src={whiskersClub} alt="Whiskers Club" />
        <h3 className={`text-sm m-2 text-white py-2 px-4 rounded-2xl ${labelColor}`}>
          {label}
        </h3>
        <p className="text-5xl font-extrabold m-5">
          <span className="text-xl font-medium">R$</span>
          {price}
          <span className="text-sm">/mês</span>
        </p>
        <ul className="list-image-[url(./assets/pricing/checkmark.svg)]">
          {features.map((f, i) => (
            <li
              key={i}
              className="text-sm/12 opacity-70 border-b-1 border-black"
            >
              {f}
            </li>
          ))}
        </ul>

        <button className="bg-[#1D4985] rounded-xl text-white m-5 py-5 px-20 hover:bg-[#2d69bd] transition-">
          <a href="#">Assine Agora!</a>
        </button>
      </div>
    );
  };

  function Promotion({ title, discount }) {
    return (
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[150px] h-[150px] z-10">
        <img
          src={promoCard}
          alt="promotional card that offers a discount"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-gray-700 text-xl font-medium -rotate-10" 
       >
            {title}
          </span>
          <span className="text-blue-500 text-5xl font-bold -rotate-10" 
             style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            {discount}
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="m-20">
      <div>
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Planos de Assinatura & Economia
        </h3>
        <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
          <p className="text-center max-w-2xl mx-auto mt-4 text-[#161C2D] opacity-70 mb-10">
            Escolha o pacote ideal para manter seu pet feliz e seguro,
            aproveitando benefícios exclusivos e economia todo mês.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-3 py-30 items-end">
        <div className="flex flex-col items-center">
          <PricingCard
            label="Pet Confort"
            price="149"
            features={[
              "2 diárias por mês",
              "Check-in e check-out livres",
              "10% em diárias extras",
              "Mimos extras inclusos",
            ]}
            labelColor="bg-[#DF7E96]"
          />
        </div>

        {/* Middle card */}
        <div className="relative flex flex-col items-center scale-[1.12] z-10 py-10">
          <Promotion title="Economize" discount="15%" />
          <PricingCard
            label="Plano VIPets"
            price="367"
            features={[
              "12 diárias por mês",
              "Suíte premium",
              "Check-in prioritário",
              "Mimos extras inclusos",
            ]}
            popular
            labelColor="bg-[#1D4985]"
          />
        </div>

        {/* Right card */}
        <div className="flex flex-col items-center">
          <PricingCard
            label="Pet Premium"
            price="249"
            features={[
              "5 diárias por mês",
              "15% em diárias extras",
              "Banho cortesia 1x/mês",
              "Mimos extras inclusos",
            ]}
             labelColor="bg-[#DD5E47]"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
