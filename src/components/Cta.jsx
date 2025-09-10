import React from "react";
import petsDoubts from "../assets/cta/pets-doubts.webp";

function Cta() {
  return (
    <section className="bg-[#FFE08B] grid grid-cols-2 gap-30">
      <div className="m-20">
        <div>
          <h3
            className="text-[#161C2D] font-bold text-4xl"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Dúvidas sobre o que é melhor para o seu pet?
          </h3>
          <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
            <p className="max-w-xl mx-auto mt-4 text-[#161C2D] opacity-70">
              Nossa equipe está pronta para ajudar você a dar o próximo passo
              com segurança e clareza.
            </p>
          </div>
           <button className="mt-5 flex py-5 px-10 bg-[#1D4985] hover:bg-[#144281] rounded-2xl text-white">Contate-nos</button>
        </div>
      </div>
      <img
        src={petsDoubts}
        alt="cat and dog looking and questioning"
        className="w-full"
      />
    </section>
  );
}

export default Cta;
