import React from "react";
import { Link } from "react-router-dom";

const Rd: React.FC = () => {
  const categorias = [
    { nome: "CLÁSSICOS", path: "classicos" },
    { nome: "ESPORTIVO", path: "esportivo" },
    { nome: "FAMÍLIA", path: "familia" },
    { nome: "ELÉTRICO", path: "eletrico" },
    { nome: "IMPORTADO", path: "importado" },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categorias.map((cat) => (
          <Link key={cat.path} to={`/rd/${cat.path}`}>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-400 transition duration-200">
              {cat.nome}
            </button>
          </Link>
        ))}
      </div>

      {/* Aqui pode entrar um componente de destaque, imagem ou cards se quiser */}
      {/* <Cards /> */}
    </div>
  );
};

export default Rd;