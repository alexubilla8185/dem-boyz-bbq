import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Menu } from './components/Menu.tsx';
import { Locations } from './components/Locations.tsx';
import { Catering } from './components/Catering.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTopButton } from './components/BackToTopButton.tsx';

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