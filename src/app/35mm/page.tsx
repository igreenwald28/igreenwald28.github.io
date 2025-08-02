'use client';
import imageData from '@/assets/photos.json';
import { ImageDataJSON } from '@/types/images';
import LocationLayout from '@/components/LocationLayout';
import './Film.css';

export default function Film() {
  const images = (imageData as ImageDataJSON).collections.film;
  

  return (
    <LocationLayout>
      <div className="film-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`film-item ${image.orientation}`}
          >
            <img
              src={image.src}
              alt={`Film photo ${index + 1}`}
              className="film-image"
            />
          </div>
        ))}
      </div>
    </LocationLayout>
  );
}