'use client';
import Header from '@/components/Header';
import './LocationStyles.css'

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="location-page">
      <Header />
      
      {children}
    </div>
  );
}