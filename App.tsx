import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { Locations } from '@/components/Locations';
import { Catering } from '@/components/Catering';
import { Footer } from '@/components/Footer';
import { BackToTopButton } from '@/components/BackToTopButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Locations />
        <Catering />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;