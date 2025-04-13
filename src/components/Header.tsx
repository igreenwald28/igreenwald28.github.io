'use client';

import React from 'react';
import './Header.css';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 


interface HeaderProps {
  onDigitalClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDigitalClick }) => {
    const router = useRouter();

    const handleInstagramClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open('https://www.instagram.com/your-instagram-handle', '_blank'); 
    };

    return (
        <header className="header">
            <Link href="/" className="title">ISAAC GREENWALD</Link>

            <div className="right-section">
                <div className="buttons">
                    <button 
                        className="button" 
                        onClick={() => router.push('/digital')}
                    >
                        DIGITAL 
                    </button>
                    <button 
                        className="button" 
                        onClick={() => router.push('/35mm')}
                    >
                        35MM 
                    </button>
                    <button className="button">ABOUT</button>
                </div>
                <button 
                    className="instagram-button" 
                    onClick={handleInstagramClick}
                    aria-label="Instagram"
                >
                    <img src="/photos/insta.png" alt="Instagram" width={24} height={24} />

                </button>
            </div>
        </header>
    );
};

export default Header;