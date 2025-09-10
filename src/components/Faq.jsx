import React from "react";
import questionIcon from "../assets/faq/question-icon.svg";

function Faq() {
  const Question = ({ icon, question, answer }) => {
    return (
      <div
        className="group p-6 bg-white rounded-2xl shadow flex flex-col
                   hover:bg-[#1D4985] transition duration-200"
      >
        <h4 className="items-center flex flex-row gap-5 font-semibold text-lg text-gray-900 group-hover:text-white">
          {icon && (
            <img src={icon} alt={question} className="w-8 h-16 mb-4" />
          )}
          {question}
        </h4>
        <p className="text-gray-700 group-hover:text-white text-sm">{answer}</p>
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
      question: "Qual a política de cancelamento?",
      answer:
        "Você pode cancelar a qualquer momento, com aviso prévio de 7 dias. Transparência e flexibilidade garantidas.",
    },
    {
      icon: questionIcon,
      question: "Os pets ficam supervisionados?",
      answer:
        "Sim, nossa equipe acompanha os pets em tempo integral, garantindo segurança e bem-estar.",
    },
    {
      icon: questionIcon,
      question: "Posso visitar o local antes?",
      answer:
        "Claro! Você pode agendar uma visita para conhecer o espaço e a equipe antes da hospedagem.",
    },
    {
      icon: questionIcon,
      question: "Vocês oferecem transporte?",
      answer:
        "Disponibilizamos serviço de leva e traz mediante agendamento. Mais comodidade para você.",
    },
    {
      icon: questionIcon,
      question: "Há benefícios para clientes recorrentes?",
      answer:
        "Sim, nossos clientes fiéis recebem descontos progressivos e condições especiais.",
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
    </section>
  );
}

export default Faq;
