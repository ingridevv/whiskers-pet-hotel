import React from "react";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />

      <footer className="bg-[#FBF6F0] px-4 md:px-20 py-10">
        {/*4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <ul>
              <li className="my-4 opacity-60">Whiskers</li>
              <li className="my-4">Sobre Nós</li>
              <li className="my-4">Carreiras</li>
              <li className="my-4">Imprensa</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul>
              <li className="my-4 opacity-60">Suporte</li>
              <li className="my-4">Perguntas Frequentes</li>
              <li className="my-4">Blog</li>
              <li className="my-4">Contate-nos</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul>
              <li className="my-4 opacity-60">Legal</li>
              <li className="my-4">Política de Privacidade</li>
              <li className="my-4">Termos & Condições</li>
              <li className="my-4">Reembolso</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul>
              <li className="my-4 opacity-60">Siga-nos</li>
              <li className="my-4">Facebook</li>
              <li className="my-4">Instagram</li>
              <li className="my-4">LinkedIn</li>
              <li className="my-4">X</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* All Rights Reserved */}
      <div className="flex flex-col items-center m-10">
        <span className="text-center md:text-left text-sm text-[#161C2D] opacity-70">
          © 2025 Whiskers. Todos os direitos reservados | por Ingrid Silva
        </span>
      </div>
    </>
  );
}

export default Footer;
