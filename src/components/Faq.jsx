import React from "react";
import questionIcon from "../assets/faq/question-icon.svg";

function Faq() {
  const Question = ({ icon, question, answer }) => {
    return (
      <div
        className="group p-6 bg-white rounded-2xl shadow flex flex-col
                   hover:bg-[#1D4985] transition duration-200"
      >
        <h4 className="items-center flex flex-row gap-5 font-semibold text-lg text-[#1D4985] group-hover:text-white">
          {icon && <img src={icon} alt={question} className="w-8 h-16 mb-4" />}
          {question}
        </h4>
        <p className="text-[#2C2D2D] opacity-65 group-hover:text-white text-sm">{answer}</p>
      </div>
    );
  };

  const questions = [
    {
      icon: questionIcon,
      question: "Como funcionam os planos?",
      answer:
        "Nosso plano garante hospedagem recorrente para seu pet, com diárias inclusas, datas flexíveis e benefícios exclusivos. Conforto, carinho e segurança para ele, sem preocupações para você.",
    },
    {
      icon: questionIcon,
      question: "Como recebo atualizações sobre meu pet?",
      answer:
        "Você recebe fotos, vídeos e relatórios diários detalhados sobre as atividades do seu pet, garantindo tranquilidade e a certeza de que ele está em ótimas mãos.",
    },
    {
      icon: questionIcon,
      question: "O que está incluído nos planos?",
      answer:
        "Todos os planos incluem hospedagem segura, atenção personalizada, brincadeiras, espaço aconchegante e acompanhamento diário com fotos e vídeos para você acompanhar cada momento do seu pet.",
    },
    {
      icon: questionIcon,
      question: "Meu pet precisa de cuidados especiais, vocês atendem?",
      answer:
        "Sim! Adaptamos alimentação, medicação, passeios e atenção extra para garantir bem-estar, segurança e conforto completo durante toda a estadia do seu pet.",
    },
    {
      icon: questionIcon,
      question: "Posso alterar as datas de hospedagem?",
      answer:
        "Sim! Flexibilidade total: você pode ajustar ou reagendar as diárias do seu pet de acordo com sua rotina, garantindo que ele sempre tenha hospedagem quando mais precisar.",
    },
    {
      icon: questionIcon,
      question: "Posso cancelar ou pausar minha assinatura?",
      answer:
        "Claro! Você pode pausar ou cancelar sua assinatura a qualquer momento, sem complicações, mantendo total controle sobre o plano do seu pet conforme sua necessidade.",
    },
  ];

  return (
    <section className="bg-[#FBF6F0] m-20">
      <div>
        <h3
          className="text-[#1D4985] font-bold text-4xl text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Perguntas Frequentes
        </h3>
        <div className="flex items-center justify-center py-2 max-w-4xl mx-auto">
          <p className="text-center max-w-2xl mx-auto mt-4 text-[#161C2D] opacity-70">
            Nossa seção de FAQ responde às dúvidas mais comuns sobre nossos
            planos de hospedagem, serviços e como funciona a assinatura do seu
            pet.
          </p>
        </div>
      </div>

      {/* Question Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 max-w-6xl mx-auto">
        {questions.map((q, index) => (
          <Question key={index} {...q} />
        ))}
      </div>

      <div className="flex flex-col items-center m-20">
        <button className="text-sm font-bold sm:text-base px-5 py-5 sm:py-5 bg-[#FF9928] text-white rounded-3xl hover:bg-[#fa9017] transition">
          Confira Mais Perguntas
        </button>
      </div>
    </section>
  );
}

export default Faq;
