'use client';
import Header from '@/components/Header';
import Link from 'next/link';
import '../styles/LocationStyles.css';

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="location-page">
      <Header />
      <div className="location-header">
        <Link href="/digital" className="back-button">
          ← Back to Digital
        </Link>
      </div>
      {children}
    </div>
  );
}