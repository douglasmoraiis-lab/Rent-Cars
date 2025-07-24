import React from "react";
import { useCart } from "../context/CartContext";

export interface CardsProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  passengers: number;
  doors: number;
  price: number;
}

const Cards: React.FC<CardsProps> = ({
  image,
  title,
  rating,
  reviews,
  passengers,
  doors,
  price,
}) => {
  const { addToCart } = useCart();

  const handleReserve = () => {
    const product = {
      id: Math.floor(Math.random() * 1000000), // Garante ID único
      nome: title,
      preco: price,
      quantidade: 1,
      imagem: image, // adiciona imagem no carrinho se quiser
    };
    addToCart(product);
  };

  return (
    <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] border rounded-lg shadow p-4 flex flex-col items-center justify-between bg-white dark:bg-gray-800 transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        ⭐ {rating} ({reviews} avaliações)
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        🧍 {passengers} passageiros | 🚪 {doors} portas
      </p>
      <p className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
        R$ {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} / dia
      </p>

      <button
        onClick={handleReserve}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Reservar
      </button>
    </div>
  );
};

export default Cards;
