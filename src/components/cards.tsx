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
  darkMode?: boolean; // prop opcional para modo dark
}

const Cards: React.FC<CardProps> = ({
  image,
  title,
  rating,
  reviews,
  passengers,
  doors,
  price,
  darkMode = false,
}) => {
  const allImages = Array.isArray(image) ? image : [image];
  const [selectedImage, setSelectedImage] = useState<string>(allImages[0]);

  useEffect(() => {
    const currentImages = Array.isArray(image) ? image : [image];
    if (currentImages.length > 0 && !currentImages.includes(selectedImage)) {
      setSelectedImage(currentImages[0]);
    } else if (currentImages.length === 0) {
      setSelectedImage('');
    }
  }, [image, selectedImage]);

  const handleThumbnailClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden w-full max-w-xs`}>
      {/* Imagem Principal */}
      <div className="w-full overflow-hidden">
        <img
          src={selectedImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Galeria de Imagens Rolável */}
      {allImages.length > 0 && (
        <div className="p-2">
          <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded">
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
        <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className={`flex items-center text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <span>⭐ {rating.toFixed(1)}</span>
          <span className="mx-2">|</span>
          <span>{reviews} reviews</span>
        </div>
        <div className={`flex justify-between text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <span>{passengers} Passageiros</span>
          <span>{doors} Portas</span>
        </div>
        <div className="text-lg font-bold text-blue-600">
          R$ {price.toLocaleString('pt-BR')} / dia
        </div>
      </div>
    </div>
  );
};

export default Cards;
