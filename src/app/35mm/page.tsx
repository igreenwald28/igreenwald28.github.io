'use client';
import imageData from '@/assets/photos.json';
import { ImageDataJSON } from '@/types/images';
import LocationLayout from '../digital/components/LocationLayout';
import './Film.css';

export default function Film() {
  const images = (imageData as ImageDataJSON).collections.film;
  const rowHeight = 280; 

  return (
    <LocationLayout>
      <div className="film-container">
        {images.map((image, index) => {
          const isLandscape = image.orientation === 'landscape';
          const aspectRatio = isLandscape ? 3/2 : 2/3;
          const width = rowHeight * aspectRatio;

          return (
            <div
              key={index}
              className={`film-item ${image.orientation}`}
              style={{
                width: `${width}px`,
                height: `${rowHeight}px`
              }}
            >
              <img
                src={image.src}
                alt={`Film photo ${index + 1}`}
                className="film-image"
              />
            </div>
          );
        })}
      </div>
    </LocationLayout>
  );
}