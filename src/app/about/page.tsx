'use client';
import './About.css';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="about-container">
        < Header/>
      <section className="about-content">
        <div className="bio-section">
          <p className="bio-text">
            Isaac Greenwald is an amateur photographer working with digital and analog photography. 
            Based in Salisbury, Vermont, they are particularly interested in street, wildlife, and 
            climbing photography.  
          </p>
          <p className="bio-text">
            Their work has been shown on 8a.nu featuring shots of professional climber
            Noah Wheeler on his second ascent of 'Shaolin' V17.  
          </p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>CONTACT</h3>
            <p>igreenwald28@gmail.com</p>
          </div>
          
          <div className="info-card">
            <h3>EDUCATION</h3>
            <p>Colorado College</p>
            <p>2021-2025</p>
          </div>
          
          <div className="info-card">
            <h3>EQUIPMENT</h3>
            <p>Ricoh GR IIIx</p>
            <p>Olympus OM-2n + Canon AE-1</p>
          </div>
        </div>
      </section>
    </div>
  );
}