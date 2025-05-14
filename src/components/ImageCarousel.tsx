import React, { useState } from 'react';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="image-carousel">
      <div className="image-container">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Imagem ${startIndex + index + 1}`} />
        ))}
      </div>
      {startIndex + 3 < images.length && (
        <button className="next-button" onClick={handleNext}>
          &rarr;
        </button>
      )}
    </div>
  );
};

export default ImageCarousel;