import React from 'react';
import './Portfolio.css';

interface PortfolioImage {
  src: string;
  alt: string;
}

const Portfolio: React.FC = () => {
  const images: PortfolioImage[] = [
    { src: '/photos/digi/italy/italy9.jpg', alt: 'Italy photography' },
    { src: '/photos/digi/centeur/germany8.jpg', alt: 'Germany photography' },
    { src: '/photos/digi/vietnam/vietnam9.jpg', alt: 'Vietnam photography' },
    { src: '/photos/digi/vietnam/vietnam14.jpg', alt: 'Vietnam photography' },
    { src: '/photos/digi/montana/montana2.jpg', alt: 'Montana photography' },
    { src: '/photos/digi/centeur/prague1.jpg', alt: 'Prague photography' },
  ];

  return (
    <div className="portfolio-container">
      {images.map((image, index) => (
        <div key={`${image.src}-${index}`} className="portfolio-item">
          <img 
            src={image.src} 
            alt={image.alt}
            className="portfolio-image"
            loading="lazy" 
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;