'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import './Digital.css';

interface Location {
  id: string;
  image: string;
  description: string;
}

const Locations: React.FC = () => {
  const router = useRouter();

  const locations: Location[] = [
    {
      id: 'centraleurope',
      image: '/photos/digi/centeur/prague1.jpg',
      description: 'CENTRAL EUROPE',
    },
    {
      id: 'italy',
      image: '/photos/digi/italy/italy1.jpg',
      description: 'ITALY'
    },
    {
      id: 'pacnw',
      image: '/photos/digi/pacnw/sb2.jpg',
      description: 'PACIFIC NORTHWEST'
    },
    {
      id: 'vietnam',
      image: '/photos/digi/vietnam/vietnam3.jpg',
      description: 'VIETNAM'
    },
    {
      id: 'nyc',
      image: '/photos/digi/nyc/nyc1.jpg',
      description: 'NYC'
    },
    {
      id: 'montana',
      image: '/photos/digi/montana/montana1.jpg',
      description: 'MONTANA'
    }
  ];

  const handleLocationClick = (locationId: string) => {
    router.push(`/digital/${locationId}`);
  };

  return (
    <>
    <Header />
    <div className="locations-container">
      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <button 
              className="location-button"
              onClick={() => handleLocationClick(location.id)}
              aria-label={`View ${location.description} photos`}
            >
              <img 
                src={location.image} 
                alt={`${location.description} location preview`}
                className="location-image"
                width={400}
                height={300}
                loading="lazy"
              />
            </button>
            <p className="location-description">{location.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Locations;