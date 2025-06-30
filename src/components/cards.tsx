// components/cards.tsx
import React, { useState, useEffect } from 'react';

// Definindo os tipos para as props do Card
interface CardProps {
  image: string | string[]; // Pode ser uma única imagem ou um array delas
  title: string;
  rating: number;
  reviews: number;
  passengers: number;
  doors: number;
  price: number;
}

const Cards: React.FC<CardProps> = ({
  image,
  title,
  rating,
  reviews,
  passengers,
  doors,
  price,
}) => {
  // Normaliza 'image' para sempre ser um array
  const allImages = Array.isArray(image) ? image : [image];

  // Estado para a imagem principal selecionada
  // Inicializa com a primeira imagem do array
  const [selectedImage, setSelectedImage] = useState<string>(allImages[0]);

  // Efeito para atualizar a imagem selecionada se a prop 'image' mudar
  // Isso é útil se o componente puder ser atualizado com dados diferentes
  useEffect(() => {
    const currentImages = Array.isArray(image) ? image : [image];
    if (currentImages.length > 0 && !currentImages.includes(selectedImage)) {
      setSelectedImage(currentImages[0]);
    } else if (currentImages.length > 0 && currentImages.includes(selectedImage)) {
      // Mantém a imagem selecionada se ela ainda estiver na lista
      // Se não, reseta para a primeira (já coberto acima)
    } else if (currentImages.length === 0) {
      setSelectedImage(''); // Ou uma imagem placeholder
    }
  }, [image, selectedImage]);


  const handleThumbnailClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs"> {/* Ajuste max-w-sm conforme necessário */}
      {/* Imagem Principal */}
      <div className="w-full  overflow-hidden"> {/* Container com altura fixa para a imagem principal */}
        <img
          src={selectedImage}
          alt={title}
          className="w-full h-full object-cover" // object-cover para preencher sem distorcer
        />
      </div>

      {/* Galeria de Imagens Rolável (só mostra se houver mais de uma imagem ou sempre, se preferir) */}
      {allImages.length > 0 && ( // Ou allImages.length > 1 se não quiser mostrar para uma única imagem
        <div className="p-2">
          <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded ">
            {allImages.map((imgSrc, index) => (
              <div
                key={index}
                className={`w-20 h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 ${
                  selectedImage === imgSrc ? 'border-blue-500' : 'border-transparent'
                } hover:border-blue-300`}
                onClick={() => handleThumbnailClick(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detalhes do Carro */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>⭐ {rating.toFixed(1)}</span>
          <span className="mx-2">|</span>
          <span>{reviews} reviews</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-3">
          <span>{passengers} Passageiros</span>
          <span>{doors} Portas</span>
        </div>
        <div className="text-lg font-bold text-blue-600">
          R$ {price.toLocaleString('pt-BR')} / dia {/* Adapte a formatação da moeda conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default Cards;