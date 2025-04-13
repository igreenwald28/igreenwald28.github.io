'use client';
import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import { usePathname } from 'next/navigation';
import './Page.css';

export default function App() {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <main>
      {pathname === '/' && <Portfolio />}
      </main>
    </div>
  );
}