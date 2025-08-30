import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Menu } from './components/Menu.tsx';
import { Locations } from './components/Locations.tsx';
import { Catering } from './components/Catering.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTopButton } from './components/BackToTopButton.tsx';
import { MobileActionBar } from './components/MobileActionBar.tsx';

function App() {
  const [isCateringModalOpen, setIsCateringModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Locations />
        <Catering isModalOpen={isCateringModalOpen} setIsModalOpen={setIsCateringModalOpen} />
      </main>
      <Footer />
      <BackToTopButton isCateringModalOpen={isCateringModalOpen} />
      <MobileActionBar setIsCateringModalOpen={setIsCateringModalOpen} />
    </>
  );
}

export default App;