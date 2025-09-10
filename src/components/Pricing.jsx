import React from "react";

function Pricing() {
  const PricingCard = ({ label, price, features, popular }) => {
    return (
      <div
        className={`rounded-2xl shadow-lg flex flex-col items-center
        ${popular ? "bg-[#FFECB9]" : "bg-white"}
      `}
      >
        <h3>{label} </h3>
        <p>{price}</p>
        <ul>
          {features.map((f, i) => (
            <li key={i} className="text-sm opacity-80">
              {f}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section>
      <div>
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Planos de Assinatura & Economia
        </h3>
        <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
          <p className="text-center max-w-2xl mx-auto mt-4 text-[#161C2D] opacity-70">
            Escolha o pacote ideal para manter seu pet feliz e seguro,
            aproveitando benefícios exclusivos e economia todo mês.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingCard
        label="Pet Confort"
        price="R$149"
        features={[
          "2 diárias por mês",
          "Check-in e check-out livres",
          "10% em diárias extras",
          "Mimos extras inclusos",
        ]}
      ></PricingCard>

      <PricingCard
        label="Plano VIPets"
        price="R$367"
        features={[
          "12 diárias por mês",
          "Suíte premium",
          "Check-in prioritário",
          "Mimos extras inclusos",
        ]}
        popular
      ></PricingCard>

      <PricingCard
        label="Pet Premium"
        price="R$249"
        features={[
          "5 diárias por mês",
          "15% em diárias extras",
          "Banho cortesia 1x/mês",
          "Mimos extras inclusos",
        ]}
      ></PricingCard>
    </section>
  );
}

export default Pricing;
