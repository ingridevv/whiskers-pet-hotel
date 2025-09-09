import React from "react";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />

      <footer className="bg-[#FBF6F0] grid grid-cols-4 gap-10 mx-50">
        <div className="m-10">
            <ul>
                <li className="my-4"><span className="opacity-60">Whiskers</span></li>
                <li className="my-4">Sobre Nós</li>
                <li className="my-4">Carreiras</li>
                <li className="my-4">Imprensa</li>
            </ul>
        </div>
        
        <div className="m-10">
            <ul>
                <li className="my-4"><span className="opacity-60">Suporte</span></li>
                <li className="my-4">Perguntas Frequentes</li>
                <li className="my-4">Blog</li>
                <li className="my-4">Contate-nos</li>
            </ul>
        </div>
        
        <div className="m-10">
            <ul>
                <li className="my-4"><span className="opacity-60">Legal</span></li>
                <li className="my-4">Política de Privacidade</li>
                <li className="my-4">Termos & Condições</li>
                <li className="my-4">Reembolso</li>
            </ul>
        </div>

        <div className="m-10">
            <ul>
                <li className="my-4"><span className="opacity-60">Siga-nos</span></li>
                <li className="my-4">Facebook</li>
                <li className="my-4">Instagram</li>
                <li className="my-4">LinkedIn</li>
                <li className="my-4">X</li>
            </ul>
        </div>

        
      </footer>



    {/* All Rights Reserved */}
      <div className="flex flex-col items-center m-10">
        <span className="text-2sm text-[#161C2D] opacity-70">
          © 2025 Whiskers. Todos os direitos reservados | por Ingrid Silva
        </span>
      </div>
    </>
  );
}

export default Footer;
