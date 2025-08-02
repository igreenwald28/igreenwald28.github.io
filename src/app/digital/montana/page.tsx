'use client';
import imageData from '@/assets/photos.json';
import { ImageDataJSON} from '@/types/images';
import LocationLayout from '@/components/LocationLayout';

export default function ItalyPage() {
  const images = (imageData as ImageDataJSON).collections.montana;

  return (
    <LocationLayout>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`image-container ${image.orientation}`}
          >
            <img
              src={image.src}
              alt={`Montana photo ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </LocationLayout>
  );
}